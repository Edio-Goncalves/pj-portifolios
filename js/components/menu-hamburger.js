const menuMobile = document.getElementById("menu-mobile");

function toggleMenu() {
  const active = document.getElementById("menu-mobile");
  active.classList.toggle("active");
}
menuMobile.addEventListener("click", toggleMenu);
menuMobile.addEventListener("toggle", toggleMenu);
