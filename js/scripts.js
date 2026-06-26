// ── ESCAPE HELPER (prevents XSS from tampered localStorage) ──
function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, c =>
        ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]
    );
}
// ====================================================
// PAGE LOADER
// ====================================================
(function () {
    const loader = document.getElementById('pageLoader');
    if (!loader) return;

    function hideLoader() {
        loader.classList.add('is-hidden');
        // Remove from DOM after fade-out completes
        loader.addEventListener('transitionend', () => loader.remove(), { once: true });
    }

    // Hide once all images, fonts, and scripts are ready
    if (document.readyState === 'complete') {
        setTimeout(hideLoader, 600);
    } else {
        window.addEventListener('load', () => setTimeout(hideLoader, 400));
    }

    // Hard fallback — never shows longer than 5 seconds
    setTimeout(hideLoader, 5000);
})();

(function () {
    document.querySelectorAll('.product-image--gallery').forEach(gallery => {
        const imgs = [...gallery.querySelectorAll('img')];
        const card = gallery.closest('.product-card');
        const swatches = card ? [...card.querySelectorAll('.swatch')] : [];

        let activeColor = swatches[0]?.dataset.color || null;
        let isShowingBack = false;

        function getPair(color) {
            if (color) {
                const pair = imgs.filter(img => img.dataset.color === color);
                if (pair.length >= 2) return pair;
            }
            return [imgs[0], imgs[1]];
        }

        function showFront() {
            const [front, back] = getPair(activeColor);
            imgs.forEach(img => img.classList.remove('is-active', 'is-hover'));
            if (front) front.classList.add('is-active');  // fades in
            // back fades out automatically (opacity: 0)
        }

        function showBack() {
            const [front, back] = getPair(activeColor);
            imgs.forEach(img => img.classList.remove('is-active', 'is-hover'));
            if (back) back.classList.add('is-hover');     // fades in
            // front fades out automatically
        }

        // Init
        showFront();
        gallery.style.cursor = 'pointer';

        // Click / tap toggle
        gallery.addEventListener('click', () => {
            if (imgs.length < 2) return;
            isShowingBack = !isShowingBack;
            isShowingBack ? showBack() : showFront();
        });

        // Desktop hover
        gallery.addEventListener('mouseenter', () => {
            isShowingBack = true;
            showBack();
        });
        gallery.addEventListener('mouseleave', () => {
            isShowingBack = false;
            showFront();
        });

        // Swatch click
        swatches.forEach(swatch => {
            swatch.addEventListener('click', (e) => {
                e.stopPropagation();
                activeColor = swatch.dataset.color;
                swatches.forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                isShowingBack = false;
                showFront();
            });
        });
    });
})();
// ====================================================
// TOAST NOTIFICATION
// ====================================================
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2500);
}

