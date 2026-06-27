// lib/products.js
const PRICES = {
    'D01 — Discrete Earth Guardian Tee':          400,
    'D02 — Discrete Archive Tee (Works Graphic)': 400,
    'D03 — Discrete Keyholder Tee':               400,
    'D04 — Discrete Initial Tee':                 400,
    'D05 — Discrete Petal Code Tee':              400,
    'D06 — Discrete Core Tracksuit':              850,
    'D07 — Discrete Eastside Tracksuit':          1000,
    'D08 — Discrete Cap':                         250,
    'D09 — Discrete Skull Cap':                   120,
    'D10 — Discrete Knitted Beanies':             250,
    'D11 — DSC Beanies':                          150,
    'D12 — DSC 5 Panel Caps':                     200,
    'D13 — Discrete Halo Tee':                    400,
};

const SHIPPING = 80; // flat rate, adjust as needed

export function computeOrderTotal(items) {
    if (!Array.isArray(items) || items.length === 0) return null;
    let total = 0;
    for (const item of items) {
        const price = PRICES[item.name];
        if (price === undefined) return null; // unknown product = reject
        total += price * (item.quantity || 1); // accounts for item quantity amounts
    }
    return total + SHIPPING;
}