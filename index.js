const CHOICES = ['Rock', 'Paper', 'Scissors'];

let playerName = prompt('What is your name?', 'Player');
let welcome = alert(`Welcome ${playerName}! Let's play Rock, Paper, Scissors!`);

let pcWins = 0;
let playerWins = 0;

let playerSelection = '';

let result = '';
let finalResult = '';

function getComputersChoice () {
  const randomNumber = Math.floor(Math.random() * 3);
  return CHOICES[randomNumber];
};

const buttons = document.querySelectorAll('.options');

buttons.forEach(button => 
  button.addEventListener('click', () => {
    playerSelection = button.id;
    const computersChoice = getComputersChoice();
    playRound(playerSelection, computersChoice);
  })
);

function playRound (playerSelection, computersChoice) {
  
  if (playerSelection !== '' && playerSelection === computersChoice) result = 'Tie! 👀';
  
  if (playerSelection === 'Rock') {
    if (computersChoice === 'Paper') {
      pcWins += 1;
      result = 'You Lose! Paper beats Rock ❌'; 
    } else if (computersChoice === 'Scissors') {
      playerWins += 1;
      result = 'You Win! Rock beats Scissors 👏'; 
    };
  };
  
  if (playerSelection === 'Paper') {
    if (computersChoice === 'Rock') {
      playerWins += 1;
      result = 'You Win! Paper beats Rock 👏';
    } else if (computersChoice === 'Scissors') {
      pcWins += 1;
      result = 'You Lose! Scissors beats Paper ❌';
    };
  };
  
  if (playerSelection === 'Scissors') {
    if (computersChoice === 'Rock') {
      pcWins += 1;
      result = 'You Lose! Rock beats Scissors ❌';
    } else if (computersChoice === 'Paper') {
      playerWins += 1;
      result = 'You Win! Scissors beats Paper 👏';
    };
  };

  const p1 = document.createElement('p');
  p1.textContent = `${playerName} selected: ${playerSelection}.`;
  
  const p2 = document.createElement('p');
  p2.textContent = `Computer selected: ${computersChoice}.`;
  
  const roundResult = document.createElement('h3');
  roundResult.textContent = result;
  
  const score = document.createElement('p');
  score.textContent = `Score: ${playerName}: ${playerWins} - PC: ${pcWins}`;
  
  const results = document.createElement('div');
  
  results.appendChild(p1);
  results.appendChild(p2);
  results.appendChild(roundResult);
  results.appendChild(score);
  
  document.body.appendChild(results);

  if (pcWins === 5 || playerWins === 5) {
    buttons.forEach(button => button.disabled = true);

    if (pcWins > playerWins) {
      finalResult = 'You Lost! ❌';
    } else if (pcWins < playerWins) {
      finalResult = 'You Won! 🏆';
    } else {
      finalResult = 'Tie! 👀';
    };
    
    const winner = document.createElement('h1');
    winner.textContent = finalResult;
    document.body.appendChild(winner);
  };
  
  return result;
};
