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