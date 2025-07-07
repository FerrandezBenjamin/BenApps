document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("slider");

    slider.innerHTML += slider.innerHTML;

    let position = 0;
    let speed = 1.2;
    const normalSpeed = 1.2;
    const slowSpeed = normalSpeed * 0.2;
    let animationFrameId;

    function animate() {
        position -= speed;
        if (Math.abs(position) >= slider.scrollWidth / 2) {
            position = 0;
        }
        slider.style.transform = `translateX(${position}px)`;
        animationFrameId = requestAnimationFrame(animate);
    }

    const cards = slider.querySelectorAll(".card-projet");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", () => trueButton(card));
        card.addEventListener("mouseleave", () => falseButton(card));
    });

    function trueButton(card) {
        speed = slowSpeed;

        const buttonWrapper = card.querySelector(".card-button");
        if (buttonWrapper) {

            buttonWrapper.style.opacity = "1";
            buttonWrapper.style.transform = "translateY(0)";
            buttonWrapper.style.pointerEvents = "auto"; 


            buttonWrapper.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        }
    }

    function falseButton(card) {
        speed = normalSpeed;

        const buttonWrapper = card.querySelector(".card-button");
        if (buttonWrapper) {

            buttonWrapper.style.opacity = "0";
            buttonWrapper.style.transform = "translateY(10px)";
            buttonWrapper.style.pointerEvents = "none"; 
        }
    }

    animate();

});
