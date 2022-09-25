function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const color = document.querySelector(".color");
const button = document.querySelector('button.change-color');

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  color.textContent = getRandomHexColor();
}