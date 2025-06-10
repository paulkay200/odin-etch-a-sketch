const container = document.querySelector('.container');
const btn = document.querySelector(".reset-btn");
const erase = document.querySelector(".erase-btn");
const inputNumber = document.querySelector(".input-number");
const currentGridSquare = document.querySelector(".current-grid-square");
const errorMessage = document.querySelector(".error-message");

let initialValue;

function createSquare(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = (550 / gridSize) + "px";
    square.style.height = (550 / gridSize) + "px";
    container.appendChild(square);
  }
}

btn.addEventListener("click", function () {

  erase.disabled = false;

  container.textContent = "";

  btn.disabled = true;

  let userInput = parseInt(inputNumber.value);

  if (userInput >= 1 && userInput <= 100) {
    createSquare(userInput);
    errorMessage.textContent = "";
    currentGridSquare.textContent = `The current grid size is ${userInput} * ${userInput}. To change the grid size, Re-enter a number between 1 and 100.`

  } else {
    currentGridSquare.textContent = "";
    errorMessage.textContent = "Please enter a number between 1 and 100.";
  }

  inputNumber.focus({ preventScroll: true });

});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`
}

container.addEventListener("mouseover", function (event) {

  if (!inputNumber.value || inputNumber.value <= 0 || inputNumber.value >= 101) {
    event.target.style.backgroundColor = "";
  } else {
    event.target.style.backgroundColor = randomColor();
  }

});

container.addEventListener("mouseleave", function (event) {

  if (!inputNumber.value) {
    event.target.style.backgroundColor = "";
  }
});