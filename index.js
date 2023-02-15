let scrollEvent;
document.onscroll = (event) => {
    clearTimeout(scrollEvent);
    scrollEvent = setTimeout(() => {
        let shadow = '0 0 10px 0 var(--purple)';
        let header = document.querySelector('header');
        header.style.boxShadow = window.scrollY > 0 ? shadow : 'none';
    }, 50);
}