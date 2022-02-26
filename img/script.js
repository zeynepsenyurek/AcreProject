console.log("here");

var menu = document.getElementById("menu");

var overlay = document.getElementById("nav-box");

menu.addEventListener("click", function () {
  overlay.classList.toggle("overlay");
});
