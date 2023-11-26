const button = document.querySelector(".main_button");
const spinner = document.querySelector(".spinner");

button.addEventListener("click", (event) => {
  console.log("Кликнули мышкой");
});

button.addEventListener("mouseenter", () => {
  button.classList.add("changeColor");
});

button.addEventListener("mouseleave", () => {
  button.classList.remove("changeColor");
});

spinner.addEventListener("load", () => {
  spinner.classList.add("hidden");
});

// function mySubmitFunction(e) {
//   e.preventDefault();
//   someBug();
//   return false;
// }
