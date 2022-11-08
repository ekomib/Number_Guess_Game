'use strict';

const guessBox = document.querySelector('.number');
const playerGuess = document.querySelector('.guess');
const btnGuessCheck = document.querySelector('.check');
const gameMessage = document.querySelector('.message');
const pageBody = document.querySelector('body');
const gameScore = document.querySelector('.score');
const gameHighScore = document.querySelector('.highscore');
const resetGame = document.querySelector('.again');

let box;
box = randomGuessNumber(1, 20);
let score = 20;
let maxScore = 0;

btnGuessCheck.addEventListener('click', function (e) {
  e.preventDefault();
  if (Number(playerGuess.value) === box) {
    gameLogicSuccess();
  } else if (Number(playerGuess.value) > box) {
    gameLogicHigh();
  } else if (Number(playerGuess.value) < box) {
    gameLogicLow();
  }
});

resetGame.addEventListener('click', function (e) {
  e.preventDefault();
  gameReset();
});
