const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const images = document.querySelector(".grid");
const title = document.querySelector(".title");
const subNav= document.querySelector(".sub-nav");


console.log(images);
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    images.classList.toggle("fadeOut");
    title.classList.toggle("fadeOut");
    subNav.classList.toggle("fadeOut")
})