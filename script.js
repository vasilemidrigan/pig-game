// Strict mode
"use strict";

// Variables and constants
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const score0El = document.querySelector(".score-0");
const score1El = document.querySelector(".score-1");
const current0El = document.querySelector(".current-0");
const current1El = document.querySelector(".current-1");

const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

const diceIcon = document.querySelector(".dice");

// Start state
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

let scoreArr = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Switch player
const switchPlayer = function () {
  document.querySelector(`.current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
};
// Dice Roll
btnRoll.addEventListener("click", function () {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceIcon.src = `img/dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`.current-${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// Hold Score
btnHold.addEventListener("click", function () {
  scoreArr[activePlayer] += currentScore;
  document.querySelector(`.score-${activePlayer}`).textContent =
    scoreArr[activePlayer];
  if (scoreArr[activePlayer] >= 100) {
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add("player--winner");
    btnRoll.classList.add("button--inactive");
    btnHold.classList.add("button--inactive");
  } else {
    switchPlayer();
  }
});

// Reset game
btnNew.addEventListener("click", function () {
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  btnRoll.classList.remove("button--inactive");
  btnHold.classList.remove("button--inactive");

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scoreArr = [0, 0];
  currentScore = 0;
  activePlayer = 0;
});
