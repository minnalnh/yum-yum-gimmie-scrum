import { fetchFood } from './modules/api.js';
import { cartCounter } from './modules/gui.js';

cartCounter();

// hämtar section elementet från htmlen
const menuHeader = document.querySelector('.menu');
// testade med denna helt värdelös
const localArray = [];
//Fetchar food från jespers api
const food = await fetchFood();
console.log(food);

// Funktion som bygger upp wontonmenyn
function renderWonton(food) {
	let menuHtml__wonton = '';

	for (let i = 0; i < 5; i++) {
		menuHtml__wonton += `
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
                    1
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
	}

	menuHeader.innerHTML = menuHtml__wonton;
}

renderWonton(food);
// Funktion som bygget upp drinkmenyn först byggde jag det på ett helt annat sätt för jag är dum :) kolla längst ner.
function renderDrinks(food) {
	let menuHtml__drinks = '';
	for (let i = 11; i < 17; i++) {
		menuHtml__drinks += `
            <article class="menu__card" data-id="${food.items[i].id}"> 
                <p class="menu__cardHeader">
                    <span>${food.items[i].name}</span> 
                    <span class="test">${food.items[i].price} kr</span>
                </p>
                <section class="menu__cardHidden menu__cardHidden${i + 1} d-none"> 
                    <button aria-label="Ta bort dryck från beställning" class="menu__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity">
                        1
                    </p> 
                    <button aria-label="Lägg till dryck i beställning" class="menu__cardAdd">
                        +
                    </button> 
                    <button aria-label="Lägg till i varukorg" class="menu__cardBuy__button"> 
                        Lägg till i varukorg 
                    </button>
                </section>
            </article>
            `;
	}
	menuHeader.innerHTML = menuHtml__drinks;
}

function renderDip(food) {
	let menuHtml__dip = '';
	for (let i = 5; i < 11; i++) {
		menuHtml__dip += `
            <article class="menu__card" data-id="${food.items[i].id}"> 
                <p class="menu__cardHeader">
                    <span>${food.items[i].name}</span> 
                    <span class="test">${food.items[i].price} kr</span>
                </p>
                <section class="menu__cardHidden menu__cardHidden${i + 1} d-none"> 
                    <button aria-label="Ta bort dryck från beställning" class="menu__cardDelete">
                        -
                    </button> 
                    <p class="menu__cardQuantity">
                        1
                    </p> 
                    <button aria-label="Lägg till dryck i beställning" class="menu__cardAdd">
                        +
                    </button> 
                    <button aria-label="Lägg till i varukorg" class="menu__cardBuy__button"> 
                        Lägg till i varukorg 
                    </button>
                </section>
            </article>
            `;
	}
	menuHeader.innerHTML = menuHtml__dip;
}
// Funktion för att få knapparna att lysa med en ram runt sig vilket meny val du är inne på
function activeButton(event) {
	const buttons = document.querySelectorAll('.menuHeaders__button');

	for (const button of buttons) {
		button.classList.remove('menuHeaders__button--active');
	}

	event.target.classList.add('menuHeaders__button--active');
}

const buttons = document.querySelectorAll('.menuHeaders__button');

for (const button of buttons) {
	button.addEventListener('click', activeButton);
}

document.querySelector('.menuHeaders__button--test').addEventListener('click', () => {
	renderWonton(food);
});

document.querySelector('.menuHeaders__button--test2').addEventListener('click', () => {
	renderDrinks(food);
});

document.querySelector('.menuHeaders__button--test3').addEventListener('click', () => {
	renderDip(food);
});

const test = document.querySelector('.menu');

console.log(test);

// document.querySelector('.menu').addEventListener('click', (event) => {
//     if (!event.target.dataset.id) return;

//         let test = document.querySelectorAll('.menu__cardHidden')
//         test.forEach(card => {
//             card.classList.add('d-none');
//         });
//         const id = event.target.dataset.id
//         document.querySelector('.menu__cardHidden'+id).classList.remove('d-none')
//     }
// )

document.querySelector('.menu').addEventListener('click', (event) => {
	const target = event.target; // Det element som klickades på
	const card = target.closest('.menu__card'); // Hitta kortet vi klickade i

	if (!card) return; // Om vi klickade helt utanför kortet, gör det inget

	// samma som min gamla fast förbättrad
	if (target.dataset.id) {
		document.querySelectorAll('.menu__cardHidden').forEach((card) => card.classList.add('d-none'));
		const id = target.dataset.id;
		console.log(id);
		document.querySelector('.menu__cardHidden' + id).classList.remove('d-none');
	}

	//  När man klickar på plus knappen ökar antalet man ska beställa
	if (target.classList.contains('menu__cardAdd')) {
		const quantityEl = card.querySelector('.menu__cardQuantity');
		let currentAmount = parseInt(quantityEl.innerText);
		quantityEl.innerText = currentAmount + 1;
	}

	// När man klickar på minus knappen minskar antalet man ska beställa
	if (target.classList.contains('menu__cardDelete')) {
		const quantityEl = card.querySelector('.menu__cardQuantity');
		let currentAmount = parseInt(quantityEl.innerText);
		if (currentAmount > 0) {
			quantityEl.innerText = currentAmount - 1;
		}
	}

	// Detta skapar objectet fick hjälp av youtube och guiding av ai.
	if (target.classList.contains('menu__cardBuy__button')) {
		const amount = parseInt(card.querySelector('.menu__cardQuantity').innerText);

		//Min lösning
		const dataId = card.dataset.id;
		const findPrice = food.items.find((item) => item.id == dataId);
		console.log(findPrice);

		// fick hjälp med name delen och amount
		if (amount > 0) {
			const orderedItems = {
				id: card.dataset.id,
				name: card.querySelector('.menu__cardHeader').innerText.split('\n')[0].trim(),
				price: findPrice.price, // Du kan hämta detta dynamiskt sen
				quantity: amount,
			};

			//Min lösning igen // lägger in beställningen i local storage så att man kan hämta den vid senare tillfälle

			console.log(localArray);

			let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

			const existingItem = fullOrder.find((item) => item.id === orderedItems.id);

			if (existingItem) {
				existingItem.quantity += orderedItems.quantity;
			} else {
				fullOrder.push(orderedItems);
			}

			localStorage.setItem('orderedItems', JSON.stringify(fullOrder));

			// triggar cart counter badge:
			cartCounter(true);

			return localArray.push(orderedItems);
		}
	}
});

// const menuHtml__wonton = `
//     <article class="menu__card" data-id="${food.items[0].id}">
//         <p class="menu__cardHeader">
//             <span>${food.items[0].name}</span>
//             <span class="test">99kr</span>
//         </p>
//         <p class="menu__cardIngredients">
//             ${food.items[0].ingredients}
//         </p>
//         <section class="menu__cardHidden menu__cardHidden1 d-none">
//             <button class="menu__cardDelete">
//                 -
//             </button>
//             <p class="menu__cardQuantity">
//                 0
//             </p>
//             <button class="menu__cardAdd">
//                 +
//             </button>
//             <button class="menu__cardBuy__button">
//                 Lägg till i varukorg
//             </button>
//         </section>
//     </article>
//     <article class="menu__card" data-id="${food.items[1].id}">
//         <p class="menu__cardHeader">
//             <span>${food.items[1].name}</span>
//             <span class="test">99kr</span>
//         </p>
//         <p class="menu__cardIngredients">
//             ${food.items[1].ingredients}
//         </p>
//         <section class="menu__cardHidden menu__cardHidden2 d-none">
//             <button class="menu__cardDelete">
//                 -
//             </button>
//             <p class="menu__cardQuantity">
//                 0
//             </p>
//             <button class="menu__cardAdd">
//                 +
//             </button>
//             <button class="menu__cardBuy__button">
//                 Lägg till i varukorg
//             </button>
//         </section>
//     </article>
//     <article class="menu__card" data-id="${food.items[2].id}">
//         <p class="menu__cardHeader">
//             <span>${food.items[2].name}</span>
//             <span class="test">99kr</span>
//         </p>
//         <p class="menu__cardIngredients">
//             ${food.items[2].ingredients}
//         </p>
//         <section class="menu__cardHidden menu__cardHidden3 d-none">
//             <button class="menu__cardDelete">
//                 -
//             </button>
//             <p class="menu__cardQuantity">
//                 0
//             </p>
//             <button class="menu__cardAdd">
//                 +
//             </button>
//             <button class="menu__cardBuy__button">
//                 Lägg till i varukorg
//             </button>
//         </section>
//     </article>
//     <article class="menu__card" data-id="${food.items[3].id}">
//         <p class="menu__cardHeader">
//             <span>${food.items[3].name}</span>
//             <span class="test">99kr</span>
//         </p>
//         <p class="menu__cardIngredients">
//             ${food.items[3].ingredients}
//         </p>
//         <section class="menu__cardHidden menu__cardHidden4 d-none">
//         <button class="menu__cardDelete">
//             -
//         </button>
//         <p class="menu__cardQuantity">
//             0
//         </p>
//         <button class="menu__cardAdd">
//             +
//         </button>
//         <button type="button" class="menu__cardBuy__button">
//             Lägg till i varukorg
//         </button>
//         </section>
//     </article>
// `;
// menuHeader.innerHTML = menuHtml__wonton;
// }
