// api/order-status.js
// Returns the REAL status of an order from Firestore, as last updated by
// PayFast's server-to-server ITN webhook (see notify.js). Never trust
// payment_status from the browser's own return URL: it is fully controlled by
// the customer's browser and trivially fakeable.
//
// GET /api/order-status?id=DSC-123456
//
// Written as an ES module to match sign.js, orders.js and notify.js.
// (The old version used require()/module.exports, which fails if the project
// is set to "type": "module".)

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore }                  from 'firebase-admin/firestore';

function getDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId:   process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey:  (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      }),
    });
  }
  return getFirestore();
}

export default async function handler(req, res) {
  // Status changes within seconds of the ITN arriving, so never cache this.
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const orderId = req.query.id;

  if (!orderId || typeof orderId !== 'string' || !/^[A-Za-z0-9_-]{3,40}$/.test(orderId)) {
    return res.status(400).json({ error: 'Missing or invalid order id.' });
  }

  try {
    const doc = await getDb().collection('orders').doc(orderId).get();

    if (!doc.exists) {
      return res.status(404).json({ error: 'Order not found.' });
    }

    const order = doc.data();

    // Only return what the confirmation page needs. Never expose full
    // customer / shipping details through this public endpoint.
    return res.status(200).json({
      id: order.id,
      status: order.status || 'pending',   // 'pending' | 'complete' | 'review' | 'failed' | 'cancelled'
      total: order.total,
      itemCount: Array.isArray(order.items) ? order.items.length : 0,
      firstItemName: Array.isArray(order.items) && order.items[0] ? order.items[0].name : null,
    });
  } catch (err) {
    console.error('[api/order-status] Firestore read failed:', err);
    return res.status(500).json({ error: 'Could not retrieve order status.' });
  }
}