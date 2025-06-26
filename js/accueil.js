document.addEventListener('DOMContentLoaded', () => {

    const img = document.getElementById('frefo');
    // var base = 0;

    // var width = window.innerWidth;
    // var height = window.innerHeight;

    // console.log('Taille en Width : '  + w)
    // console.log('Taille en Height : '  + h)

    let x = 100;
    let y = 100;
    let dx = 3; // Vitesse horizontale
    let dy = 2; // Vitesse verticale

    function animate() {
      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;
      const maxX = window.innerWidth - imgWidth - 10;
      const maxY = window.innerHeight - imgHeight - 10;

      x += dx;
      y += dy;

      // Rebond horizontal
      if (x <= 0 || x >= maxX) dx *= -1;
      // Rebond vertical
      if (y <= 0 || y >= maxY) dy *= -1;

      img.style.left = x + "px";
      img.style.top = y + "px";

      requestAnimationFrame(animate);
    }

    window.onload = () => {
      animate();
    };

});