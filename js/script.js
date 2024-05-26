//copy menu
function copyMenu() {
    const dptCategory = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    const mainNav = document.querySelector('.header-nav nav');
    const navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    const topNav = document.querySelector('.header-top .wrapper');
    const topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

//show mob-menu
const menuBtn = document.querySelector('.trigger');
const closeBtn = document.querySelector('.t-close');
const addClass = document.querySelector('.site');

menuBtn.addEventListener('click', function () {
    addClass.classList.toggle('showmenu');
});
closeBtn.addEventListener('click', function () {
    addClass.classList.remove('showmenu');
});

//show mobile sub-menu
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) =>
        item != this ? item.closest('.has-child').classList.remove('expand') : null,
    );
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

//show search
const searchBtn = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');

searchBtn.addEventListener('click', function () {
    showClass.classList.toggle('showsearch');
});
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch');
});

//show dpt menu
const dptBtn = document.querySelector('.dpt-cat .dpt-trigger');
const dptClass = document.querySelector('.site');

dptBtn.addEventListener('click', function () {
    dptClass.classList.toggle('showdpt');
});

//product image slider
const productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        },
    },
});
const productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    },
});

//stock progress bar
let stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML,
        percent = (sold * 100) / stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart
const divToShow = '.mini-cart';
const divPopup = document.querySelector(divToShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250);
});

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divToShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
});

if(document.querySelector('.site')) {
    window.onload = function () {
        document.querySelector('.site').classList.toggle('showmodal');
    };
    document.querySelector('.modalclose').addEventListener('click', function () {
        document.querySelector('.site').classList.remove('showmodal');
    });
}

