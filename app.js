"use strict";

const buttons = document.querySelectorAll(".btn");
const monitorRight = document.querySelector(".monitor-right");
const monitorLeft = document.querySelector(".monitor-left");

let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");
let drawScoreText = document.querySelector(".draw-score")
let message = document.querySelector(".message");
let winMessage = document.querySelector("h3");
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


function computerPlay() {
  // create an array that holds "rock", "paper", and "scissors"
  const options = ["ROCK", "PAPER", "SCISSORS"];

  // generate a random # between 0 and 2
  const randomNum = Math.floor(Math.random() * 3);

  // display choice on monitor
  monitorLeft.textContent = options[randomNum];

  // return choice from options using random number
  return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
  // transform playerSelection to lowercase
  let psUpperCase = playerSelection.toUpperCase();

  // stage outcom conditions
  const draw = "Round draw, No winner!";
  const playerLost = `Round lost ${computerSelection} beats ${psUpperCase}!`;
  const playerWin = `Round win ${psUpperCase} beats ${computerSelection}!`;

  monitorRight.textContent = psUpperCase;

  if (psUpperCase === "ROCK" && computerSelection === "PAPER") {
    computerScore++;
    return playerLost;
  }
  if (psUpperCase === "ROCK" && computerSelection === "SCISSORS") {
    playerScore++;
    return playerWin;
  }

  if (psUpperCase === "PAPER" && computerSelection === "ROCK") {
    playerScore++;
    return playerWin;
  }
  if (psUpperCase === "PAPER" && computerSelection === "SCISSORS") {
    computerScore++;
    return playerLost;
  }

  if (psUpperCase === "SCISSORS" && computerSelection === "PAPER") {
    playerScore++;
    return playerWin;
  }
  if (psUpperCase === "SCISSORS" && computerSelection === "ROCK") {
    computerScore++
    return playerLost;
  }

  drawScore++;
  return draw;
}

function checkWinner(playerScore, computerScore) {
  if(playerScore >= 5)
  {
    winMessage.classList.add("winColor");
    winMessage.textContent = "You WON the Game!!!";
    setTimeout(restartGame, 1500);
  }
  else if(computerScore >= 5){
    winMessage.classList.add("lostColor");
    winMessage.textContent = "You LOST the Game";
    setTimeout(restartGame, 1500);
  }
}

function restartGame() {
  winMessage.classList.remove("winColor");
  winMessage.classList.remove("lostColor");

  monitorRight.textContent = "";
  monitorLeft.textContent = "";

  playerScore = 0;
  computerScore = 0;
  drawScore = 0;

  playerScoreText.textContent = playerScore;
  computerScoreText.textContent = computerScore;
  drawScoreText.textContent = drawScore;

  message.textContent = "First to 5 wins! Click RPS buttons---> ";
}


// add click listeners to all button
for(let i = 0; i < buttons.length; i++){
  // when the player clicks a button
  buttons[i].addEventListener("click", function() {
      // store the button's text content as the player's selection
      playerSelection = this.textContent;

      // play round and update player feedback message
      message.textContent = playRound(playerSelection, computerPlay());

      // update score text
      playerScoreText.textContent = playerScore;
      computerScoreText.textContent = computerScore;
      drawScoreText.textContent = drawScore;


      checkWinner(playerScore, computerScore);
  });
}
