document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    speed: 3000,  // vitesse élevée = défilement lent, constant
    loop: true,
    allowTouchMove: true,
    centeredSlides: true,
    spaceBetween: 60,
    autoplay: {
        delay: 0,     // pas de délai entre les slides (continu)
        disableOnInteraction: false,  // ne pas arrêter quand on interagit (glisse)
        pauseOnMouseEnter: false,     // ne pas arrêter au survol
    },
    direction: 'horizontal',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
    });

})