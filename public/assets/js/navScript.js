const menuItem = document.querySelector(".main-menu");
const navbar = document.querySelector(".navbar");

menuItem.addEventListener("click", ()=> {
    navbar.classList.toggle("change");
    console.log('i was clicked');
  });
