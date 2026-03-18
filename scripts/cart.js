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
    
    const wrapperRef = getElement('.wrapper');
    const cartBtnRef = getElement('#cartBtn');
    const cartCloseBtnRef = getElement('.cart__icon--close');
    const menuBtnRef = getElement('#menuBtn');
    const cartRef = getElement('.cart');
    
    wrapperRef.addEventListener('click', (event) => {
        const isMenuBtn = menuBtnRef.contains(event.target);
        const isCartBtn = cartBtnRef.contains(event.target);
        const isCart = cartRef.contains(event.target);
        const isCartCloseBtn = cartCloseBtnRef.contains(event.target);
        
        if (!isCart && !isCartBtn && !isCartCloseBtn || isMenuBtn) {
            cartRef.classList.add('d-none');
        }
    });


}

function displayCartItems(cartItemsRef) {
    const fullOrder = getOrder();

    for(let i = 0; i < fullOrder.length; i++) {
        const orderTemplate = `
            <article class="menu__card" data-id="${fullOrder[i].id}"> 
                <p class="menu__cardHeader">
                    <span>${fullOrder[i].name}</span> 
                    <span class="element-order">${fullOrder[i].price} kr</span>
                </p>
                <p class="order__quantity">${fullOrder[i].quantity} stycken</p>
                <section class="cart__btn-section"> 
                    <button aria-label="Ta bort produkt från beställning" class="menu__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity">
                        ${fullOrder[i].quantity}
                    </p> 
                    <button aria-label="Lägg till produkt i beställning" class="menu__cardAdd">
                        +
                    </button> 
                    <button aria-label="Lägg till i varukorg" class="menu__card-update-button btn--red"> 
                        Uppdatera antal 
                    </button>
                </section>
            </article>
        `;
        cartItemsRef.innerHTML += orderTemplate;
    }
}
cartRef.addEventListener('click', menuInteraction);