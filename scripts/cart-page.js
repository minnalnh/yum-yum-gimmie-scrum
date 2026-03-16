import { cartCounter } from './modules/gui.js';
import { getElement } from './utils/domUtils.js';
import { menuInteraction } from './menuInteraction.js';
import { calcTotalPrice } from './calcTotalPrice.js';
import { emptyCartMsg } from './emptyCartMsg.js';

const menuRef = getElement('.menu');

let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

if(fullOrder.length > 0) {
    displayOrder();
    cartCounter();

} else { // visa meddelande om att varukorgen är tom
    emptyCartMsg(menuRef);
}

function displayOrder() {
    let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];
    const orderedItems = JSON.parse(localStorage.getItem('orderedItems'));


    const totalRef = getElement('.total');
    let orderTemplate = '';
    // let totalSumTemplate = '';

    for(let i = 0; i < orderedItems.length; i++) {
        orderTemplate = `
            <article class="menu__card" data-id="${orderedItems[i].id}"> 
                <p class="menu__cardHeader">
                    <span>${orderedItems[i].name}</span> 
                    <span class="element-order">${orderedItems[i].price} kr</span>
                </p>
                <p class="order__quantity">${orderedItems[i].quantity} stycken</p>
                <section class="menu__btn-section"> 
                    <button aria-label="Ta bort produkt från beställning" class="menu__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity">
                        ${orderedItems[i].quantity}
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