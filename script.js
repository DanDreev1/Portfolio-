const hamburger = document.querySelector(".hamMenu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activeham")
    navMenu.classList.toggle("activeham")
})