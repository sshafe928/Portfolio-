// Array of image URLs
const imageUrls = [
    "./images/questionmark.png",
    "./images/Waterdrop.png",
    "./images/frustrated.png",
    "./images/aha.png"

];
const rotatingImage = document.getElementById('rotating-image');


let currentIndex = 0;

// Function to rotate images
function rotateImages() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    rotatingImage.src = imageUrls[currentIndex];
}

// Interval for the rotation
let rotationInterval = setInterval(rotateImages, 2000); 


window.addEventListener('scroll', function() {
    var footer = document.querySelector('.footer');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector('.section3');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector('.section4');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

window.addEventListener('scroll', function() {
    var footer = document.querySelector('#resume');
    var footerPosition = footer.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});