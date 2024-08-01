let slideIndex = 0;

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }
    slides[slideIndex].style.display = "block";  // Show current slide
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Initialize slideshow
document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function playMusic() {
    let music = document.getElementById("background-music");
    music.play();
}
