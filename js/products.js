// ── MASTER PRODUCT CATALOGUE (shared across all pages) ──
const ALL_PRODUCTS = [
    // ===== T-SHIRTS (on t-shirts.html) =====
    { name: 'D01 — Discrete Earth Guardian Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },
    { name: 'D02 — Discrete Archive Tee',        price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },
    { name: 'D03 — Discrete Keyholder Tee',      price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },
    { name: 'D04 — Discrete Initial Tee',        price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },
    { name: 'D05 — Discrete Petal Code Tee',     price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },
    { name: 'D13 — Discrete Halo Tee',           price: 'R400', category: 'T-Shirts', section: 't-shirts', page: 't-shirts.html' },

    // ===== TRACKSUITS (on tracksuits.html) =====
    { name: 'D06 — Discrete Core Tracksuit',     price: 'R850',  category: 'Tracksuits', section: 'tracksuits', page: 'tracksuits.html' },
    { name: 'D07 — Discrete Eastside Tracksuit', price: 'R1000', category: 'Tracksuits', section: 'tracksuits', page: 'tracksuits.html' },

    // ===== ACCESSORIES (on accessories.html) =====
    // D09–D12 are also displayed on new-arrivals.html, but accessories.html is their canonical category page.
    // The search logic now derives the actual section dynamically when the product is found locally,
    // so this page field only matters as a fallback when the product isn't on the current page.
    { name: 'D08 — Discrete Cap',                price: 'R250', category: 'Accessories', section: 'accessories', page: 'accessories.html' },
    { name: 'D09 — Discrete Skull Cap',          price: 'R120', category: 'Accessories', section: 'accessories', page: 'accessories.html' },
    { name: 'D10 — Discrete Knitted Beanies',    price: 'R250', category: 'Accessories', section: 'accessories', page: 'accessories.html' },
    { name: 'D11 — DSC Beanies',                 price: 'R150', category: 'Accessories', section: 'accessories', page: 'accessories.html' },
    { name: 'D12 — DSC 5 Panel Caps',            price: 'R200', category: 'Accessories', section: 'accessories', page: 'accessories.html' }
];