document.addEventListener('DOMContentLoaded', () => {

    const trait = document.getElementById('liseret');
    const parent = trait.parentElement;

    function animate() {
        const maxPosition = parent.clientWidth - trait.offsetWidth;
        let position = maxPosition; // Départ à droite
        let direction = -1; // Vers la gauche
        const speed = 4;
        let isPaused = false;

        function step() {
            if (!isPaused) {
                position += direction * speed;

                // Si on atteint un bord, on fait une pause
                if (position <= 0) {
                    position = 0;
                    direction = 1;
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        requestAnimationFrame(step);
                    }, 500);
                    trait.style.transform = `translateX(${position}px)`;
                    return;
                } else if (position >= maxPosition) {
                    position = maxPosition;
                    direction = -1;
                    isPaused = true;
                    setTimeout(() => {
                        isPaused = false;
                        requestAnimationFrame(step);
                    }, 500);
                    trait.style.transform = `translateX(${position}px)`;
                    return;
                }

                trait.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    window.onload = () => {
        trait.style.position = 'absolute';
        trait.style.left = '0';
        animate();
    };

});
