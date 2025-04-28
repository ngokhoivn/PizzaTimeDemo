// Chặn toàn diện các sự kiện không mong muốn
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());

// Chặn menu chia sẻ trên Android/Chrome
document.addEventListener('gesturestart', e => e.preventDefault());

// Chặn hành vi mặc định khi chạm giữ
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) e.preventDefault();
}, { passive: false });

// Chặn phóng to bằng cử chỉ
document.addEventListener('gesturechange', e => e.preventDefault());
document.addEventListener('gestureend', e => e.preventDefault());

// Store selection
const stores = document.querySelectorAll('.store');
stores.forEach(store => {
    store.addEventListener('click', () => {
        stores.forEach(s => s.classList.remove('active'));
        store.classList.add('active');
    });
});

// Hot Combo Slider
const comboSlider = document.getElementById('comboSlider');
const comboDots = document.querySelectorAll('.combo-dot');
const comboPrevBtn = document.getElementById('comboPrevBtn');
const comboNextBtn = document.getElementById('comboNextBtn');
let comboCurrentIndex = 0;
const comboCount = document.querySelectorAll('.combo-item').length;

function updateComboSlider() {
    const slideWidth = comboSlider.offsetWidth;
    comboSlider.scrollTo({
        left: comboCurrentIndex * slideWidth,
        behavior: 'smooth'
    });

    comboDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === comboCurrentIndex);
    });

    if (comboPrevBtn) comboPrevBtn.disabled = comboCurrentIndex === 0;
    if (comboNextBtn) comboNextBtn.disabled = comboCurrentIndex === comboCount - 1;
}

if (comboPrevBtn) {
    comboPrevBtn.addEventListener('click', () => {
        if (comboCurrentIndex > 0) {
            comboCurrentIndex--;
            updateComboSlider();
        }
    });
}

if (comboNextBtn) {
    comboNextBtn.addEventListener('click', () => {
        if (comboCurrentIndex < comboCount - 1) {
            comboCurrentIndex++;
            updateComboSlider();
        }
    });
}

// Allow click on dots to navigate
comboDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        comboCurrentIndex = index;
        updateComboSlider();
    });
});

// Handle native scroll events on the slider
let isScrolling;
comboSlider.addEventListener('scroll', () => {
    clearTimeout(isScrolling);

    isScrolling = setTimeout(() => {
        const slideWidth = comboSlider.offsetWidth;
        const scrollPosition = comboSlider.scrollLeft;
        const newIndex = Math.round(scrollPosition / slideWidth);

        if (newIndex !== comboCurrentIndex) {
            comboCurrentIndex = newIndex;
            updateDots();
        }
    }, 100);
});

function updateDots() {
    comboDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === comboCurrentIndex);
    });

    if (comboPrevBtn) comboPrevBtn.disabled = comboCurrentIndex === 0;
    if (comboNextBtn) comboNextBtn.disabled = comboCurrentIndex === comboCount - 1;
}

// Touch swipe detection
let startX, startScroll;

comboSlider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startScroll = comboSlider.scrollLeft;
}, { passive: true });

// Main Dishes Slider
const mainDishSlider = document.getElementById('mainDishSlider');
const mainPrevBtn = document.getElementById('mainPrevBtn');
const mainNextBtn = document.getElementById('mainNextBtn');
let mainCurrentIndex = 0;
const mainDishCount = document.querySelectorAll('#mainDishSlider .food-item').length;
const mainVisibleCount = 2; // Number of visible items
const mainMaxIndex = Math.ceil(mainDishCount / mainVisibleCount) - 1;

function updateMainDishSlider() {
    const translatePercentage = (mainCurrentIndex * 100 * mainVisibleCount) / mainVisibleCount;
    mainDishSlider.style.transform = `translateX(-${translatePercentage}%)`;

    mainPrevBtn.disabled = mainCurrentIndex === 0;
    mainNextBtn.disabled = mainCurrentIndex >= mainMaxIndex;
}

mainPrevBtn.addEventListener('click', () => {
    if (mainCurrentIndex > 0) {
        mainCurrentIndex--;
        updateMainDishSlider();
    }
});

mainNextBtn.addEventListener('click', () => {
    if (mainCurrentIndex < mainMaxIndex) {
        mainCurrentIndex++;
        updateMainDishSlider();
    }
});

// Touch swipe for main dish slider
let mainStartX, mainEndX;
const mainSwipeThreshold = 50;

