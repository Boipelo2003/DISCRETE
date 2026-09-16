// api/order-status.js
// Returns the REAL status of an order from Firestore, as last updated by
// PayFast's server-to-server ITN webhook (see notify.js) — never trust
// payment_status from the browser's own return URL, since that's fully
// controlled by the customer's browser and trivially fakeable.
//
// GET /api/order-status?id=DSC-123456

const admin = require('firebase-admin');

// ── Firebase Admin init ──
// If you already initialize firebase-admin elsewhere (e.g. shared with
// orders.js / sign.js), delete this block and import that instance instead:
//   const { db } = require('../lib/firebaseAdmin');
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

module.exports = async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const orderId = req.query.id;

  if (!orderId || typeof orderId !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid order id.' });
  }

  try {
    const doc = await db.collection('orders').doc(orderId).get();

    if (!doc.exists) {
      // Don't leak whether an id "looks valid" vs genuinely missing —
      // just report not-found either way.
      return res.status(404).json({ error: 'Order not found.' });
    }

    const order = doc.data();

    // Only return what the confirmation page actually needs to display.
    // Avoid leaking full customer/shipping details through this public endpoint.
    return res.status(200).json({
      id: order.id,
      status: order.status || 'pending',   // 'pending' | 'complete' | 'failed' | 'cancelled' — set by notify.js
      total: order.total,
      itemCount: Array.isArray(order.items) ? order.items.length : 0,
      firstItemName: Array.isArray(order.items) && order.items[0] ? order.items[0].name : null,
    });
  } catch (err) {
    console.error('[api/order-status] Firestore read failed:', err);
    return res.status(500).json({ error: 'Could not retrieve order status.' });
  }
};