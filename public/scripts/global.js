document.addEventListener('DOMContentLoaded', function () {

    // adapt for smaller laptop screens
    if (screen.width < 1700) {
        document.querySelector('html').style.fontSize = '50%'
    }

    // handle header shadowing on scroll
    let scrollEvent;
    document.onscroll = (event) => {
        clearTimeout(scrollEvent);
        scrollEvent = setTimeout(() => {
            let nav = document.querySelector('.nav');
            let shadow = '0 10px 10px -10px var(--purple)'
            nav.style.boxShadow = window.scrollY > 0 ? shadow : 'none';
        }, 50);
    }

    // handle burger menu for mobile
    this.querySelector('.burger').onclick = function () {
        let burger = document.querySelector('.burger-input');
        let nav = document.querySelector('.nav');
        nav.style.maxHeight = burger.checked ? '9rem' : '45rem';
        burger.checked = !burger.checked;
    };
});