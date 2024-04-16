let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        document.querySelector('footer').style.backgroundColor = '#555';
    } else {
        document.querySelector('footer').style.backgroundColor = '#333';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
