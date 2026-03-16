import { calcTotalPrice } from './calcTotalPrice.js';
import { getElement } from './utils/domUtils.js';

export function updTotalPrice() {
    const totalRef = getElement('.total');
    const fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

    const totalSum = calcTotalPrice(fullOrder);

     totalRef.innerHTML = `
        <p class="total__text">Totalt</p>
        <p class="total__price">${totalSum} kr</p>
    `;
}