// Create a function named getComputerChoice
// This function returns rock, paper or scissors randomly when the function gets called
// Crate an array
// Use Math functions to generate a random number to get the item from the array

listOfChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return listOfChoices[Math.floor(Math.random() * listOfChoices.length)];
}
