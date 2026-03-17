import { addClass, getElement, removeClass } from '../utils/domUtils.js';

const wrapperRef = getElement('.wrapper');
const menuBtnRef = getElement('#menuBtn');
const closeBtnRef = getElement('#closeBtn');
const menuRef = getElement('.nav');

menuBtnRef.addEventListener('click', () => {
	menuRef.classList.add('open');
	menuBtnRef.classList.add('v-hidden');
});

closeBtnRef.addEventListener('click', () => {
	menuRef.classList.remove('open');
	menuBtnRef.classList.remove('v-hidden');
});

// fick hjälp av ChatGPT
wrapperRef.addEventListener('click', (event) => {
	const isMenu = menuRef.contains(event.target);
	const isBtn = menuBtnRef.contains(event.target);

	if (!isMenu && !isBtn) {
		menuRef.classList.remove('open');
		menuBtnRef.classList.remove('v-hidden');
	}
});
//
//
//
//
//
//
// cart badge counter:
export function cartCounter(animate = false) {
	const counter = getElement('#cartCount');
	const container = getElement('#cartCountContainer');
	const cart = JSON.parse(localStorage.getItem('orderedItems')) || [];

	// Fick ai-hjälp här:
	const totalQuantity = cart.reduce((sum, item) => sum + Number(item.quantity), 0);

	// Här fick jag hjälp av AI:
	if (cart.length === 0) {
		addClass(container, 'd-none');
		return;
	}
	removeClass(container, 'd-none');
	counter.textContent = totalQuantity;
	if (animate) {
		removeClass(container, 'icon-pop');
		void container.offsetWidth; // viktig rad
		addClass(container, 'icon-pop');
		setTimeout(() => {
			removeClass(container, 'icon-pop');
		}, 300);
	}
}