// ====================================================
// 2. CART FUNCTIONALITY (localStorage, overlay, etc.)
// ====================================================
(function() {
    let cart = JSON.parse(localStorage.getItem('discreteCart')) || [];

    const cartCountEl = document.getElementById('cart-count');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalEl = document.getElementById('cartTotal');
    const closeCartBtn = document.getElementById('closeCartBtn');

    if (!cartOverlay || !cartItemsContainer || !cartFooter || !cartTotalEl) {
        console.warn('Cart modal elements missing.');
        return;
    }

    function saveCart() {
        localStorage.setItem('discreteCart', JSON.stringify(cart));
    }

    function updateCartBadge() {
        if (!cartCountEl) return;
        if (cart.length > 0) {
            cartCountEl.style.display = 'flex';
            cartCountEl.textContent = cart.length;
        } else {
            cartCountEl.style.display = 'none';
        }
    }

function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty.</p>';
        cartFooter.style.display = 'none';
    } else {
        let html = '';
        let total = 0;

        cart.forEach((item, index) => {
            const priceNum = parseFloat(item.price);
            total += priceNum;

            // Escape all user-controlled text
            const safeName  = esc(item.name);
            const safeSize  = esc(item.size);
            const safeColor = item.color ? esc(item.color.charAt(0).toUpperCase() + item.color.slice(1)) : '';

            html += `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${safeName}</div>
                       <div class="cart-item-size">
    ${safeSize ? 'Size: ' + safeSize : ''}
    ${safeColor ? (safeSize ? ' — ' : '') + safeColor : ''}
</div>
                    </div>
                    <div class="cart-item-price">R${priceNum.toFixed(2)}</div>
                    <button class="cart-item-remove" data-index="${index}" title="Remove item">&times;</button>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        cartFooter.style.display = 'block';
        cartTotalEl.textContent = `R${total.toFixed(2)}`;

        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', function() {
                const idx = parseInt(this.getAttribute('data-index'));
                cart.splice(idx, 1);
                saveCart();
                renderCart();
                updateCartBadge();
            });
        });
    }
}
    function openCart() {
        cartOverlay.classList.add('active');
        renderCart();
    }

    function closeCart() {
        cartOverlay.classList.remove('active');
    }

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.product-card');
        const sizeSelect = card.querySelector('.size-select:not(.color-select-dropdown)');
        const selectedSize = sizeSelect ? sizeSelect.value : null;

        if (sizeSelect && !selectedSize) {
            sizeSelect.classList.add('error');
            setTimeout(() => sizeSelect.classList.remove('error'), 2000);
            return;
        }
        if (sizeSelect) sizeSelect.classList.remove('error');

        const title = card.querySelector('.product-title').textContent.trim();
        const priceText = card.querySelector('.product-price').textContent;
        const price = priceText.replace('R', '').trim();

            // GET QUANTITY
            const qtyValue = card.querySelector('.qty-value');
            const quantity = qtyValue ? parseInt(qtyValue.textContent) : 1;

           // GET COLOUR — supports both dot swatches and <select> dropdowns
let color = null;
const activeSwatch = card.querySelector('.swatch.active');
const colorDropdown = card.querySelector('.color-select-dropdown');

if (activeSwatch) {
    color = activeSwatch.dataset.color;
} else if (colorDropdown && colorDropdown.value) {
    color = colorDropdown.value;
}

// Validate colour dropdown if present (and no size select to validate)
if (colorDropdown && !colorDropdown.value) {
    colorDropdown.classList.add('error');
    setTimeout(() => colorDropdown.classList.remove('error'), 2000);
    return;
}


            // ADD ITEM WITH QUANTITY
            for (let i = 0; i < quantity; i++) {
                const item = { name: title, price: price };
if (selectedSize) item.size = selectedSize;
                if (color) item.color = color;
                cart.push(item);
            }

    saveCart();
            updateCartBadge();
            const sizePart = selectedSize ? selectedSize : '';
            const colorPart = color ? color : '';
            const detailPart = [sizePart, colorPart].filter(Boolean).join(', ');
            showToast(`${title}${detailPart ? ' (' + detailPart + ')' : ''} x${quantity} added to cart.`);
        });
    });
    const cartIcon = document.querySelector('a[href="#cart"]');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }

    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) closeCart();
    });

    updateCartBadge();
    
})();
// ====================================================
// NAVIGATION HIDE ON SCROLL
// ====================================================
(function () {
    const nav = document.querySelector('nav');
    const announcementBar = document.querySelector('.announcement-bar');
    let lastScrollY = window.scrollY;
    let scrollTimer = null;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            nav.style.transform = 'translateY(-100%)';
            if (announcementBar) announcementBar.style.transform = 'translateY(-100%)';
        }

        lastScrollY = currentScrollY;
        clearTimeout(scrollTimer);

        scrollTimer = setTimeout(function () {
            nav.style.transform = 'translateY(0)';
            if (announcementBar) announcementBar.style.transform = 'translateY(0)';
        }, 300);
    });
})();
// QUANTITY BUTTONS
document.querySelectorAll('.product-card').forEach(card => {
    const minus = card.querySelector('.qty-minus');
    const plus = card.querySelector('.qty-plus');
    const value = card.querySelector('.qty-value');

    if (!minus || !plus || !value) return;

    minus.addEventListener('click', () => {
        let current = parseInt(value.textContent);
        if (current > 1) value.textContent = current - 1;
    });

    plus.addEventListener('click', () => {
        let current = parseInt(value.textContent);
        if (current < 10) value.textContent = current + 1;
    });
});


// ====================================================
// HAMBURGER MENU
// ====================================================
(function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow =
            navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });
})();


// ==========================================
    // 5. BACK TO TOP SCROLL ENGINE
    // ==========================================
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Show button after scrolling down 400px (past the hero area)
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
        });

        // Smoothly snap window viewpoint to top coordinates on interaction
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
// ==========================================
// 6. ACTIVE NAVIGATION LINK ENGINE
// ==========================================
(function () {
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a, footer .footer-links a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('http')) return;

        if (href === currentFile) {
            link.classList.add('active-link');
        }

        // Root path → treat as index.html
        if ((currentPath === '/' || currentPath.endsWith('/')) && href === 'index.html') {
            link.classList.add('active-link');
        }
    });
})();

document.addEventListener('DOMContentLoaded', function() {
    var formEngine = document.getElementById('newsletter-form');
    var successCard = document.getElementById('newsletter-success-msg');
    
    if (formEngine && successCard) {
        formEngine.addEventListener('submit', function(e) {
            // Stops the standard browser layout refresh crash pattern
            e.preventDefault();
            
            // Instantly hide the input buttons and text entries
            formEngine.style.setProperty('display', 'none', 'important');
            
            // Smoothly render the luxury brand response
            successCard.style.setProperty('display', 'block', 'important');
            
            console.log("Discrete Studio subscription caught successfully.");
        });
    }
});
// =============================================
// SEARCH OVERLAY
// =============================================
(function () {
    const PRODUCTS = [
        { name: 'D01 — Discrete Earth Guardian Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts' },
        { name: 'D02 — Discrete Archive Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts' },
        { name: 'D03 — Discrete Keyholder Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts' },
        { name: 'D04 — Discrete Initial Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts' },
        { name: 'D05 — Discrete Petal Code Tee', price: 'R400', category: 'T-Shirts', section: 't-shirts' },
        { name: 'D06 — Discrete Core Tracksuit', price: 'R850', category: 'Tracksuits', section: 'tracksuits' },
        { name: 'D07 — Discrete Eastside Tracksuit', price: 'R1000', category: 'Tracksuits', section: 'tracksuits' },
        { name: 'D08 — Discrete 5 Panel Cap', price: 'R150', category: 'Accessories', section: 'accessories' },
        { name: 'D09 — Discrete Skull Cap', price: 'R120', category: 'Accessories', section: 'accessories' },
    ];

    const overlay    = document.getElementById('searchOverlay');
    const input      = document.getElementById('searchInput');
    const results    = document.getElementById('searchResults');
    const clearBtn   = document.getElementById('searchClearBtn');
    const closeBtn   = document.getElementById('searchCloseBtn');
    const searchTrigger = document.querySelector('a[href="#search"]');

    function open() {
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setTimeout(() => input.focus(), 80);
    }

    function close() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        input.value = '';
        results.innerHTML = '';
        clearBtn.classList.remove('visible');
    }

    function runSearch(query) {
        query = query.toLowerCase().trim();
        if (!query) { results.innerHTML = ''; return; }

        const matches = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        if (!matches.length) {
            results.innerHTML = `<p class="search-no-results">No results for "${query}"</p>`;
            return;
        }

        results.innerHTML = matches.map(p => `
            <a class="search-result-item" href="#" data-section="${p.section}">
                <span class="search-result-name">${p.name}</span>
                <span class="search-result-meta">
                    <span class="search-result-category">${p.category}</span>
                    <span class="search-result-price">${p.price}</span>
                </span>
            </a>
        `).join('');

        results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const section = item.dataset.section;
                close();
                setTimeout(() => {
                    const target = document.getElementById(section);
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                }, 350);
            });
        });
    }

    if (searchTrigger) {
        searchTrigger.addEventListener('click', e => { e.preventDefault(); open(); });
    }

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });

    input.addEventListener('input', () => {
        const q = input.value;
        clearBtn.classList.toggle('visible', q.length > 0);
        runSearch(q);
    });

    clearBtn.addEventListener('click', () => {
        input.value = '';
        results.innerHTML = '';
        clearBtn.classList.remove('visible');
        input.focus();
    });
})();
































