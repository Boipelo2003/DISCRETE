/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  DISCRETE — PayFast ITN (Instant Transaction Notification)      ║
 * ║  Vercel Serverless Function  →  POST /api/notify                ║
 * ╠══════════════════════════════════════════════════════════════════╣
 * ║  VERCEL ENV VARS REQUIRED:                                      ║
 * ║    PAYFAST_PASSPHRASE  =  passphrase set in PayFast dashboard    ║
 * ║    STORE_EMAIL         =  email to receive order alerts          ║
 * ║    RESEND_API_KEY      =  Resend API key for email alerts        ║
 * ║    INTERNAL_API_SECRET =  shared secret, same value as orders.js ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

import crypto from 'crypto';

// PayFast's published live IP ranges, in CIDR form:
//   197.97.145.144–159  → /28
//   41.74.179.192–223   → /27
//   102.216.36.0–15     → /28
//   102.216.36.128–143  → /28
//   144.126.193.139     → /32 (single host)
const PAYFAST_VALID_RANGES = [
  '197.97.145.144/28',
  '41.74.179.192/27',
  '102.216.36.0/28',
  '102.216.36.128/28',
  '144.126.193.139/32',
];

function ipToInt(ip) {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function isIpInCidr(ip, cidr) {
  const [range, bits] = cidr.split('/');
  const mask = bits === undefined ? 32 : parseInt(bits, 10);
  const maskBits = mask === 0 ? 0 : (~0 << (32 - mask)) >>> 0;
  return (ipToInt(ip) & maskBits) === (ipToInt(range) & maskBits);
}

function isValidPayfastIp(ip) {
  if (!ip) return false;
  const normalized = ip.replace(/^::ffff:/i, ''); // strip IPv6-mapped prefix if present
  return PAYFAST_VALID_RANGES.some(cidr => isIpInCidr(normalized, cidr));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const data = req.body;

    // ── 1. Verify the request came from a PayFast IP ─────────────────
    const callerIP =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.socket?.remoteAddress;

    if (!isValidPayfastIp(callerIP)) {
      console.warn(`[DISCRETE] ITN blocked — unknown IP: ${callerIP}`);
      return res.status(403).send('Forbidden');
    }

    // ── 2. Rebuild + verify the signature ────────────────────────────
    const passphrase        = process.env.PAYFAST_PASSPHRASE || '';
    const receivedSignature = data['signature'];

    const paramString = Object.keys(data)
      .filter(k => k !== 'signature')
      .map(k => `${k}=${encodeURIComponent(data[k]).replace(/%20/g, '+')}`)
      .join('&');

    const stringToHash = passphrase
      ? `${paramString}&passphrase=${encodeURIComponent(passphrase).replace(/%20/g, '+')}`
      : paramString;

    const expectedSignature = crypto.createHash('md5').update(stringToHash).digest('hex');

    if (receivedSignature !== expectedSignature) {
      console.warn('[DISCRETE] ITN signature mismatch — possible tampering');
      return res.status(400).send('Invalid signature');
    }

    // ── 3. Only act on COMPLETE payments ─────────────────────────────
    const paymentStatus = data['payment_status'];
    if (paymentStatus !== 'COMPLETE') {
      console.log(`[DISCRETE] ITN received with status: ${paymentStatus}`);
      return res.status(200).send('OK');
    }

    // ── 4. Extract order details ──────────────────────────────────────
    const pfPaymentId  = data['pf_payment_id'];
    const mPaymentId   = data['m_payment_id'];   // your DSC-XXXXXX order ID
    const amountGross  = parseFloat(data['amount_gross']);
    const amountFee    = parseFloat(data['amount_fee']);
    const amountNet    = parseFloat(data['amount_net']);
    const itemDesc     = data['item_description'];
    const nameFirst    = data['name_first'];
    const nameLast     = data['name_last'];
    const emailAddress = data['email_address'];
    const customStr1   = data['custom_str1'];  // street address
    const customStr2   = data['custom_str2'];  // city, province, postal

    // ── 5. Persist the paid status to Firestore via /api/orders ──────
    try {
      const updateRes = await fetch('https://discrete-silk.vercel.app/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-internal-secret': process.env.INTERNAL_API_SECRET,
        },
      body: JSON.stringify({
  id: mPaymentId,
  status: 'paid',
  pfPaymentId,
  paidAmount: amountGross,
}),
      });
      if (!updateRes.ok) {
        console.error(`[DISCRETE] Order update failed for ${mPaymentId}: ${updateRes.status}`);
      }
    } catch (err) {
      console.error('[DISCRETE] Error calling /api/orders:', err);
    }

    // ── 6. Log the confirmed order (kept as a backup record) ─────────
    console.log('════════════════════════════════════════');
    console.log('✅ DISCRETE — NEW PAID ORDER CONFIRMED');
    console.log('════════════════════════════════════════');
    console.log(`Order ID:     ${mPaymentId}`);
    console.log(`PayFast ID:   ${pfPaymentId}`);
    console.log(`Customer:     ${nameFirst} ${nameLast} <${emailAddress}>`);
    console.log(`Amount paid:  R${amountGross.toFixed(2)}`);
    console.log(`PayFast fee:  R${amountFee.toFixed(2)}`);
    console.log(`You receive:  R${amountNet.toFixed(2)}`);
    console.log(`Items:        ${itemDesc}`);
    console.log(`Ship to:      ${customStr1}, ${customStr2}`);
    console.log('════════════════════════════════════════');

    // ── 7. Email alert via Resend ─────────────────────────────────────
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'orders@discrete-silk.vercel.app',
          to: process.env.STORE_EMAIL,
          subject: `[DISCRETE] New Order ${mPaymentId} — R${amountGross.toFixed(2)} — ${nameFirst} ${nameLast}`,
          html: `
            <h2>New paid order</h2>
            <p><strong>Order:</strong> ${mPaymentId}</p>
            <p><strong>Customer:</strong> ${nameFirst} ${nameLast} (${emailAddress})</p>
            <p><strong>Amount paid:</strong> R${amountGross.toFixed(2)}</p>
            <p><strong>You receive:</strong> R${amountNet.toFixed(2)}</p>
            <p><strong>Items:</strong> ${itemDesc}</p>
            <p><strong>Ship to:</strong> ${customStr1}, ${customStr2}</p>
            <p><strong>PayFast ID:</strong> ${pfPaymentId}</p>
          `,
        }),
      });
    } catch (err) {
      console.error('[DISCRETE] Failed to send order email alert:', err);
    }

    return res.status(200).send('OK');

  } catch (err) {
    console.error('[DISCRETE] ITN handler error:', err);
    return res.status(200).send('OK'); // always 200 so PayFast doesn't retry
  }
}