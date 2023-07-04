"use strict";

let bioVisible = false;
let bioButtonText;

const bioButtonFrances = document.getElementById("bio-button-frances");

bioButtonFrances.addEventListener("click", handleFrancesBioClick);

function handleFrancesBioClick() {
  const francesTopImage = document.getElementById("frances-top-image");
  if (!bioVisible) {
    bioButtonText = "read bio";
  } else {
    bioButtonText = "hide bio";
  }
  francesTopImage.classList.toggle("visible");
  francesTopImage.classList.toggle("hidden");
  bioButtonFrances.textContent = bioButtonText;
  //   bioVisible = !bioVisible ? bioVisible
}
