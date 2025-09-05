document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.arrow.right');
    const prevButton = document.querySelector('.arrow.left');
    let index = 0;

    // Function to show slide
    function showSlide() {
        track.style.transform = `translateX(-${index * 100}vw)`;
    }

    // Next Button
    nextButton.addEventListener('click', () => {
        index++;
        if (index >= slides.length) {
            index = 0; // Loop back to first slide
        }
        showSlide();
    });

    // Prev Button
    prevButton.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = slides.length - 1; // Last slide pe chale jao
        }
        showSlide();
    });

    // Auto Scroll every 3 seconds
    setInterval(() => {
        index++;
        if (index >= slides.length) {
            index = 0;
        }
        showSlide();
    }, 3000);
});
