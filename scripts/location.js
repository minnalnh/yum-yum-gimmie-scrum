// min js-kod
import { getElement } from './utils/domUtils.js';

const card = getElement('.card');
const buttonSection = getElement('.card__btn');

const selectedPlace = getElement('.card__text');

card.addEventListener('click', (e) => {
	const image = e.target.closest('.card');
	if (image) {
		buttonSection.classList.add('card__btn--show');
		console.log('klick');
		selectedPlace.classList.add('card__text-selected');
	}
	return;
});
