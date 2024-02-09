"use strict";

// Defining variables for all the btns
const btn = document.querySelectorAll(".show-modal");
const modal = document.querySelector("#popup-box");
const overlay = document.querySelector(".overlay");
const close_btn = document.querySelector(".close-modal");

// Adding event listner to all btns
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", showmodel);
}

// function to show the popup box
function showmodel() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  document.body.addEventListener("keydown", keyclosebox);
}

// function to close the box
function keyclosebox(e) {
  if (e.key === "Escape") {
    closebox();
  }
}

function closebox() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

close_btn.addEventListener("click", closebox);
