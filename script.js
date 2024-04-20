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

        var i = 0;
        var txt = "I'm Sabrina!";
        var speed = 50;

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("self-write").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        window.addEventListener('DOMContentLoaded', typeWriter);

// function for timeline fades
        $(document).ready(function(){
            $('.content').each(function(i) {
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).height();
    
                if (bottom_of_object > bottom_of_window) {
                    $(this).addClass('hidden');
                }
            });
    
            $(window).scroll(function() {
                $('.hidden').each(function(i) {
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
    
                    if (bottom_of_window > bottom_of_object) {
                        $(this).animate({'opacity':'1'}, 700);
                    }
                });
            });
        });

var currentIndex2 = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showProject(index) {
    currentIndex2 = index;
    carouselItems.forEach((item, i) => {
        if (i === index) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function prevProject() {
    currentIndex2 = (currentIndex2 - 1 + carouselItems.length) % carouselItems.length;
    showProject(currentIndex2);
}

function nextProject() {
    currentIndex2 = (currentIndex2 + 1) % carouselItems.length;
    showProject(currentIndex2);
}

// Show the initial project
showProject(currentIndex2);