function toggleMenu() {
  var menu = document.getElementById("menu-top");
  menu.classList.toggle("toggled-on");
}

document
  .getElementById("menu-top-toggle")
  .addEventListener("click", toggleMenu);
