"use strict";

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function computerPlay() {
  // create an array that holds "rock", "paper", and "scissors"
  const options = ["rock", "paper", "scissors"];

  // generate a random # between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // display choice on monitor
  computerSide.textContent = options[randomNum];

  // return choice from options using random number
  return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
  // transform playerSelection to lowercase
  let psLowerCase = playerSelection.toLowerCase();

  // stage outcom conditions
  const draw = "Round draw, No winner!";
  const playerLost = `You lose ${computerSelection} beats ${psLowerCase}!`;
  const playerWin = `You won ${psLowerCase} beats ${computerSelection}!`;

  playerSide.textContent = psLowerCase;

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
  }
}

// add click listeners to all button
const buttons = document.querySelectorAll(".btn");
const playerSide = document.querySelector(".player-side");
const computerSide = document.querySelector(".computer-side");

let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");
let drawScoreText = document.querySelector(".draw-score")
let playerSelection;

for(let i = 0; i < buttons.length; i++){
  // when the player clicks a button
  buttons[i].addEventListener("click", function() {
      // store the button's text content as the player's selection
      playerSelection = this.textContent;

      playRound(playerSelection, computerPlay());


      // update score text
      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
      drawScoreText.textContent = drawScore;
  });
}
