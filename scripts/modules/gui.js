import { getElement } from '../utils/domUtils.js';

const wrapperRef = getElement('.wrapper');
const menuBtnRef = getElement('#menuBtn');
const closeBtnRef = getElement('#closeBtn');
const menuRef = getElement('.menu');

menuBtnRef.addEventListener('click', () => {
    menuRef.classList.add('open');
    menuBtnRef.classList.add('v-hidden');
})

closeBtnRef.addEventListener('click', () => {
    menuRef.classList.remove('open');
    menuBtnRef.classList.remove('v-hidden');
});

// fick hjälp av ChatGPT
wrapperRef.addEventListener('click', (event) => {
    const isMenu = menuRef.contains(event.target);
    const isBtn = menuBtnRef.contains(event.target);

    if(!isMenu && !isBtn) {
        menuRef.classList.remove('open');
        menuBtnRef.classList.remove('v-hidden');
    }
});
