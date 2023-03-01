// 1.
// Create a function named getComputerChoice
// This function returns rock, paper or scissors randomly when the function gets called
// Crate an array
// Use Math functions to generate a random number to get the item from the array
// 2.
// The function should take two parameters: playerSelection and computerSelection
// Return a string that declares the winner of the round
// The input function should be case-insensitive
// Use if or switch to compare choices

// Variables
const listOfChoices = ["rock", "paper", "scissors"];
let playerScore = 0;
let playerSelection;
let computerSelection;

// Generate a random number then multiply it with the length of the list then round it to the floor
// If the list length is 3, then it will generate 1, 2 or 3.
function random(number) {
  return Math.floor(Math.random() * number);
}

function getComputerChoice() {
  return listOfChoices[random(listOfChoices.length)];
}

function upperFirstLetter(text) {
  return text[0].toUpperCase() + text.slice(1);
}

// Compares the given choices and gives back the result
// if the choices are equal, then it's a tie
// rock beats scissors
// scissors beats paper
// paper beats rock
// keeps track the user score
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    return `You Won! ${upperFirstLetter(
      playerSelection
    )} beats ${upperFirstLetter(computerSelection)}!`;
  } else {
    return `You Lose! ${upperFirstLetter(
      computerSelection
    )} beats ${upperFirstLetter(playerSelection)}!`;
  }
}

// 5 round game
// Asks user choice
// Input validation
// Generates computer choice
function game() {
  for (let i = 0; i < 5; i++) {
    while (true) {
      playerSelection = prompt("Please enter your choice: ").toLowerCase();
      if (listOfChoices.includes(playerSelection)) {
        break;
      } else {
        console.log("Wrong answer. Try it again. Rock, Paper or Scissor");
      }
    }
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Your score is ${playerScore} after round ${i + 1}`);
  }
  console.log(`The Game is Over. Your final score is ${playerScore}`);
}

game();
