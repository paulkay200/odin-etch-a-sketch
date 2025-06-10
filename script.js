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