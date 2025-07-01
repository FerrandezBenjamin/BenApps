document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");

    // Duplique le contenu pour créer l’effet infini
    slider.innerHTML += slider.innerHTML;

    let position = 0;
    const speed = 0.2;
    let animationFrameId;
    let currentHoveredCard = null;
    let buttonTimeoutId = null;

    function animate() {
        position -= speed;
        if (Math.abs(position) >= slider.scrollWidth / 2) {
            position = 0;
        }
        slider.style.transform = `translateX(${position}px)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    function stopAnimation() {
        cancelAnimationFrame(animationFrameId);
    }

    function startAnimation() {
        animate();
    }

    function handleCardHover(card) {
        currentHoveredCard = card;
        // const content = card.querySelector(".card-container");
        // const button = card.querySelector(".card-button");

        // content.classList.add("visible");


        // buttonTimeoutId = setTimeout(() => {
        //     if (button) button.classList.add("visible");
        // }, 600);

        stopAnimation();
    }

    function handleCardLeave(card) {
        currentHoveredCard = null;
        // const content = card.querySelector(".card-container");
        // const button = card.querySelector(".card-button");

        // content.classList.remove("visible");

        // Retirer immédiatement le bouton + clear le timeout
        // clearTimeout(buttonTimeoutId);
        // if (button) button.classList.remove("visible");

        startAnimation();
    }

    // Ajouter les listeners de hover classiques sur chaque carte projet
    const cards = slider.querySelectorAll(".card-projet");
    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => handleCardHover(card));
        card.addEventListener("mouseleave", () => handleCardLeave(card));
    });

    // Ajouter les listeners pour redimensionner les .card-container au survol
    const containers = slider.querySelectorAll(".card-container");
    containers.forEach((card) => {
        card.addEventListener("mouseenter", () => resizeDivUp(card));
        card.addEventListener("mouseleave", () => resizeDivDown(card));
    });

    function resizeDivUp(div) {
        const maxW = div.parentElement.clientWidth;
        const maxH = div.parentElement.clientHeight;

        const resizeToW = maxW - 20;
        const resizeToH = maxH - 20;

        div.style.width = `${resizeToW}px`;
        div.style.height = `${resizeToH}px`;
    }

    function resizeDivDown(div) {
        div.style.width = `15px`;
        div.style.height = `15px`;
    }

    // Démarrer l’animation automatique
    animate();
});
