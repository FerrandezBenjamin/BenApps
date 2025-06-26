window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    const section2 = document.querySelector('.section-2');
    const opacity = Math.min(scrollY / windowHeight, 1); // de 0 à 1

    section2.style.opacity = opacity;
  });