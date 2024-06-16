
const images = ["images/1.jpg", "images/2.jpg", "images/3.avif", "images/4.jpg", "images/5.jpg"];
let currentImageIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function showImage(index) {
    if (index < 0) {
        currentImageIndex = images.length - 1;
    } else if (index >= images.length) {
        currentImageIndex = 0;
    } else {
        currentImageIndex = index;
    }
    sliderImage.src = images[currentImageIndex];
}

function nextSlide() {
    showImage(currentImageIndex + 1);
}

function prevSlide() {
    showImage(currentImageIndex - 1);
}


showImage(currentImageIndex);
setInterval(nextSlide,3000);