import { fetchFood } from './modules/api.js';

const localArray = [];
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

			return localArray.push(orderedItems);
		}
	}

    if (target.classList.contains('menu__card-update-button')) {
		const newAmount = parseInt(card.querySelector('.menu__cardQuantity').innerText);
        
        let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

        for(let order of fullOrder) {
            console.log(newAmount); // funkar
        }


		const dataId = card.dataset.id;
		const findPrice = food.items.find((item) => item.id == dataId);
		console.log(findPrice);

		if (amount > 0) {
			const orderedItems = {
				id: card.dataset.id,
				name: card.querySelector('.menu__cardHeader').innerText.split('\n')[0].trim(),
				price: findPrice.price,
				quantity: amount,
			};

			console.log(localArray);

			let fullOrder = JSON.parse(localStorage.getItem('orderedItems')) || [];

			const existingItem = fullOrder.find((item) => item.id === orderedItems.id);

			if (existingItem) {
				existingItem.quantity += orderedItems.quantity;
			} else {
				fullOrder.push(orderedItems);
			}

			localStorage.setItem('orderedItems', JSON.stringify(fullOrder));

			return localArray.push(orderedItems);
		}
	}
}