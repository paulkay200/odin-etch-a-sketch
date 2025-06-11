const container = document.querySelector('.container');
const btn = document.querySelector(".reset-btn");
const erase = document.querySelector(".erase-btn");
const inputNumber = document.querySelector(".input-number");
const currentGridSquare = document.querySelector(".current-grid-square");
const clearGridMessage = document.querySelector(".clear-grid-message");
const errorMessage = document.querySelector(".error-message");

function createSquare(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = (550 / gridSize) + "px";
    square.style.height = (550 / gridSize) + "px";
    container.appendChild(square);
  }
}

inputNumber.addEventListener("input", function () {

  if (
    inputNumber.value === "" ||
    inputNumber.value < 1 ||
    inputNumber.value > 100
    )
   {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});

btn.addEventListener("click", function () {

  container.textContent = "";

  btn.disabled = true;

  let userInput = parseInt(inputNumber.value);

  if (userInput >= 1 && userInput <= 100) {
    createSquare(userInput);
    currentGridSquare.textContent = `The current grid size is ${userInput} * ${userInput}. To change the grid size, Re-enter a number between 1 and 100 and click "Reset Grid".`
    clearGridMessage.textContent = `Want to start over? Click "Clear Grid" to clear all colors from the grid when hovering over grid.`;

  } else {
    currentGridSquare.textContent = "";
    clearGridMessage.textContent = "";
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
    erase.disabled = false;
  }

});

container.addEventListener("mouseleave", function (event) {

  if (!inputNumber.value) {

    event.target.style.backgroundColor = "";
  }
});

erase.addEventListener("click", function () {

  inputNumber.focus({ preventScroll: true });

  const squares = container.querySelectorAll(".square");

  squares.forEach(function (grid) {
    grid.style.backgroundColor = "";
    erase.disabled = true;
  });

});
