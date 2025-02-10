document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 1000);
    }, 1500);

    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % slides.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
});
