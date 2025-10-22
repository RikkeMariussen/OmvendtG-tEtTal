"use strict";

window.addEventListener("DOMContentLoaded", main);

const number = 42;

function main() {
    console.log("JavaScript kører!");
    
    document.querySelector("#start").addEventListener("click", startGame);

}

function startGame() {
    document.querySelector("#tooLow").addEventListener("click", guessTooLow);
    document.querySelector("#tooHigh").addEventListener("click", guessTooHigh);
    document.querySelector("#correct").addEventListener("click", correct);

    const firstGuess = 40;
    document.querySelector("#new_guess").innerText = firstGuess;
}

function guess() {
    guess = Math.floor(Math.random() * 101);
    return guess;
}

function guessTooLow() {
    const guess = 41;
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is too low</li>`
        )
    const newGuess = 43;
    document.querySelector("#new_guess").innerText = newGuess;
}

function guessTooHigh() {
    const guess = 43;
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is too high</li>`
        )

    const newGuess = 41;
    document.querySelector("#new_guess").innerText = newGuess;
}

function correct() {
    const guess = 42;
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is correct</li>`
        )
    document.querySelector("#tooLow").removeEventListener("click", guessTooLow);
    document.querySelector("#tooHigh").removeEventListener("click", guessTooHigh);
    document.querySelector("#correct").removeEventListener("click", correct);
}
