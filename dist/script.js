let menuHamburger = document.querySelector('.header__hamburger');
let nav = document.querySelector('.header__nav');

menuHamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
})