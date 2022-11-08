'use strict';

const randomGuessNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

const gameLogicSuccess = () => {
  gameMessage.textContent = '🎉 Correct Number!';
  pageBody.style = 'background-color: Green';
  guessBox.textContent = box.toString();
  gameScore.textContent = score;
  btnGuessCheck.classList.add('hide');

  if (score > maxScore) {
    maxScore = score;
    gameHighScore.textContent = score;
  }
};

const gameLogicHigh = () => {
  gameMessage.textContent = '📈 Too high!';
  pageBody.style = 'background-color: #222';
  guessBox.textContent = '?';
  score--;
  gameScore.textContent = score;
};

const gameLogicLow = () => {
  gameMessage.textContent = '📉 Too low!';
  pageBody.style = 'background-color: #222';
  guessBox.textContent = '?';
  score--;
  gameScore.textContent = score;
};

const gameReset = () => {
  gameMessage.textContent = 'Start guessing...';
  pageBody.style = 'background-color: #222';
  score = 20;
  gameScore.textContent = score;
  guessBox.textContent = '?';
  box = randomGuessNumber(1, 20);
  playerGuess.value = '';
  btnGuessCheck.classList.remove('hide');
};
