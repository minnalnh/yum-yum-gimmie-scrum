import { getElement } from './utils/domUtils.js';
import { menuInteraction } from './menuInteraction.js';

const menuRef = getElement('.menu');

let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

if(fullOrder.length > 0) {
    displayOrder();

} else {
    const emptyCartMsgRef = getElement('#emptyCartMsg');
    const btnRef = getElement('.btn--red');
    emptyCartMsgRef.innerText = 'Din varukorg är tom';
    btnRef.classList.add('d-none');
}

function displayOrder() {
    let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];
    const orderedItems = JSON.parse(localStorage.getItem('orderedItems'));


    const totalRef = getElement('.total');
    let orderTemplate = '';
    let totalSumTemplate = '';

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

    const totalSum = calcTotalPrice(fullOrder);

        totalSumTemplate = `
            <p class="total__text">Totalt</p>
            <p class="total__price">${totalSum} kr</p>
        `;
        totalRef.innerHTML += totalSumTemplate;
}

function calcTotalPrice(fullOrder) {
    const priceArr = [];
    let sum = 0;
    let priceTimesQuantity = 0;
    
    for(let order of fullOrder) {
        priceTimesQuantity = order.price * order.quantity;
        priceArr.push(priceTimesQuantity);
    }
    
    for(let i = 0; i < priceArr.length; i++) {
        sum += priceArr[i];    
    }
    return sum;
}

menuRef.addEventListener('click', menuInteraction);

/*
const updButtonRefs = document.querySelectorAll('.menu__card-update-button');
const menuCardQuantityRef = getElement('.menu__cardQuantity').innerText;

const orderedItems = JSON.parse(localStorage.getItem('orderedItems'));

updButtonRefs.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(orderedItems[index].quantity);
        console.log(menuCardQuantityRef);
    });
});
*/