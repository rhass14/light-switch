const btn = document.querySelector("button");
function toggleDarkMode() {
  document.body.classList.toggle("body-dark");
  btn.classList.toggle("button-dark");
}

btn.addEventListener("click", toggleDarkMode);
