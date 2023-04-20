const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart)

function toggleDesktopMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    shoppingCart.classList.toggle('inactive')
}