const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}