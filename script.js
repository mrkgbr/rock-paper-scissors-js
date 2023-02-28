// Create a function named getComputerChoice
// This function returns rock, paper or scissors randomly when the function gets called
// Crate an array
// Use Math functions to generate a random number to get the item from the array

const listOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return listOfChoices[Math.floor(Math.random() * listOfChoices.length)];
}

// Create a play function
// The function should take two parameters: playerSelection and computerSelection
// Return a string that declares the winner of the round
// The input function should be case-insensitive
function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return "It's a tie!"
  }
}

const playerSelection = prompt("Please enter your choice: ").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
