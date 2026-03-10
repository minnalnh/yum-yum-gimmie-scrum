import { getElement } from '../utils/domUtils.js';

const navIconRef = getElement('#menuIcon');
const closeIconRef = getElement('#closeIcon');
const navRef = getElement('.nav');

navIconRef.addEventListener('click', () => {
    navRef.classList.remove('d-none');
})

closeIconRef.addEventListener('click', () => {
    navRef.classList.add('d-none');
});