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

function playRound (playerSelection, getComputersChoice) {
  if (playerSelection === getComputersChoice) result = 'Tie! 👀';
  
  if (playerSelection === 'rock') {
    if (getComputersChoice === 'paper') {
      pcWins += 1;
      result = 'You Lose! Paper beats Rock ❌'; 
    } else if (getComputersChoice === 'scissors') {
      playerWins += 1;
      result = 'You Win! Rock beats Scissors 👏'; 
    }
  }

  if (playerSelection === 'paper') {
    if (getComputersChoice === 'rock') {
      playerWins += 1;
      result = 'You Win! Paper beats Rock 👏';
    } else if (getComputersChoice === 'scissors') {
      pcWins += 1;
      result = 'You Lose! Scissors beats Paper ❌';
    }
  }

  if (playerSelection === 'scissors') {
    if (getComputersChoice === 'rock') {
      pcWins += 1;
      result = 'You Lose! Rock beats Scissors ❌';
    } else if (getComputersChoice === 'paper') {
      playerWins += 1;
      result = 'You Win! Scissors beats Paper 👏';
    }
  }

  console.log(`Player selected ${playerSelection}`);
  console.log(`Computer selected ${getComputersChoice}`);
  console.log(`Score: Player: ${playerWins} - PC: ${pcWins}`);
  alert(result);
  return result;
}
