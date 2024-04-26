const btn = document.querySelector("button");

function toggleDarkMode() {
  document.body.classList.toggle("body-dark");
  btn.classList.toggle("button-dark");

if (document.body.classList.contains("body-dark")) {
  btn.innerHTML = "Night";
} else {
  btn.innerHTML = "Day";
}
}

btn.addEventListener("click", toggleDarkMode);
