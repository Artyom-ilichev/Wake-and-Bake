let menu = document.querySelector('.menu');
let btnMenu = document.querySelector('.hamburger-icon');
let btnCross = document.querySelector('.cross-icon');
let blur = document.querySelector('.mask');
let allContent = document.body;

btnMenu.addEventListener('click', function() {
    menu.classList.toggle('open-menu');
    blur.classList.toggle('active');
});

btnCross.addEventListener('click', function() {
    menu.classList.remove('open-menu');
    blur.classList.remove('active');
});

window.addEventListener("click", function (e) {
    if (e.target == blur) {
        menu.classList.remove('open-menu');
        blur.classList.remove('active');
    }
});
