const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click",()=>{
    navbar.classList.toggle("show-menu")
});



let currentIndex = 0;
const images = [
    "images/products/product-1.png",
    "images/products/product-2.png",
    "images/products/product-3.png",
    "images/products/product-4.png",
    "images/products/product-5.png",
    "images/products/product-6.png",
    "images/products/product-7.png",
    "images/products/product-8.png",
    "images/products/product-9.png"
];

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const visibleSlides = 3;
    const offset = -(currentIndex * (100 / visibleSlides));
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function setaEsquerda() {
    const totalItems = images.length;
    const visibleSlides = 3;
    currentIndex = (currentIndex === 0) ? totalItems - visibleSlides : currentIndex - 1;
    updateCarousel();
}

function setaDireita() {
    const totalItems = images.length;
    const visibleSlides = 3;
    currentIndex = (currentIndex === totalItems - visibleSlides) ? 0 : currentIndex + 1;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    images.forEach((src, index) => {
        const div = document.createElement('div');
        div.className = 'carousel-item';
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${index + 1}`;
        div.appendChild(img);
        carouselInner.appendChild(div);
    });

    updateCarousel();
});
