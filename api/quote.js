// api/quote.js
// Tells checkout what the delivery options cost for the customer's cart, using the SAME
// server-side logic (lib/products.js) that sign.js and orders.js use to charge them.
// That way the total the customer sees can never drift from what PayFast charges.
//
// POST /api/quote   body: { items: [ ...cart lines... ] }
// -> { merchandise, bag: { size, count }, options: [ { id, label, eta, fee, total }, ... ] }

import { deliveryOptions } from '../lib/products.js';

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const result = deliveryOptions(req.body && req.body.items);
  if (!result) {
    return res.status(400).json({ error: 'Invalid or unrecognized items in cart' });
  }
  return res.status(200).json(result);
}