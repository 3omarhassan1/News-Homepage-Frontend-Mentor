let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".links");
let closeIcon = document.querySelector(".close-icon");

function openNav() {
  menu.classList.add("open");
}

menuIcon.addEventListener("click", (e) => {
  openNav();
});

closeIcon.addEventListener("click", (e) => {
  menu.classList.remove("open");
});

document.addEventListener("click", (e) => {
  let arrr = Array.from(menu.querySelectorAll("*"))
  if (!arrr.includes(e.target) && e.target != menuIcon) {
    menu.classList.remove("open")
  }
});