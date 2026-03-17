import { emptyCartMsg } from './modules/emptyCartMsg.js';
import { menuInteraction } from './modules/menuInteraction.js';
import { getElement } from './utils/domUtils.js';

const cartRef = getElement('.cart');
const cartBtnRef = getElement('#cartBtn');
const cartCloseBtnRef = getElement('.cart__icon--close');

function getOrder() {
    return JSON.parse(localStorage.getItem('orderedItems')) || [];
}

cartBtnRef.addEventListener('click', toggleShowCart);
cartCloseBtnRef.addEventListener('click', toggleShowCart);

function toggleShowCart() {
    if(cartRef.classList.contains('d-none')) {
        cartRef.classList.remove('d-none');

    } else if(!cartRef.classList.contains('d-none')) {
        cartRef.classList.add('d-none');
    }
}

cartSetup();

function cartSetup() {
    const cartItemsRef = getElement('.cart__items');

    if(getOrder().length > 0) {
        displayCartItems(cartItemsRef);
    
    } else {
        emptyCartMsg(cartItemsRef);
    }
}

function displayCartItems(cartItemsRef) {
    const fullOrder = getOrder();
}