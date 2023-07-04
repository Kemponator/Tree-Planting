"use strict";

let francesBioVisible = false;

const bioButtonFrances = document.getElementById("bio-button-frances");

bioButtonFrances.addEventListener("click", handleFrancesBioClick);

function handleFrancesBioClick() {
  if (francesBioVisible) {
    bioButtonFrances.textContent = "read bio";
    bioVisible = false;
  } else {
    bioButtonFrances.textContent = "hide bio";
    francesBioVisible = true;
  }
  const francesTopImage = document.getElementById("frances-top-image");

  francesTopImage.classList.toggle("visible");
  francesTopImage.classList.toggle("hidden");
}
