/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  DISCRETE — PayFast Signature Generator                         ║
 * ║  Vercel Serverless Function  →  POST /api/sign                  ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  VERCEL ENV VARS REQUIRED:                                      ║
 * ║    PAYFAST_MERCHANT_ID    =  your PayFast merchant ID           ║
 * ║    PAYFAST_MERCHANT_KEY   =  your PayFast merchant key          ║
 * ║    PAYFAST_PASSPHRASE     =  passphrase set in PayFast dashboard ║
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 * The payment amount is NEVER trusted from the browser — it's always
 * recomputed here from the cart's item names against the server-side
 * price table in lib/products.js.
 */

import crypto from 'crypto';
import { computeOrderTotal } from '../lib/products.js';

// ── READ FROM ENVIRONMENT VARIABLES ──
const MERCHANT_ID  = process.env.PAYFAST_MERCHANT_ID;
const MERCHANT_KEY = process.env.PAYFAST_MERCHANT_KEY;

// ── FALLBACK URLS (can also be moved to env vars if needed) ──
const RETURN_URL   = 'https://discrete-silk.vercel.app/payment-success.html';
const CANCEL_URL   = 'https://discrete-silk.vercel.app/checkout.html';
const NOTIFY_URL   = 'https://discrete-silk.vercel.app/api/notify';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://discrete-silk.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  // ── CHECK THAT MERCHANT CREDENTIALS ARE SET ──
  if (!MERCHANT_ID || !MERCHANT_KEY) {
    console.error('[DISCRETE] PayFast credentials not configured in environment variables.');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { nameFirst, nameLast, email, phone, items, itemDesc, addrLine, addrCity, orderId } = req.body;

    if (!nameFirst || !nameLast || !email || !orderId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const computedAmount = computeOrderTotal(items);
    if (computedAmount === null) {
      return res.status(400).json({ error: 'Invalid or unrecognized items in cart' });
    }

    const fields = {
      merchant_id:      MERCHANT_ID,
      merchant_key:     MERCHANT_KEY,
      return_url:       RETURN_URL,
      cancel_url:       CANCEL_URL,
      notify_url:       NOTIFY_URL,
      name_first:       nameFirst,
      name_last:        nameLast,
      email_address:    email,
      cell_number:      phone || '',
      m_payment_id:     orderId,
      amount:           computedAmount.toFixed(2),
      item_name:        'DISCRETE Order',
      item_description: (itemDesc || '').substring(0, 255),
      custom_str1:      (addrLine || '').substring(0, 255),
      custom_str2:      (addrCity || '').substring(0, 255),
    };

    Object.keys(fields).forEach(k => {
      if (fields[k] === '' || fields[k] == null) delete fields[k];
    });

    const passphrase = process.env.PAYFAST_PASSPHRASE || '';
    const paramString = Object.keys(fields)
      .map(k => `${k}=${encodeURIComponent(fields[k]).replace(/%20/g, '+')}`)
      .join('&');

    const stringToHash = passphrase
      ? `${paramString}&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`
      : paramString;

    const signature = crypto.createHash('md5').update(stringToHash).digest('hex');

    return res.status(200).json({ fields: { ...fields, signature } });

  } catch (err) {
    console.error('[DISCRETE] /api/sign error:', err);
    return res.status(500).json({ error: 'Signing failed' });
  }
}