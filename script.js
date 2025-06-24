document.addEventListener("DOMContentLoaded", function () {
    var next = document.getElementById('carrousel');
    
    var images = [
        document.getElementById('one-image'),
        document.getElementById('two-image'),
        document.getElementById('three-image'),
        document.getElementById('four-image')
    ];

    var texts = [
        document.getElementById('one-text'),
        document.getElementById('two-text'),
        document.getElementById('three-text'),
        document.getElementById('four-text')
    ];

    let currentIndex = 0;

    // Appliquer transition aux images
    images.forEach(img => {
        img.style.transition = "opacity 0.1s ease";
        img.style.opacity = 0;
        img.style.display = "none";
    });

    // Appliquer transition aux textes
    texts.forEach(txt => {
        txt.style.transition = "opacity 0.8s ease";
        txt.style.opacity = 0;
        txt.style.display = "none";
    });

    // Afficher premier image/texte
    images[currentIndex].style.display = "flex";
    images[currentIndex].style.opacity = 1;

    texts[currentIndex].style.display = "flex";
    texts[currentIndex].style.opacity = 1;

    next.addEventListener("click", function () {
        changeSlide();
    });

    function changeSlide() {
        // Fades out
        images[currentIndex].style.opacity = 0;
        texts[currentIndex].style.opacity = 0;

        setTimeout(() => {
            images[currentIndex].style.display = "none";
            texts[currentIndex].style.display = "none";

            // Index suivant
            currentIndex = (currentIndex + 1) % images.length;

            // Fades in
            images[currentIndex].style.display = "flex";
            texts[currentIndex].style.display = "flex";

            // Forcer le repaint pour que le fade-in fonctionne bien
            void images[currentIndex].offsetWidth;
            void texts[currentIndex].offsetWidth;

            images[currentIndex].style.opacity = 1;
            texts[currentIndex].style.opacity = 1;
        }, 100);
    }
});
