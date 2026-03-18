import { cartCounter } from './modules/gui.js';
import { getElement } from './utils/domUtils.js';
import { menuInteraction } from './modules/menuInteraction.js';
import { calcTotalPrice } from './modules/calcTotalPrice.js';
import { emptyCartMsg } from './modules/emptyCartMsg.js';

const cartMenuRef = getElement('.cart-menu');

function getOrder() {
    return JSON.parse(localStorage.getItem('orderedItems')) || [];
}

orderSetup();

function orderSetup() {
    const fullOrder = getOrder();

    if(fullOrder.length > 0) {
        displayOrder();
        cartCounter();
    
    } else { // visa meddelande om varukorgen är tom
        emptyCartMsg(cartMenuRef);
    }
}

function displayOrder() {
    const fullOrder = getOrder();
    const totalRef = getElement('.total');

    for(let i = 0; i < fullOrder.length; i++) {
        const orderTemplate = `
            <article class="menu__card" data-id="${fullOrder[i].id}"> 
                <p class="menu__cardHeader">
                    <span>${fullOrder[i].name}</span> 
                    <span class="element-order">${fullOrder[i].price} kr</span>
                </p>
                <p class="order__quantity">${fullOrder[i].quantity} stycken</p>
                <section class="menu__btn-section"> 
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
                        Uppdatera varukorg 
                    </button>
                </section>
            </article>
        `;
        menuRef.innerHTML += orderTemplate;
    }

    let totalSum = calcTotalPrice(fullOrder);

    totalRef.innerHTML = `
        <p class="total__text">Totalt</p>
        <p class="total__price">${totalSum} kr</p>
    `;

}
menuRef.addEventListener('click', menuInteraction);