const choices = ['rock', 'paper', 'scissors'];
let playerName = '';
let pcWins = 0;
let playerWins = 0;
let result = '';
let finalResult = '';

function getComputersChoice () {
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playerSelection () {
  const playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
  return playerChoice;
}

