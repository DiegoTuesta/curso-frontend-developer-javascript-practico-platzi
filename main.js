const navEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailIconClosed = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetailContainer');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
productDetailIconClosed.addEventListener('click', closeDetailProduct);

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
    closeDetailProduct();
    mobileMenu.classList.toggle('inactive')
}
function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    //close detail product
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
        
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    //close detail product
    shoppingCart.classList.toggle('inactive')
}

function openDetailProduct() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');
        
    if (!isShoppingCartClosed) {
        shoppingCart.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive');
    //console.log("open")
}

function closeDetailProduct() {
    productDetailContainer.classList.add('inactive');
    //console.log("cerrar")
}

const productList = [];
productList.push({
    name: 'Bike Basic',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike Premium',
    price: 200,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 180,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike Basic',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike Premium',
    price: 200,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 180,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openDetailProduct);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = 'S/ '+ product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}



renderProducts(productList)

