import { emptyCartMsg } from './emptyCartMsg.js';
import { fetchFood } from './api.js';
import { cartCounter } from './gui.js';
import { updTotalPrice } from './updTotalPrice.js';
import { getElement } from '../utils/domUtils.js';

//Fetchar food från jespers api
const food = await fetchFood();

export function menuInteraction(event) {
    const target = event.target; // Det element som klickades på
	const card = target.closest('.menu__card'); // Hitta kortet vi klickade i
    
	if (!card) return; // Om vi klickade helt utanför kortet, gör det inget

	// samma som min gamla fast förbättrad
	if (target.dataset.id) {
		document.querySelectorAll('.menu__cardHidden').forEach((card) => card.classList.add('d-none'));
		const id = target.dataset.id;

		if(window.location.pathname === '/pages/menu.html') {
			document.querySelector('.menu__cardHidden' + id).classList.remove('d-none');
		}
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

		if(!findPrice) {
			console.error('Produkt hittades inte ', dataId);
			return;
		}

		// fick hjälp med name delen och amount
		if (amount > 0) {
			//Min lösning igen // lägger in beställningen i local storage så att man kan hämta den vid senare tillfälle

			let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

			const orderedItems = createOrder(card, findPrice, amount);

			const existingItem = fullOrder.find((item) => item.id === orderedItems.id);

			if (existingItem) {
				existingItem.quantity += orderedItems.quantity;
			} else {
				fullOrder.push(orderedItems);
			}

			localStorage.setItem('orderedItems', JSON.stringify(fullOrder));

			cartCounter();
		}
	}

    if (target.classList.contains('menu__card-update-button')) {
		const amount = parseInt(card.querySelector('.menu__cardQuantity').innerText.split(' ')[0]);
        const orderQuantityRef = card.querySelector('.order__quantity');
        
		const dataId = Number(card.dataset.id);
		const findPrice = food.items.find((item) => item.id === dataId);
        
        if(amount === 0) {
            let orderedItems = JSON.parse(localStorage.getItem('orderedItems')) || [];
            orderedItems = orderedItems.filter(order => Number(order.id) !== dataId);
            localStorage.setItem('orderedItems', JSON.stringify(orderedItems));

			updTotalPrice();
			cartCounter();
			card.remove();

			if(orderedItems.length === 0) {
				const menuRef = getElement('.menu');
				emptyCartMsg(menuRef);
			}

        } else if (amount > 0) {
			const orderedItems = createOrder(card, findPrice, amount);

			let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];
            
			const existingItem = fullOrder.find((item) => item.id === orderedItems.id);
            
			if (existingItem) {
                existingItem.quantity = orderedItems.quantity;
			} else {
                fullOrder.push(orderedItems);
			}
            
			localStorage.setItem('orderedItems', JSON.stringify(fullOrder));
            
            orderQuantityRef.innerText = `${amount} stycken`;
			updTotalPrice();
            cartCounter();		
		}

	}
}

function createOrder(card, findPrice, amount) {
	const orderedItems = {
		id: Number(card.dataset.id),
		name: card.querySelector('.menu__cardHeader').innerText.split('\n')[0].trim(),
		price: findPrice.price,
		quantity: amount,
	};
	return orderedItems;
}