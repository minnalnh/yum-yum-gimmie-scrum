import { getElement } from './utils/domUtils.js';
import { menuInteraction } from './menuInteraction.js';

const menuRef = getElement('.menu');
displayOrder();

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
                    <span>${orderedItems[i].price} kr</span>
                </p>
                <p class="order__quantity">${orderedItems[i].quantity} stycken</p>
                <section class="menu__cardHidden menu__cardHidden${i + 1} d-none"> 
                    <button aria-label="Ta bort produkt från beställning" class="menu__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity">
                        ${orderedItems[i].quantity}
                    </p> 
                    <button aria-label="Lägg till produkt i beställning" class="menu__cardAdd">
                        +
                    </button> 
                    <button aria-label="Lägg till i varukorg" class="menu__card-update-button"> 
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
            <p class="total__price">${totalSum} sek</p>
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
<article class="menu__card" data-id="${food.items[i].id}"> 
            <p class="menu__cardHeader">
                <span>${food.items[i].name}</span> 
                <span class="test">${food.items[i].price} kr</span>
            </p>
            <p class="menu__cardIngredients">
                ${food.items[i].ingredients.join(', ')} 
            </p>
            <section class="menu__cardHidden menu__cardHidden${food.items[i].id} d-none"> 
                <button aria-label="Ta bort rätt från beställning" class="menu__cardDelete">
                    -
                </button> 
                <p class="menu__cardQuantity">
                    0
                </p> 
                <button aria-label="Lägg till rätt i beställning" class="menu__cardAdd">
                    +
                </button> 
                <button aria-label="Lägg till i varukorgen" type="button" class="menu__cardBuy__button"> 
                    Lägg till i varukorg 
                </button>
            </section>
        </article>
        `;
    */