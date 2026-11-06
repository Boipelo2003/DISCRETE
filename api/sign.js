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
 *
 * OPTIONAL ENV VAR:  SITE_URL  (defaults to https://www.discreteclothing.co.za)
 */

import crypto from 'crypto';
import { computeOrderTotal } from '../lib/products.js';

// ── READ FROM ENVIRONMENT VARIABLES ──
const MERCHANT_ID  = process.env.PAYFAST_MERCHANT_ID;
const MERCHANT_KEY = process.env.PAYFAST_MERCHANT_KEY;

// ── SITE URLS ──
// Customers shop on the custom domain, so PayFast must send them BACK to that same
// domain. Browser storage is per-domain: if they returned to the *.vercel.app address,
// the order details saved by checkout.html would not be there.
// Override with the SITE_URL env var in Vercel if the domain ever changes.
const SITE_URL     = (process.env.SITE_URL || 'https://www.discreteclothing.co.za').replace(/\/$/, '');
const RETURN_URL   = `${SITE_URL}/success.html`;
const CANCEL_URL   = `${SITE_URL}/cancel.html`;
const NOTIFY_URL   = `${SITE_URL}/api/notify`;

// PayFast builds its signature with PHP's urlencode(): uppercase hex, spaces as '+',
// and it ALSO escapes  ! ' ( ) * ~  which encodeURIComponent leaves alone. Without this,
// any name/address containing an apostrophe or bracket (O'Brien, St George's Mall, "(Shop 4)")
// produces a signature PayFast rejects.
const pfEncode = (v) =>
  encodeURIComponent(String(v).trim())
    .replace(/[!'()*~]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
    .replace(/%20/g, '+');

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
    if (!/^[A-Za-z0-9_-]{3,40}$/.test(String(orderId))) {
      return res.status(400).json({ error: 'Invalid order id' });
    }

    // Attach the order ID to the return URL as a query param, so
    // payment-success.html knows which order to look up after PayFast
    // redirects the customer back. PayFast does NOT add this for us —
    // whatever URL we send here is exactly what it redirects to.
    const returnUrl = `${RETURN_URL}?m_payment_id=${encodeURIComponent(orderId)}`;

    const computedAmount = computeOrderTotal(items);
    if (computedAmount === null) {
      return res.status(400).json({ error: 'Invalid or unrecognized items in cart' });
    }

    const fields = {
      merchant_id:      MERCHANT_ID,
      merchant_key:     MERCHANT_KEY,
      return_url:       returnUrl,
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

    // Trim every value (PayFast trims before signing, so we must sign the trimmed text we send)
    Object.keys(fields).forEach(k => {
      if (fields[k] != null) fields[k] = String(fields[k]).trim();
      if (fields[k] === '' || fields[k] == null) delete fields[k];
    });

    const passphrase = process.env.PAYFAST_PASSPHRASE || '';
    const paramString = Object.keys(fields)
      .map(k => `${k}=${pfEncode(fields[k])}`)
      .join('&');

    const stringToHash = passphrase
      ? `${paramString}&passphrase=${pfEncode(passphrase)}`
      : paramString;

    const signature = crypto.createHash('md5').update(stringToHash).digest('hex');

    return res.status(200).json({ fields: { ...fields, signature } });

  } catch (err) {
    console.error('[DISCRETE] /api/sign error:', err);
    return res.status(500).json({ error: 'Signing failed' });
  }
}