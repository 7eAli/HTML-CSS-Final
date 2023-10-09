const menuActive = document.querySelector('.menu-open');
const menuButton = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');

function toggleMenu() {
    menuActive.classList.toggle('hidden');
}

menuButton.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);