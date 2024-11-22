import './scss/style.scss';
import '../node_modules/bootstrap/js/src/collapse.js'
import './js/image.js';

const card = document.querySelector('.card_article');
const navbarLogo = document.querySelector('.navbar-brand');
const cardImage = document.querySelector('.card_img');

function deleteCardImage() {
    if (document.documentElement.clientWidth <= 560) {
        cardImage.style.display = 'none';
        card.style.position = 'initial';
    }
    else {
        cardImage.style.display = 'block'
        card.style.position = 'absolute';
    }

}

function cardMotion() {
    let width = document.documentElement.clientWidth;
    switch(true) {
        case (width <= 1300 && width > 1020): return card.style.width = '600px';
        case (width <= 1020 && width > 940): return card.style.width = '555px';
        case (width <= 940 && width > 865): return card.style.width = '510px';
        case (width <= 865) && width > 670: return card.style.width = '461px';
        case (width <= 670 && width > 560): return card.style.width = '390px';
        case (width <= 560 ): return card.style.width = 'auto';
        default: card.style.width = '643px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Ряд вызванных событий
    window.addEventListener('resize', deleteCardImage);
    window.addEventListener('resize', cardMotion);
    cardMotion();
    deleteCardImage();
    navbarLogo.addEventListener('click', function() {window.location.reload()});
})

