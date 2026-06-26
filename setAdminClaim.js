// setAdminClaim.js
//
// Run this ONCE, locally, from your own machine — never deploy it, never
// commit the service account key it uses.
//
//   npm install firebase-admin
//   node setAdminClaim.js you@discrete.co.za
//
// It marks the given Firebase Auth user as an admin by attaching a
// custom claim to their account. orders.js will check this claim on
// every request — it's what actually replaces ADMIN_SECRET.

const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

// Download this from Firebase Console > Project Settings > Service Accounts
// > "Generate new private key". Keep it OUT of git (add to .gitignore).
const serviceAccount = require('./serviceAccountKey.json');

initializeApp({
  credential: cert(serviceAccount),
});

async function main() {
  const email = process.argv[2];
  if (!email) {
    console.error('Usage: node setAdminClaim.js <admin-email>');
    process.exit(1);
  }

  const auth = getAuth();
  const user = await auth.getUserByEmail(email);
  await auth.setCustomUserClaims(user.uid, { admin: true });

  console.log(`✅ ${email} (uid: ${user.uid}) is now an admin.`);
  console.log('They must sign out and sign back in for the claim to take effect.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
