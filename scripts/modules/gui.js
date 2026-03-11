import { getElement } from '../utils/domUtils.js';

const menuBtnRef = getElement('#menuBtn');
const closeBtnRef = getElement('#closeBtn');
const menuRef = getElement('.menu');

menuBtnRef.addEventListener('click', () => {
    menuRef.classList.toggle('open');
    menuBtnRef.classList.toggle('v-hidden');
})

closeBtnRef.addEventListener('click', () => {
    menuRef.classList.toggle('open');
    menuBtnRef.classList.toggle('v-hidden');
});