mainDishSlider.addEventListener('touchstart', (e) => {
    mainStartX = e.changedTouches[0].screenX;
});

mainDishSlider.addEventListener('touchend', (e) => {
    mainEndX = e.changedTouches[0].screenX;
    const diff = mainStartX - mainEndX;

    if (Math.abs(diff) > mainSwipeThreshold) {
        if (diff > 0 && mainCurrentIndex < mainMaxIndex) {
            mainCurrentIndex++;
        } else if (diff < 0 && mainCurrentIndex > 0) {
            mainCurrentIndex--;
        }
        updateMainDishSlider();
    }
});

// Side Dishes Slider
const sideSlider = document.getElementById('sideSlider');
const sidePrevBtn = document.getElementById('sidePrevBtn');
const sideNextBtn = document.getElementById('sideNextBtn');
let sideCurrentIndex = 0;
const sideCount = document.querySelectorAll('#sideSlider .food-item').length;
const sideVisibleCount = 2;
const sideMaxIndex = Math.ceil(sideCount / sideVisibleCount) - 1;

function updateSideSlider() {
    const translatePercentage = (sideCurrentIndex * 100 * sideVisibleCount) / sideVisibleCount;
    sideSlider.style.transform = `translateX(-${translatePercentage}%)`;

    sidePrevBtn.disabled = sideCurrentIndex === 0;
    sideNextBtn.disabled = sideCurrentIndex >= sideMaxIndex;
}

sidePrevBtn.addEventListener('click', () => {
    if (sideCurrentIndex > 0) {
        sideCurrentIndex--;
        updateSideSlider();
    }
});

sideNextBtn.addEventListener('click', () => {
    if (sideCurrentIndex < sideMaxIndex) {
        sideCurrentIndex++;
        updateSideSlider();
    }
});

// Touch swipe for side dish slider
let sideStartX, sideEndX;
const sideSwipeThreshold = 50;

sideSlider.addEventListener('touchstart', (e) => {
    sideStartX = e.changedTouches[0].screenX;
});

sideSlider.addEventListener('touchend', (e) => {
    sideEndX = e.changedTouches[0].screenX;
    const diff = sideStartX - sideEndX;

    if (Math.abs(diff) > sideSwipeThreshold) {
        if (diff > 0 && sideCurrentIndex < sideMaxIndex) {
            sideCurrentIndex++;
        } else if (diff < 0 && sideCurrentIndex > 0) {
            sideCurrentIndex--;
        }
        updateSideSlider();
    }
});

// Drinks Slider
const drinkSlider = document.getElementById('drinkSlider');
const drinkPrevBtn = document.getElementById('drinkPrevBtn');
const drinkNextBtn = document.getElementById('drinkNextBtn');
let drinkCurrentIndex = 0;
const drinkCount = document.querySelectorAll('#drinkSlider .food-item').length;
const drinkVisibleCount = 2;
const drinkMaxIndex = Math.ceil(drinkCount / drinkVisibleCount) - 1;

function updateDrinkSlider() {
    const translatePercentage = (drinkCurrentIndex * 100 * drinkVisibleCount) / drinkVisibleCount;
    drinkSlider.style.transform = `translateX(-${translatePercentage}%)`;

    drinkPrevBtn.disabled = drinkCurrentIndex === 0;
    drinkNextBtn.disabled = drinkCurrentIndex >= drinkMaxIndex;
}

drinkPrevBtn.addEventListener('click', () => {
    if (drinkCurrentIndex > 0) {
        drinkCurrentIndex--;
        updateDrinkSlider();
    }
});

drinkNextBtn.addEventListener('click', () => {
    if (drinkCurrentIndex < drinkMaxIndex) {
        drinkCurrentIndex++;
        updateDrinkSlider();
    }
});

// Touch swipe for drink slider
let drinkStartX, drinkEndX;
const drinkSwipeThreshold = 50;

drinkSlider.addEventListener('touchstart', (e) => {
    drinkStartX = e.changedTouches[0].screenX;
});

drinkSlider.addEventListener('touchend', (e) => {
    drinkEndX = e.changedTouches[0].screenX;
    const diff = drinkStartX - drinkEndX;

    if (Math.abs(diff) > drinkSwipeThreshold) {
        if (diff > 0 && drinkCurrentIndex < drinkMaxIndex) {
            drinkCurrentIndex++;
        } else if (diff < 0 && drinkCurrentIndex > 0) {
            drinkCurrentIndex--;
        }
        updateDrinkSlider();
    }
});

