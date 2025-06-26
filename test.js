document.addEventListener('DOMContentLoaded', () => {

    const trait = document.getElementById('liseret');
    const parent = trait.parentElement;

    function animate() {
        const maxPosition = parent.clientWidth - trait.offsetWidth;
        let position = maxPosition; // Départ à droite
        let direction = -1; // Direction vers la gauche
        const speed = 4;

        function step() {
            position += direction * speed;

            // Inversion de direction aux extrémités
            if (position <= 0) {
                position = 0;
                direction = 1;
            } else if (position >= maxPosition) {
                position = maxPosition;
                direction = -1;
            }

            trait.style.transform = `translateX(${position}px)`;
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
