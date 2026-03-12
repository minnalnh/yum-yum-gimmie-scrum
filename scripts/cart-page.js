import { getElement } from './utils/domUtils.js';

displayOrder();

function displayOrder() {

    let fullOrder = JSON.parse(localStorage.getItem("orderedItems")) || [];
    const orderedItems = JSON.parse(localStorage.getItem('orderedItems'));

    console.log(fullOrder);

    const menuRef = getElement('.menu');
    let orderTemplate = '';

    for(let i = 0; i < orderedItems.length; i++) {
        orderTemplate = `
            <article class="order">
                <p class="order__card">
                    <span class="order__name">${orderedItems[i].name}</span>
                    <span class="order__price">${orderedItems[i].price} kr</span>
                    <span class="order__quantity">${orderedItems[i].quantity} st</span>
                </p>
            </article>
        `;
        menuRef.innerHTML += orderTemplate;

    }
}