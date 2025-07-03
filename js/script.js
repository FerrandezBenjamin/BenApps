document.addEventListener("DOMContentLoaded", function () {
    var next = document.getElementById('carrousel');
    const faders = document.querySelectorAll('.fade-in');
    const fadersBase = document.querySelectorAll('.fade-in-base');
    const fadersLeft = document.querySelectorAll('.fade-in-left');
    const fadersRight = document.querySelectorAll('.fade-in-right');

    console.log(fadersLeft);

    const options = {
        threshold: 0.1
    };
    const sections = ['principal', 'about','projets', 'contact'];
    const scrollButtonA = document.getElementById('scroll-button');
    // const scrollButtonT = document.getElementById('scroll-button-top');


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    faders.forEach(section => {
        observer.observe(section);
    });

    fadersBase.forEach(section => {
        observer.observe(section);
    });

    fadersLeft.forEach(section => {
        observer.observe(section);
    });

    fadersRight.forEach(section => {
        observer.observe(section);
    });

    const scrollUpBtn = document.getElementById('scroll-button-top');
    const principalSection = document.getElementById('principal');
    
    if (scrollUpBtn && principalSection) {
        const visibilityObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // On cache le bouton haut quand la section 'principal' est visible à moitié ou plus
                if (entry.isIntersecting) {
                    scrollUpBtn.classList.remove('appear');
                } else {
                    scrollUpBtn.classList.add('appear');
                }
            });
        }, {
            root: null,
            threshold: 0.5
        });

        visibilityObserver.observe(principalSection);
    }

    
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
        img.style.transition = "opacity 0.3s ease";
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
        }, 300);
    }

    scrollButtonA.addEventListener('click', () => {
        const scrollPosition = window.scrollY + window.innerHeight / 2; 

        let nextSection = null;

        for (const id of sections) {
            const elem = document.getElementById(id);
            const elemTop = elem.getBoundingClientRect().top + window.scrollY;

            if (elemTop > scrollPosition) {
                nextSection = elem;
                break;
            }
        }

        if (!nextSection) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // scrollButtonT.addEventListener('click', () => {
    //     const scrollPosition = window.scrollY + window.innerHeight / 2;

    //     let previousSection = null;

    //     for (let i = sections.length - 1; i >= 0; i--) {
    //         const elem = document.getElementById(sections[i]);
    //         const elemBottom = elem.getBoundingClientRect().bottom + window.scrollY;

    //         if (elemBottom < scrollPosition) {
    //             previousSection = elem;
    //             break;
    //         }
    //     }

    //     if (previousSection) {
    //         previousSection.scrollIntoView({ behavior: 'smooth' });
    //     } else {
    //         // Si aucune section trouvée au-dessus, on reste en haut
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //     }
    // });
    

});
