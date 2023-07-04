"use strict";

let francesBioVisible = false;

const bioButtonFrances = document.getElementById("bio-button-frances");

bioButtonFrances.addEventListener("click", handleFrancesBioClick);

function handleFrancesBioClick() {
  if (francesBioVisible) {
    bioButtonFrances.textContent = "read bio";
    francesBioVisible = false;
  } else {
    bioButtonFrances.textContent = "hide bio";
    francesBioVisible = true;
  }
  const francesTopImage = document.getElementById("frances-top-image");

  francesTopImage.classList.toggle("visible");
  francesTopImage.classList.toggle("hidden");
}

let samBioVisible = false;

const bioButtonSam = document.getElementById("bio-button-sam");

bioButtonSam.addEventListener("click", handleSamBioClick);

function handleSamBioClick() {
  if (samBioVisible) {
    bioButtonSam.textContent = "read bio";
    samBioVisible = false;
  } else {
    bioButtonSam.textContent = "hide bio";
    samBioVisible = true;
  }
  const samTopImage = document.getElementById("sam-top-image");

  samTopImage.classList.toggle("visible");
  samTopImage.classList.toggle("hidden");
}
