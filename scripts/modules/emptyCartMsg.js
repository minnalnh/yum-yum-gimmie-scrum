import { getElement } from '../utils/domUtils.js';

export function emptyCartMsg(menuRef) {
    menuRef.innerHTML = '';
    const emptyCartMsgRef = document.createElement('h2');
    emptyCartMsgRef.innerText = 'Din varukorg är tom';
    menuRef.appendChild(emptyCartMsgRef);
    emptyCartMsgRef.classList.add('empty-cart-msg');

    const btnRef = getElement('.confirm-btn');

    if(btnRef) {
        btnRef.classList.add('v-hidden');
    }
}