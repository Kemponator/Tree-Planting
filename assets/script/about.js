"use strict";

let francesBioVisible = false;
let samBioVisible = false;

const bioButtonFrances = document.getElementById("bio-button-frances");
const bioButtonSam = document.getElementById("bio-button-sam");

document.addEventListener("click", handleBioClick);

function handleBioClick(e) {
  const samTopImage = document.getElementById("sam-top-image");
  const francesTopImage = document.getElementById("frances-top-image");
  if (e.target.id === "bio-button-sam") {
    if (samBioVisible) {
      bioButtonSam.textContent = "read bio";
      samBioVisible = false;
    } else {
      bioButtonSam.textContent = "hide bio";
      samBioVisible = true;
    }
    samTopImage.classList.toggle("visible");
    samTopImage.classList.toggle("hidden");
  } else if (e.target.id === "bio-button-frances") {
    if (francesBioVisible) {
      bioButtonFrances.textContent = "read bio";
      francesBioVisible = false;
    } else {
      bioButtonFrances.textContent = "hide bio";
      francesBioVisible = true;
    }
    francesTopImage.classList.toggle("visible");
    francesTopImage.classList.toggle("hidden");
  }
}
