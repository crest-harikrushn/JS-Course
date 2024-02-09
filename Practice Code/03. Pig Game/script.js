"use strict";

// =============================================================

// Generating variables for btns
let roll_btn = document.querySelector(".btn--roll");
let hold_btn = document.querySelector(".btn--hold");

// current score
let player1_current_score = document.querySelector("#current--0");
let p1_current_score = 0;
let player2_current_score = document.querySelector("#current--1");
let p2_current_score = 0;

// final score
let player1_final_score = document.querySelector("#score--0");
let p1_final_score = 0;
let player2_final_score = document.querySelector("#score--1");
let p2_final_score = 0;

// Boolian to control the turn of each player
let player1_turn = true;
let player2_turn = false;

// Cube Image
let cimg = document.querySelector(".dice");

// Reset
let newgame = document.querySelector(".btn--new");

// Elemets for changing color
let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

// State of the game
let playing = true;

// ============================================================

// Random number generator
function ramdomnum() {
  return Math.floor(Math.random() * 6 + 1);
}

//=============================================================

// function to roll a dice
function diceRoll() {
  if (playing) {
    // generate random num
    let num = ramdomnum();
    console.log(num);

    // changing image
    cimg.classList.remove("hidden");
    cimg.src = `dice-${num}.png`;

    // add the number to current score
    if (num != 1) {
      if (player1_turn) {
        p1_current_score += num;
      } else {
        p2_current_score += num;
      }
    }

    // change the player
    else {
      if (player1_turn) {
        player1.classList.remove("player--active");
        player2.classList.add("player--active");
        player1_turn = false;
        player2_turn = true;
        p1_current_score = 0;
      } else {
        player2.classList.remove("player--active");
        player1.classList.add("player--active");
        player1_turn = true;
        player2_turn = false;
        p2_current_score = 0;
      }
    }

    // update values
    player1_current_score.innerHTML = p1_current_score;
    player2_current_score.innerHTML = p2_current_score;
  }
}

// =============================================================

// hold the score and update the value
function holdscore() {
  // change the player and update final score
  if (playing) {
    if (player1_turn) {
      // change player
      player1_turn = false;
      player2_turn = true;

      // update final score
      p1_final_score += p1_current_score;
      player1_final_score.innerHTML = p1_final_score;

      // check for win
      if (p1_final_score >= 100) {
        player1.classList.add("player--winner");
        playing = false;
        return;
      }

      // reset current score
      p1_current_score = 0;

      // change background
      player1.classList.remove("player--active");
      player2.classList.add("player--active");
    } else {
      // change player
      player1_turn = true;
      player2_turn = false;

      // update final score
      p2_final_score += p2_current_score;
      player2_final_score.innerHTML = p2_final_score;

      // check for win
      if (p2_final_score >= 100) {
        player2.classList.add("player--winner");
        playing = false;
        return;
      }

      // reset current score
      p2_current_score = 0;

      // change background
      player2.classList.remove("player--active");
      player1.classList.add("player--active");
    }
    // update values
    player1_current_score.innerHTML = p1_current_score;
    player2_current_score.innerHTML = p2_current_score;
  }
}

function reset() {
  player1_turn = true;
  p1_current_score = 0;
  p2_current_score = 0;
  p1_final_score = 0;
  p2_final_score = 0;
  player1_current_score.innerHTML = p1_current_score;
  player2_current_score.innerHTML = p2_current_score;
  player1_final_score.innerHTML = p1_final_score;
  player2_final_score.innerHTML = p2_final_score;
  cimg.classList.add("hidden");
}

// Rolling a dice
roll_btn.addEventListener("click", diceRoll);

// Hold button
hold_btn.addEventListener("click", holdscore);

// new game or reset everything
newgame.addEventListener("click", reset);
