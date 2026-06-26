/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  DISCRETE — Orders API                                          ║
 * ║  Vercel Serverless Function  →  /api/orders                     ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  VERCEL ENV VARS REQUIRED:                                      ║
 * ║    FIREBASE_PROJECT_ID      =  your Firebase project ID         ║
 * ║    FIREBASE_CLIENT_EMAIL    =  service account email            ║
 * ║    FIREBASE_PRIVATE_KEY     =  service account private key      ║
 * ║    INTERNAL_API_SECRET      =  shared secret, same value as notify.js ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  GET  /api/orders   (Authorization: Bearer <Firebase ID token>) ║
 * ║       → list all orders — admin-only, verified server-side      ║
 * ║  POST /api/orders                      → save or update order   ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore }                  from 'firebase-admin/firestore';
import { getAuth }                       from 'firebase-admin/auth';
import { computeOrderTotal }             from '../lib/products.js';

function initAdmin() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId:   process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:  process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
}

function getDb() {
  initAdmin();
  return getFirestore();
}

async function requireAdmin(req, res) {
  initAdmin();
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/^Bearer (.+)$/);
  if (!match) {
    res.status(401).json({ error: 'Missing Authorization header' });
    return null;
  }
  try {
    const decoded = await getAuth().verifyIdToken(match[1]);
    if (!decoded.admin) {
      res.status(403).json({ error: 'Not an admin account' });
      return null;
    }
    return decoded;
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return null;
  }
}

async function isAdminToken(req) {
  initAdmin();
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/^Bearer (.+)$/);
  if (!match) return false;
  try {
    const decoded = await getAuth().verifyIdToken(match[1]);
    return !!decoded.admin;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin',  'https://discrete-silk.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    const admin = await requireAdmin(req, res);
    if (!admin) return;

    const { status } = req.query;
    const db = getDb();

    try {
      let query = db.collection('orders').orderBy('date', 'desc');
      if (status && status !== 'all') {
        query = db.collection('orders').where('status', '==', status).orderBy('date', 'desc');
      }
      const snap = await query.limit(200).get();
      const orders = snap.docs.map(doc => ({ _docId: doc.id, ...doc.data() }));
      return res.status(200).json({ orders });
    } catch (err) {
      console.error('[DISCRETE] orders GET error:', err);
      return res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  if (req.method === 'POST') {
    const db = getDb();
    const { id, status, customer, shipping, items, date, pfPaymentId, paidAmount } = req.body;

    if (!id) return res.status(400).json({ error: 'Missing order id' });

    const internalSecret = req.headers['x-internal-secret'];
    const isInternal = !!internalSecret && internalSecret === process.env.INTERNAL_API_SECRET;

    try {
      const ref = db.collection('orders').doc(id);
      const existing = await ref.get();
      const existingData = existing.exists ? existing.data() : null;

      const isNewPendingOrder = !existing.exists && (!status || status === 'pending');
      const isHarmlessRetry =
        existing.exists &&
        existingData.status === 'pending' &&
        (!status || status === 'pending') &&
        !pfPaymentId;

      if (!isNewPendingOrder && !isHarmlessRetry && !isInternal) {
        const isAdmin = await isAdminToken(req);
        if (!isAdmin) {
          console.warn(`[DISCRETE] Blocked unauthorized order write: ${id}`);
          return res.status(403).json({ error: 'Forbidden' });
        }
      }

      if (existing.exists) {
        const update = {};
        if (status) {
          if (
            status === 'paid' &&
            typeof paidAmount === 'number' &&
            typeof existingData.total === 'number' &&
            Math.abs(paidAmount - existingData.total) > 0.01
          ) {
            // What was actually paid doesn't match this order's real total —
            // flag it for a human instead of silently marking it fulfilled.
            update.status = 'review';
            update.paidAmount = paidAmount;
            console.warn(`[DISCRETE] Amount mismatch on ${id}: paid R${paidAmount}, expected R${existingData.total}`);
          } else {
            update.status = status;
          }
        }
        if (pfPaymentId) update.pfPaymentId = pfPaymentId;
        update.updatedAt = new Date().toISOString();
        await ref.update(update);
        return res.status(200).json({ ok: true, action: 'updated' });
      } else {
        const computedTotal = computeOrderTotal(items);
        if (computedTotal === null) {
          return res.status(400).json({ error: 'Invalid or unrecognized items in cart' });
        }
        await ref.set({
          id,
          status:    status    || 'pending',
          customer:  customer  || {},
          shipping:  shipping  || {},
          items:     items     || [],
          total:     computedTotal,
          date:      date      || new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
        return res.status(200).json({ ok: true, action: 'created' });
      }
    } catch (err) {
      console.error('[DISCRETE] orders POST error:', err);
      return res.status(500).json({ error: 'Failed to save order' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}