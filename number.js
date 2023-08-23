"use strict";

const comGuess = Math.floor(Math.random() * 100) + 1;

console.log(comGuess);

document.querySelector("button").addEventListener("click", clicked);

function clicked() {
  const guessInput = parseInt(document.querySelector("#guessInput").value);
  const result = document.querySelector("#result");

  if (guessInput === comGuess) {
    result.textContent = "Congratulations! You guessed the number.";
    result.classList.add("correct");
  } else if (guessInput > comGuess) {
    result.textContent = "Too high! Try again.";
    result.classList.remove("correct");
  } else if (guessInput < comGuess) {
    result.textContent = "Too low! Try again.";
    result.classList.remove("correct");
  }
}
