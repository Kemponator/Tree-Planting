"use strict";

// let week = 1;

// let group = "";
let weeks = 1;

const registrationForm = document.getElementById("registration-form");
// const welcomeMessage = document.getElementById("welcome-message");
const plantingForm = document.getElementById("planting-form");

const activatePlantingButton = document.getElementById(
  "activate-planting-button"
);

const registrationFormButton = document.getElementById(
  "registration-form-button"
);

registrationForm.addEventListener("submit", handleRegistrationFormSubmit);

function handleRegistrationFormSubmit(e) {
  e.preventDefault();

  const groupName = document.getElementById("group-name");
  const numberOfWeeks = document.getElementById("number-of-weeks");

  group = groupName.value;
  weeks = numberOfWeeks.value;

  new Group(group);

  console.log(data);

  welcomeUser(group, weeks);

  registrationForm.reset();

  registrationForm.classList.add("hidden");

  activatePlantingButton.classList.remove("hidden");

  activatePlantingButton.addEventListener("click", showPlantingForm);
}

function welcomeUser(user, weeks) {
  const welcomeMessage = document.getElementById("welcome-message");
  const welcomeP = document.createElement("p");
  welcomeP.textContent = `Welcome, ${user}! Thank you for signing up to the Green Leaves Scheme for ${weeks} weeks.`;
  welcomeMessage.appendChild(welcomeP);
}

function showPlantingForm() {
  document.getElementById("welcome-section").classList.add("hidden");
  document.getElementById(
    "planting-form-legend"
  ).textContent = `Tree Planting: Week ${week}`;
  document.getElementById(
    "trees-planted-label"
  ).textContent = `This week ${group} will plant: `;
  document.getElementById("planting-section").classList.remove("hidden");

  plantingForm.addEventListener("submit", submitWeeklyPlanting);
}

function submitWeeklyPlanting(e) {
  e.preventDefault();
  weeklyTrees = parseInt(document.getElementById("trees-planted").value);
  for (let i = 0; i < data.length; i++) {
    data[i].addWeek();
  }
  week++;
  plantingForm.reset();

  document.getElementById(
    "planting-form-legend"
  ).textContent = `Tree Planting: Week ${week}`;

  console.log(data);

  localStorage.setItem("weekly-data", JSON.stringify(data));
  localStorage.setItem("week", JSON.stringify(week));
}
