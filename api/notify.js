/**
 * DISCRETE — PayFast ITN (Instant Transaction Notification)
 * Vercel Serverless Function  →  POST /api/notify
 *
 * VERCEL ENV VARS REQUIRED:
 *   PAYFAST_PASSPHRASE   = passphrase set in PayFast dashboard
 *   STORE_EMAIL          = email to receive order alerts
 *   RESEND_API_KEY       = Resend API key for email alerts
 *   INTERNAL_API_SECRET  = shared secret, same value as orders.js
 */

import crypto from 'crypto';

// Customers shop on the custom domain; override with the SITE_URL env var if it changes.
const SITE_URL = (process.env.SITE_URL || 'https://www.discreteclothing.co.za').replace(/\/$/, '');

// PayFast signs with PHP's urlencode(): uppercase hex, '+' for spaces, and it ALSO escapes
// ! ' ( ) * ~  (encodeURIComponent does not). Without this, an ITN containing an apostrophe
// (e.g. a store called "St George's") fails signature verification and the order never completes.
const pfEncode = (v) =>
  encodeURIComponent(String(v ?? ''))
    .replace(/[!'()*~]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
    .replace(/%20/g, '+');

// Customer-controlled text goes into an HTML email, so escape it.
const escapeHtml = (v) => String(v ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = (x) => Number.isFinite(x) ? x.toFixed(2) : '?';

// PayFast's published live IP ranges, in CIDR form:
//   197.97.145.144-159   → /28
//   41.74.179.192-223    → /27
//   102.216.36.0-15      → /28
//   102.216.36.128-143   → /28
//   144.126.193.139      → /32 (single host)
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

    // ── 1. Verify the request came from a PayFast IP ──────────────────
    const callerIP =
      req.headers['x-forwarded-for']?.split(',')[0].trim() ||
      req.socket?.remoteAddress;

    if (!isValidPayfastIp(callerIP)) {
      console.warn(`[DISCRETE] ITN blocked — unknown IP: ${callerIP}`);
      return res.status(403).send('Forbidden');
    }

    // ── 2. Rebuild + verify the signature ──────────────────────────────
    const passphrase        = process.env.PAYFAST_PASSPHRASE || '';
    const receivedSignature = data['signature'];

    const paramString = Object.keys(data)
      .filter(k => k !== 'signature')
      .map(k => `${k}=${pfEncode(data[k])}`)
      .join('&');

    const stringToHash = passphrase
      ? `${paramString}&passphrase=${pfEncode(passphrase)}`
      : paramString;

    const expectedSignature = crypto.createHash('md5').update(stringToHash).digest('hex');

    if (receivedSignature !== expectedSignature) {
      console.warn('[DISCRETE] ITN signature mismatch — possible tampering');
      return res.status(400).send('Invalid signature');
    }

    // ── 3. Only act on COMPLETE payments ───────────────────────────────
    const paymentStatus = data['payment_status'];
    if (paymentStatus !== 'COMPLETE') {
      console.log(`[DISCRETE] ITN received with status: ${paymentStatus}`);
      return res.status(200).send('OK');
    }

    // ── 4. Extract order details ───────────────────────────────────────
    const pfPaymentId  = data['pf_payment_id'];
    const mPaymentId   = data['m_payment_id'];    // your DSC-XXXXXX order ID
    const amountGross  = parseFloat(data['amount_gross']);
    const amountFee    = parseFloat(data['amount_fee']);
    const amountNet    = parseFloat(data['amount_net']);
    const itemDesc     = data['item_description'];
    const nameFirst    = data['name_first'];
    const nameLast     = data['name_last'];
    const emailAddress = data['email_address'];
    const customStr1   = data['custom_str1'];  // PEP PAXI collection point
    const customStr2   = data['custom_str2'];  // city, province, postal
    const customStr3   = data['custom_str3'];  // delivery speed + bag size

    // ── 5. Persist the paid status to Firestore via /api/orders ───────
    let orderUpdated = false;
    let orderStatusAfter = null;
    try {
      const updateRes = await fetch(`${SITE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-internal-secret': process.env.INTERNAL_API_SECRET,
        },
        body: JSON.stringify({
          id: mPaymentId,
          // FIXED: was 'paid' — payment-success.html only shows success
          // when status === 'complete', so 'paid' was silently mismatching
          // and the customer always saw the error screen.
          status: 'complete',
          pfPaymentId,
          paidAmount: amountGross,
        }),
      });
      if (!updateRes.ok) {
        console.error(`[DISCRETE] Order update failed for ${mPaymentId}: ${updateRes.status}`);
      } else {
        orderUpdated = true;
        try { orderStatusAfter = (await updateRes.json()).status || null; } catch { /* ignore */ }
      }
    } catch (err) {
      console.error('[DISCRETE] Error calling /api/orders:', err);
    }

    // ── 6. Log the confirmed order (kept as a backup record) ──────────
    console.log('═══════════════════════════════════════════════');
    console.log('☑ DISCRETE — NEW PAID ORDER CONFIRMED');
    console.log('═══════════════════════════════════════════════');
    console.log(`Order ID:     ${mPaymentId}`);
    console.log(`PayFast ID:   ${pfPaymentId}`);
    console.log(`Customer:     ${nameFirst} ${nameLast} <${emailAddress}>`);
    console.log(`Amount paid:  R${money(amountGross)}`);
    console.log(`PayFast fee:  R${money(amountFee)}`);
    console.log(`You receive:  R${money(amountNet)}`);
    console.log(`Items:        ${itemDesc}`);
    console.log(`Collect at:   ${customStr1}, ${customStr2}`);
    console.log(`Delivery:     ${customStr3}`);
    console.log(`Order record updated: ${orderUpdated}${orderStatusAfter ? ' (status: ' + orderStatusAfter + ')' : ''}`);
    console.log('═══════════════════════════════════════════════');

    // ── 7. Email alert via Resend ──────────────────────────────────────
    // The email always goes out (money has been received), but it shouts if the order
    // record could not be updated or the amount paid did not match the order total.
    const warnings = [];
    if (!orderUpdated) {
      warnings.push(`ACTION NEEDED: payment was received but the order record could not be updated automatically. Mark order ${escapeHtml(mPaymentId)} as paid manually.`);
    }
    if (orderStatusAfter === 'review') {
      warnings.push(`CHECK AMOUNT: the amount paid (R${money(amountGross)}) did not match the order total. The order was flagged "review" instead of "complete".`);
    }
    const warningHtml = warnings.map(w =>
      `<p style="background:#fff3cd;border:1px solid #e0c36a;padding:10px 12px;"><strong>${w}</strong></p>`).join('');
    const subjectPrefix = warnings.length ? '[ACTION NEEDED] ' : '';

    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'DISCRETE Orders <onboarding@resend.dev>',
          to: process.env.STORE_EMAIL,
          subject: `${subjectPrefix}[DISCRETE] New Order ${mPaymentId} — R${money(amountGross)} — ${nameFirst} ${nameLast}`.replace(/[\r\n]+/g, ' '),
          html: `
            ${warningHtml}
            <h2>New paid order</h2>
            <p><strong>Order:</strong> ${escapeHtml(mPaymentId)}</p>
            <p><strong>Customer:</strong> ${escapeHtml(nameFirst)} ${escapeHtml(nameLast)} (${escapeHtml(emailAddress)})</p>
            <p><strong>Amount paid:</strong> R${money(amountGross)}</p>
            <p><strong>You receive:</strong> R${money(amountNet)}</p>
            <p><strong>Items:</strong> ${escapeHtml(itemDesc)}</p>
            <p><strong>Collect at / ship to:</strong> ${escapeHtml(customStr1)}, ${escapeHtml(customStr2)}</p>
            <p><strong>Delivery (buy this PAXI bag):</strong> ${escapeHtml(customStr3 || 'not specified')}</p>
            <p><strong>PayFast ID:</strong> ${escapeHtml(pfPaymentId)}</p>
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