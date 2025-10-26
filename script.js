"use strict";

window.addEventListener("DOMContentLoaded", main);

//Variablerne bliver ikke sat her, da de skal kunne ændres ved start af spillet på
let guess; //Aka "middle"
let min;
let max;
let count;

function main() {
    console.log("JavaScript kører!");
    document.querySelector("#start").addEventListener("click", startGame);
}

function startGame() {
    min = 0;
    max = 100;
    count = 0;
    calculateGuess();
    document.querySelector("#tooLow").addEventListener("click", guessTooLow);
    document.querySelector("#tooHigh").addEventListener("click", guessTooHigh);
    document.querySelector("#correct").addEventListener("click", correct);
}

function calculateGuess() {
    guess = Math.floor(max-((max-min)/2));
    count++;
    document.querySelector("#new_guess").innerText = guess;
}

function guessTooLow() {
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is too low</li>`
        )
    //Gættet er for lavt, så vi sætter min til vores gæt + 1, da vi ved at vores gæt var forkert og ikke længere indgår i mulighederne
    min = guess+1;
    calculateGuess();
}

function guessTooHigh() {
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is too high</li>`
        )
    //Gættet er for højt, så vi sætter max til vores gæt - 1, da vi ved at vores gæt var forkert og ikke længere indgår i mulighederne
    max = guess-1;
    calculateGuess();
}

function correct() {
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed: ${guess} - It is correct</li>`
        )
    let comment;
    if(count < 3){
        comment = "Damn, I'm good!";
    }
    if(count > 3 && count < 6){
        comment = "Well, I am bit slow today!";
    }  
    if(count >= 7){
        comment = "Hmmm today is not my day.. I will try again tomorrow!";
    }  
    document.querySelector("#computer_guesses").insertAdjacentHTML("beforeend",
        `<li>The computer guessed it in ${count} number of guesses - ${comment}</li>`
        )
    document.querySelector("#tooLow").removeEventListener("click", guessTooLow);
    document.querySelector("#tooHigh").removeEventListener("click", guessTooHigh);
    document.querySelector("#correct").removeEventListener("click", correct);
}