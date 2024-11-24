// This code adds a click handler to the element with the class `.hamMenu`. When you click on the hamburger (menu icon), 
// the `activeham` classes of the hamburger and the menu (`.menu`) are toggled. This allows you to change their style, for example to show or hide the menu on mobile devices.

const hamburger = document.querySelector(".hamMenu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("activeham")
    navMenu.classList.toggle("activeham")
})