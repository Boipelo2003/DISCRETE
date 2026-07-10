import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(
    readFileSync(new URL('./service-account.json', import.meta.url))
);

initializeApp({
    credential: cert(serviceAccount),
});

const email = 'discreteclothing24@gmail.com';

getAuth()
    .getUserByEmail(email)
    .then(user => getAuth().setCustomUserClaims(user.uid, { admin: true }))
    .then(() => { console.log('✅ Admin claim set for', email); process.exit(0); })
    .catch(err => { console.error('❌ Error:', err); process.exit(1); });
