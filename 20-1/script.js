let textBlock = document.getElementById("main-text");
let sideBlock = document.getElementById("side-block");
textBlock.addEventListener("focus", function () {
  sideBlock.style.visibility = "visible";
});
textBlock.addEventListener("blur", function () {
  sideBlock.style.visibility = "hidden";
});