// Cart functionality
const cart = {};
const cartCount = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', () => {
        updateCartModal();
        cartModal.style.display = 'flex';
    });
}
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const closeCartBtn = document.getElementById('closeCartBtn');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const toast = document.getElementById('toast');

// Add to cart functionality
const plusBtns = document.querySelectorAll('.quantity-btn.plus');
const minusBtns = document.querySelectorAll('.quantity-btn.minus');

plusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-item-id');
        const itemType = btn.getAttribute('data-item-type');
        const quantityElement = document.getElementById(`qty-${itemId}`);

        const itemElement = document.querySelector(`.food-item[data-item-id="${itemId}"]`);
        const itemName = itemElement.querySelector('.food-title').textContent;
        const itemPrice = parseInt(itemElement.getAttribute('data-price'));

        if (!cart[itemId]) {
            cart[itemId] = {
                name: itemName,
                price: itemPrice,
                quantity: 0,
                type: itemType
            };
        }

        cart[itemId].quantity++;
        quantityElement.textContent = cart[itemId].quantity;

        updateCartCount();
    });
});

minusBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-item-id');
        const quantityElement = document.getElementById(`qty-${itemId}`);

        if (cart[itemId] && cart[itemId].quantity > 0) {
            cart[itemId].quantity--;
            quantityElement.textContent = cart[itemId].quantity;

            if (cart[itemId].quantity === 0) {
                delete cart[itemId];
            }

            updateCartCount();
        }
    });
});

function updateCartCount() {
    let totalItems = 0;

    Object.values(cart).forEach(item => {
        totalItems += item.quantity;
    });

    cartCount.textContent = totalItems;
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + 'đ';
}

// Open cart modal
cartBtn.addEventListener('click', () => {
    updateCartModal();
    cartModal.style.display = 'flex';
});

