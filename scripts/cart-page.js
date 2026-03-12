import { getElement } from './utils/domUtils.js';

displayOrder();

function displayOrder() {

    let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];
    const orderedItems = JSON.parse(localStorage.getItem('orderedItems'));

    const menuRef = getElement('.menu');
    const totalRef = getElement('.total');
    let orderTemplate = '';
    let totalSumTemplate = '';

    for(let i = 0; i < orderedItems.length; i++) {
        orderTemplate = `
            <article class="order">
                <p class="order__card">
                    <span class="order__name">${orderedItems[i].name}</span>
                    <span class="order__price">${orderedItems[i].price} kr</span>
                </p>
                <p class="order__quantity">${orderedItems[i].quantity} stycken</p>
            </article>
        `;
        menuRef.innerHTML += orderTemplate;

    }

    const totalSum = calcTotalPrice(fullOrder);

        totalSumTemplate = `
            <p class="total__text">Totalt</p>
            <p class="total__price">${totalSum} sek</p>
        `;
        totalRef.innerHTML += totalSumTemplate;
}

function calcTotalPrice(fullOrder) {
    let sum = 0;
    let priceTimesQuantity = 0;
    
    for(let i = 0; i < fullOrder.length; i++) {
        priceTimesQuantity = order.price * order.quantity;
        sum += priceTimesQuantity;    
    }
    return sum;
}