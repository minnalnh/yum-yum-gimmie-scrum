import { getElement } from '../utils/domUtils.js';
import { menuInteraction } from './menuInteraction.js';

const cartRef = getElement('.cart');

cartRef.addEventListener('click', menuInteraction);

export function updCartItems(fullOrder) {
    const cartItemsRef = getElement('.cart__items');
    if(!cartItemsRef) return;

    cartItemsRef.innerHTML = '';

    for(let i = 0; i < fullOrder.length; i++) {
        const orderTemplate = `
            <article class="cart__card" data-id="${fullOrder[i].id}"> 
                <p class="menu__cardHeader cart__cardHeader">
                    <span>${fullOrder[i].name}</span> 
                    <span class="element-order">${fullOrder[i].price} kr</span>
                </p>
                <p class="order__quantity">${fullOrder[i].quantity} stycken</p>
                <section class="cart__btn-section"> 
                    <button aria-label="Ta bort produkt från beställning" class="menu__cardDelete cart__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity cart__cardQuantity">
                        ${fullOrder[i].quantity}
                    </p> 
                    <button aria-label="Lägg till produkt i beställning" class="menu__cardAdd cart__cardAdd">
                        +
                    </button> 
                    <button aria-label="Lägg till i varukorg" class="menu__card-update-button cart__update-button btn--red"> 
                        Uppdatera varukorg 
                    </button>
                </section>
            </article>
        `;
        cartItemsRef.innerHTML += orderTemplate;
    }
}