document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');

    const principal = document.getElementById('principal');
    const contain_btn_a = document.getElementById('contain_btn');
    const arrow =  document.getElementById("scroll-button");

    slider.addEventListener('click', () => {
        slider.classList.toggle('active');

        if(principal.classList.contains('mode-base'))
        {
            principal.classList.remove('mode-base');
            principal.classList.add('mode-white');

            contain_btn_a.classList.remove('btn-c-base');
            contain_btn_a.classList.add('btn-c-white');

            arrow.src="../img/arrow-down.png";
        } else {
            principal.classList.remove('mode-white');
            principal.classList.add('mode-base');

            contain_btn_a.classList.remove('btn-c-white');
            contain_btn_a.classList.add('btn-c-base');

            arrow.src="../img/arrow-down-white.png";
        }
    });
});