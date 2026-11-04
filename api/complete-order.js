// api/complete-order.js
// Called by success.html once the customer lands back from PayFast.
// IMPORTANT: this is NOT proof of payment — there's no ITN webhook in this
// simple-redirect flow, so a customer could reach this page without ever
// actually paying (e.g. by revisiting a bookmarked/old success.html link).
// That's why the status below is 'awaiting_confirmation', not 'paid' —
// it's an honest signal of "customer reached the success page", nothing more.
// A human still needs to confirm the actual PayFast payment before treating
// this as a real, paid order.

require('dotenv').config({ path: '.env.local' });

const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: (process.env.FIREBASE_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    }),
  });
}

const db = admin.firestore();

const VAT_RATE = 0.15; // South Africa VAT — already included in product prices

// ── Email the store owner a copy of the order for their own records ──
// Uses Resend's REST API directly (no extra SDK needed — Node 18+ has fetch
// built in). Failure here should never break the customer's success page,
// so every error is caught and logged, not thrown.
async function emailStoreOwner(orderId, order) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const STORE_EMAIL     = process.env.STORE_EMAIL;
  // Resend requires sending FROM a domain you've verified with them. Until
  // you verify your own domain, their shared 'onboarding@resend.dev' sender
  // works for testing. Set RESEND_FROM_EMAIL once you have a verified domain.
  const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'DISCRETE <onboarding@resend.dev>';

  if (!RESEND_API_KEY || !STORE_EMAIL) {
    console.warn('[complete-order] Skipping owner email — RESEND_API_KEY or STORE_EMAIL not set.');
    return;
  }

  const total = order.total || 0;
  const totalExclVat = total / (1 + VAT_RATE);
  const vatAmount = total - totalExclVat;

  const itemRows = (order.items || []).map(item => {
    const colorPart = item.color ? ` – ${item.color}` : '';
    return `<tr>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;">${item.name}${colorPart} (Size ${item.size})</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:center;">${item.qty}</td>
      <td style="padding:6px 8px;border-bottom:1px solid #eee;text-align:right;">R${(item.price * item.qty).toFixed(2)}</td>
    </tr>`;
  }).join('');

  const shipping = order.shipping || {};
  const customer  = order.customer || {};
  const fullAddress = `${shipping.address || ''}, ${shipping.city || ''}, ${shipping.province || ''} ${shipping.postalCode || ''}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="margin-bottom:4px;">New Order — ${orderId}</h2>
      <p style="color:#666;margin-top:0;">Status: awaiting confirmation (customer reached the success page — not yet manually verified as paid).</p>

      <h3>Customer</h3>
      <p>
        ${customer.firstName || ''} ${customer.lastName || ''}<br>
        ${customer.email || ''}<br>
        ${customer.phone || ''}
      </p>

      <h3>Shipping Address</h3>
      <p>${fullAddress}</p>

      <h3>Items</h3>
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="text-align:left;padding:6px 8px;border-bottom:2px solid #333;">Item</th>
            <th style="text-align:center;padding:6px 8px;border-bottom:2px solid #333;">Qty</th>
            <th style="text-align:right;padding:6px 8px;border-bottom:2px solid #333;">Total</th>
          </tr>
        </thead>
        <tbody>${itemRows}</tbody>
      </table>

      <table style="width:100%;margin-top:12px;">
        <tr><td>Subtotal (excl. VAT):</td><td style="text-align:right;">R${totalExclVat.toFixed(2)}</td></tr>
        <tr><td>VAT (15%):</td><td style="text-align:right;">R${vatAmount.toFixed(2)}</td></tr>
        <tr><td><strong>Total Paid (incl. VAT):</strong></td><td style="text-align:right;"><strong>R${total.toFixed(2)}</strong></td></tr>
      </table>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: STORE_EMAIL,
        subject: `New Order ${orderId} — R${total.toFixed(2)}`,
        html,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[complete-order] Resend email failed:', response.status, errText);
    }
  } catch (err) {
    console.error('[complete-order] Resend request threw:', err);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const { orderId } = req.body || {};

  if (!orderId || typeof orderId !== 'string') {
    return res.status(400).json({ error: 'Missing orderId.' });
  }

  try {
    const ref = db.collection('orders').doc(orderId);
    const doc = await ref.get();

    if (!doc.exists) {
      // Don't 500 here — a missing order shouldn't break the customer's
      // success page experience, but it IS worth knowing about server-side.
      console.warn(`[complete-order] Order ${orderId} not found in Firestore.`);
      return res.status(404).json({ error: 'Order not found.' });
    }

    // Only move pending -> awaiting_confirmation. Don't overwrite an order
    // that's already been manually confirmed/fulfilled/refunded by you.
    const current = doc.data();
    if (current.status === 'pending') {
      await ref.update({
        status: 'awaiting_confirmation',
        awaitingConfirmationAt: admin.firestore.FieldValue.serverTimestamp(),
      });
      // Fire-and-forget: don't let a slow/failed email delay the customer's
      // success page response.
      emailStoreOwner(orderId, current).catch(err =>
        console.error('[complete-order] emailStoreOwner threw:', err)
      );
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[complete-order] Firestore update failed:', err);
    return res.status(500).json({ error: 'Could not update order.' });
  }
};