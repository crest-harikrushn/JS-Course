"use strict";
// function to generate random number
function numgen() {
  let number = Math.round(Math.random() * 21);
  return number;
}

// generating references to classes
let dispalynum = document.querySelector(".number");
let highestscore = document.querySelector(".highscore");

// Generating random number
let num = numgen();
console.log(num);

// message field to be updated every time
let mssg = document.querySelector(".message");

// Score logic
let score = 20;
let currentscore = document.querySelector(".score");
currentscore.innerHTML = score;

// comparing number
function checkNum() {
  let input = Number(document.querySelector(".guess").value);
  if (input == "") {
    mssg.innerHTML = "Enter valid Input!!";
    return;
  }
  if (num === input) {
    document.body.style.backgroundColor = "green";
    mssg.innerHTML = "Correct Match!!";
    highestscore.innerHTML = score;
  } else if (num < input) {
    score--;
    document.body.style.backgroundColor = "#222";
    mssg.innerHTML = "too high";
  } else {
    score--;
    document.body.style.backgroundColor = "#222";
    mssg.innerHTML = "too low";
  }
  if (score < 0) {
    mssg.innerHTML = "Game Over";
  } else {
    dispalynum.innerHTML = input;
    let currentscore = document.querySelector(".score");
    currentscore.innerHTML = score;
  }
}

// check btn logic
let checkbtn = document.querySelector(".check");
checkbtn.addEventListener("click", checkNum);

// Again btn logic
let againbtn = document.querySelector(".again");
againbtn.addEventListener("click", reset);

function reset() {
  document.querySelector(".guess").value = "";
  mssg.innerHTML = "Start guessing...";
  currentscore.innerHTML = 20;
  highestscore.innerHTML = 0;
  dispalynum.innerHTML = "?";
  document.body.style.backgroundColor = "#222";
  score = 20;
}
