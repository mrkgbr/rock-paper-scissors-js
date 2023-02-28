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
// Use if or switch to compare choices
// if the choices are equal, then it's a tie
// rock beats scissors
// scissors beats paper
// paper beats rock
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++
    return "You Won! Rock beats Scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++
    return "You Won! Scissors beats Paper!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++
    return "You Won! Paper beats Rock!";
  } else {
    computerSelection =
      computerSelection[0].toUpperCase() + computerSelection.slice(1);
    playerSelection =
      playerSelection[0].toUpperCase() + playerSelection.slice(1);
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

let playerScore = 0

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Please enter your choice: ").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score is ${playerScore} after round ${i + 1}`)
  }
  console.log(`The Game is Over. Your final score is ${playerScore}`)
}

game()