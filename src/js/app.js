import "../scss/style.scss";

import * as flsFunctions from "./files/functions.js";

flsFunctions.isWebp();


const btnBurgerMenu = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.content-nav');

btnBurgerMenu.addEventListener('click', () => {
    btnBurgerMenu.classList.toggle('burger-open');
    burgerMenu.classList.toggle('burger-open');
});
