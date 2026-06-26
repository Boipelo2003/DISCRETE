// orders-auth-snippet.js
//
// This is NOT a full replacement for your orders.js — it's the piece that
// needs to go at the TOP of your existing handler, replacing whatever
// currently checks `req.query.secret === process.env.ADMIN_SECRET`.
// Your existing Firestore read/write logic underneath stays the same.

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

// Vercel: set these as env vars (Project Settings > Environment Variables),
// taken from the same service account JSON used in setAdminClaim.js.
// FIREBASE_PRIVATE_KEY needs its \n's preserved — see note at the bottom.
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  });
}

// Call this at the start of your handler, for every method (GET and POST).
async function requireAdmin(req, res) {
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
    return decoded; // contains decoded.uid, decoded.email, etc. if you need them
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
    return null;
  }
}

// ── Example of wiring it into your existing handler ──────────────────
//
// module.exports = async function handler(req, res) {
//   const admin = await requireAdmin(req, res);
//   if (!admin) return; // requireAdmin already sent the error response
//
//   // ...your existing Firestore logic goes here, unchanged...
//   // GET  -> query orders collection, optionally filtered by req.query.status
//   // POST -> update the order's status field using req.body.id / req.body.status
// };

module.exports = { requireAdmin };
