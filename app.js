"use strict";

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function computerPlay() {
  // create an array that holds "rock", "paper", and "scissors"
  const options = ["rock", "paper", "scissors"];

  // generate a random # between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // return choice from options using random number
  return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
  // transform playerSelection to lowercase
  let psLowerCase = playerSelection.toLowerCase();
  const draw = "Round draw, No winner!";
  const playerLost = `You lose ${computerSelection} beats ${psLowerCase}!`;
  const playerWin = `You won ${psLowerCase} beats ${computerSelection}!`;

  console.log(`Player: ${psLowerCase}, Computer: ${computerSelection}\n`);

  if (psLowerCase === "rock" && computerSelection === "paper") {
    computerScore++;
    return playerLost;
  }
  if (psLowerCase === "rock" && computerSelection === "scissors") {
    playerScore++;
    return playerWin;
  }

  if (psLowerCase === "paper" && computerSelection === "rock") {
    playerScore++;
    return playerWin;
  }
  if (psLowerCase === "paper" && computerSelection === "scissors") {
    computerScore++;
    return playerLost;
  }

  if (psLowerCase === "scissors" && computerSelection === "paper") {
    playerScore++;
    return playerWin;
  }
  if (psLowerCase === "scissors" && computerSelection === "rock") {
    computerScore++
    return playerLost;
  }

  drawScore++;
  return draw;
}

function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("rock, paper, or scissors?");
    console.log(playRound(playerSelection, computerPlay()));
  }

  console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}\nDraws: ${drawScore}`);
}
