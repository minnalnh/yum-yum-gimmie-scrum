import { getElement } from './utils/domUtils.js';

export function emptyCartMsg(menuRef) {
    const emptyCartMsgRef = document.createElement('h2');
    emptyCartMsgRef.innerText = 'Din varukorg är tom';
    menuRef.appendChild(emptyCartMsgRef);
    emptyCartMsgRef.classList.add('empty-cart-msg');

    const btnRef = getElement('.confirm-btn');
    btnRef.classList.add('v-hidden');
}