// Close cart modal
closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Update cart modal content
function updateCartModal() {
    cartItems.innerHTML = '';
    const totalItems = Object.keys(cart).length;

    if (totalItems === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Giỏ hàng trống!</div>';
        confirmOrderBtn.disabled = true;
        return;
    }

    confirmOrderBtn.disabled = false;
    let totalPrice = 0;

    Object.entries(cart).forEach(([itemId, item]) => {
        if (item.quantity > 0) {
            const itemTotal = item.price * item.quantity;
            totalPrice += itemTotal;

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-quantity">
                        SL:
                        <div class="quantity-controls">
                            <div class="quantity-btn minus" data-item-id="${itemId}">-</div>
                            <div class="quantity" id="cart-qty-${itemId}">${item.quantity}</div>
                            <div class="quantity-btn plus" data-item-id="${itemId}">+</div>
                        </div>
                    </div>
                </div>
                <div class="cart-item-price">${formatPrice(itemTotal)}</div>
            `;

            cartItems.appendChild(cartItemElement);

            const modalPlusBtns = cartItemElement.querySelectorAll('.quantity-btn.plus');
            const modalMinusBtns = cartItemElement.querySelectorAll('.quantity-btn.minus');

            // Thay đổi phần xử lý sự kiện trong updateCartModal()
            modalPlusBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const itemId = btn.getAttribute('data-item-id');
                    cart[itemId].quantity++;
                    // Cập nhật cả số lượng trên giao diện chính và trong giỏ hàng
                    const mainQtyElement = document.getElementById(`qty-${itemId}`);
                    if (mainQtyElement) mainQtyElement.textContent = cart[itemId].quantity;
                    document.getElementById(`cart-qty-${itemId}`).textContent = cart[itemId].quantity;
                    updateCartCount();
                    saveCart();
                });
            });

            modalMinusBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const itemId = btn.getAttribute('data-item-id');
                    if (cart[itemId].quantity > 0) {
                        cart[itemId].quantity--;
                        // Cập nhật cả số lượng trên giao diện chính và trong giỏ hàng
                        const mainQtyElement = document.getElementById(`qty-${itemId}`);
                        if (mainQtyElement) mainQtyElement.textContent = cart[itemId].quantity;
                        document.getElementById(`cart-qty-${itemId}`).textContent = cart[itemId].quantity;

                        if (cart[itemId].quantity === 0) {
                            delete cart[itemId];
                            updateCartModal();
                            return;
                        }

                        updateCartCount();
                        saveCart();
                    }
                });
            });
        }
    });

    const totalElement = document.createElement('div');
    totalElement.className = 'cart-total';
    totalElement.innerHTML = `
        <div>Tổng cộng:</div>
        <div>${formatPrice(totalPrice)}</div>
    `;

    cartItems.appendChild(totalElement);
}

cartItems.addEventListener('input', function (e) {
    if (e.target.classList.contains('cart-input')) {
        const itemId = e.target.getAttribute('data-item-id');
        const newQty = parseInt(e.target.value);

        if (!isNaN(newQty) && newQty >= 0) {
            if (cart[itemId]) {
                cart[itemId].quantity = newQty;

                if (newQty === 0) {
                    delete cart[itemId];
                }

                updateCartModal();
                updateCartCount();
                saveCart();
            }
        }
    }
});

// Confirm order
confirmOrderBtn.addEventListener('click', () => {
    // Reset all quantities
    Object.keys(cart).forEach(itemId => {
        const quantityElement = document.getElementById(`qty-${itemId}`);
        if (quantityElement) {
            quantityElement.textContent = '0';
        }
    });

    // Clear cart
    Object.keys(cart).forEach(key => delete cart[key]);
    updateCartCount();
    saveCart();

    // Close cart modal
    cartModal.style.display = 'none';

    // Show Thank You Modal
    setTimeout(() => {
        document.getElementById('thankYouModal').style.display = 'flex';
    }, 300); // Delay 300ms cho mượt

});
// Initialize all sliders

updateMainDishSlider();
updateSideSlider();
updateDrinkSlider();

// Window resize handler - recalculate slider positions if needed
window.addEventListener('resize', () => {
    // Recalculate visible counts if needed

    updateMainDishSlider();
    updateSideSlider();
    updateDrinkSlider();
});

// Modal outside click handler
window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Keyboard accessibility for buttons
document.querySelectorAll('.control-btn, .quantity-btn, .modal-btn').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });

    // Add tabindex if not present
    if (!btn.hasAttribute('tabindex')) {
        btn.setAttribute('tabindex', '0');
    }
});

// Add a little animation for button clicks
document.querySelectorAll('.quantity-btn, .control-btn, .modal-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Add some animations for store selection
document.querySelectorAll('.store').forEach(store => {
    store.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// Initialize cart for first load
updateCartCount();

// Add loading state simulation for order confirmation
confirmOrderBtn.addEventListener('click', function () {
    // Disable button and add loading state
    this.disabled = true;
    this.innerHTML = 'Đang xử lý...';

    // Simulate processing time
    setTimeout(() => {
        // Reset button
        this.disabled = false;
        this.innerHTML = 'Xác nhận đặt hàng';

        // Process the order (this already exists in the click handler)
    }, 1000);
});

// Add double-tap protection
let lastTap = 0;
document.querySelectorAll('.quantity-btn').forEach(btn => {
    btn.addEventListener('touchend', function (e) {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;

        if (tapLength < 300 && tapLength > 0) {
            e.preventDefault();
            return false;
        }

        lastTap = currentTime;
    });
});

// Handle browser back button to close modal if open
window.addEventListener('popstate', function (e) {
    if (cartModal.style.display === 'flex') {
        cartModal.style.display = 'none';
        history.pushState(null, document.title, window.location.href);
    }
});

// Save cart to localStorage for persistence
function saveCart() {
    localStorage.setItem('pizzaTimeCart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('pizzaTimeCart');
    if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        // Restore cart
        Object.keys(parsedCart).forEach(itemId => {
            cart[itemId] = parsedCart[itemId];
            const quantityElement = document.getElementById(`qty-${itemId}`);
            if (quantityElement) {
                quantityElement.textContent = parsedCart[itemId].quantity;
            }
        });

        updateCartCount();
    }
}

// Add event listeners directly to save cart
plusBtns.forEach(btn => {
    btn.addEventListener('click', saveCart);
});

minusBtns.forEach(btn => {
    btn.addEventListener('click', saveCart);
});

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCart);

document.querySelectorAll('.quick-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const comboId = btn.getAttribute('data-combo-id');
        const comboName = btn.getAttribute('data-combo-name');
        const comboPrice = btn.getAttribute('data-combo-price');

        addComboToCart(comboId, comboName, comboPrice);
    });
});

function addComboToCart(comboId, comboName, comboPrice) {
    if (!cart[comboId]) {
        cart[comboId] = {
            name: comboName,
            price: comboPrice,
            quantity: 0,
            type: "combo"
        };
    }
    cart[comboId].quantity++;
    // Cập nhật số lượng hiển thị trên giao diện chính
    const quantityElement = document.getElementById(`qty-${comboId}`);
    if (quantityElement) {
        quantityElement.textContent = cart[comboId].quantity;
    }
    updateCartCount();
    saveCart();
}

// Helper function to add preset items to cart
function addPresetToCart(itemId, quantity) {
    const itemElement = document.querySelector(`.food-item[data-item-id="${itemId}"]`);
    const quantityElement = document.getElementById(`qty-${itemId}`);

    if (itemElement && quantityElement) {
        const itemName = itemElement.querySelector('.food-title').textContent;
        const itemPrice = parseInt(itemElement.getAttribute('data-price'));
        const itemType = itemElement.getAttribute('data-item-type');

        if (!cart[itemId]) {
            cart[itemId] = {
                name: itemName,
                price: itemPrice,
                quantity: 0,
                type: itemType
            };
        }

        cart[itemId].quantity += quantity;
        quantityElement.textContent = cart[itemId].quantity;
    }

    updateCartCount();
}

// Implement a search function for future expansion
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.placeholder = 'Tìm món ăn...';
searchInput.style.margin = '15px';
searchInput.style.padding = '8px';
searchInput.style.width = 'calc(100% - 30px)';
searchInput.style.borderRadius = '5px';
searchInput.style.border = '1px solid #ddd';
searchInput.style.display = 'none'; // Hidden for now, can be enabled in future versions

// Add ability to share order with friends (to be implemented)
const shareOrderBtn = document.createElement('button');
shareOrderBtn.className = 'modal-btn';
shareOrderBtn.textContent = 'Chia sẻ đơn hàng';
shareOrderBtn.style.backgroundColor = '#4267B2';
shareOrderBtn.style.color = 'white';
shareOrderBtn.style.marginTop = '10px';
shareOrderBtn.style.width = '100%';
shareOrderBtn.style.display = 'none'; // Hidden for now, can be enabled in future versions

shareOrderBtn.addEventListener('click', () => {
    // This would be implemented when sharing functionality is needed
    alert('Tính năng chia sẻ đơn hàng sẽ có trong phiên bản tiếp theo!');
});

// Add progress indicator for scrolling
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.height = '3px';
progressBar.style.backgroundColor = '#e81c23';
progressBar.style.zIndex = '1000';
progressBar.style.width = '0%';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});

// Make header sticky
const header = document.querySelector('header');
const originalHeaderOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > originalHeaderOffset) {
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.zIndex = '90';
    } else {
        header.style.position = 'static';
    }
});

// Service worker registration for PWA support (commented out for now)
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

// Add a back-to-top button
const backToTopBtn = document.createElement('div');
backToTopBtn.innerHTML = '↑';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.left = '20px';
backToTopBtn.style.width = '40px';
backToTopBtn.style.height = '40px';
backToTopBtn.style.borderRadius = '50%';
backToTopBtn.style.backgroundColor = '#333';
backToTopBtn.style.color = 'white';
backToTopBtn.style.display = 'flex';
backToTopBtn.style.alignItems = 'center';
backToTopBtn.style.justifyContent = 'center';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.opacity = '0';
backToTopBtn.style.transition = 'opacity 0.3s';
backToTopBtn.style.zIndex = '90';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '0.7';
    } else {
        backToTopBtn.style.opacity = '0';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add simple animation for page load
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    document.getElementById('closeThankYouBtn').addEventListener('click', () => {
        document.getElementById('thankYouModal').style.display = 'none';
    });
});

// Add CSS animation for newly loaded page
const style = document.createElement('style');
style.textContent = `
                                                                                                        body {
                                                                                                            opacity: 0;
                                                                                                            animation: fadeIn 0.5s forwards;
                                                                                                        }

                                                                                                        @keyframes fadeIn {
                                                                                                            0% { opacity: 0; }
                                                                                                            100% { opacity: 1; }
                                                                                                        }

                                                                                                        .loaded {
                                                                                                            opacity: 1;
                                                                                                        }
`;
document.head.appendChild(style);

// Log page initialization time for performance monitoring
console.log('Page initialized in: ' + (performance.now() / 1000).toFixed(2) + 's');