"use strict";

const dataFromLS = JSON.parse(localStorage.getItem("weekly-data"));
const weeksFromLS = JSON.parse(localStorage.getItem("weeks"));
const weekFromLS = JSON.parse(localStorage.getItem("week"));

const registrationSection = document.getElementById("registration-section");
const welcomeSection = document.getElementById("welcome-section");
const plantingSection = document.getElementById("planting-section");
const completedSection = document.getElementById("completed-section");

const registrationForm = document.getElementById("registration-form");
const plantingForm = document.getElementById("planting-form");

const startPlantingButton = document.getElementById("start-planting-button");

plantingForm.addEventListener("submit", submitWeeklyPlanting);

const registrationFormButton = document.getElementById(
  "registration-form-button"
);

let week = 1;
let weeks;

if (dataFromLS) {
  let prevData = [];

  for (let i = 0; i < dataFromLS.length; i++) {
    prevData.push(dataFromLS[i]);
  }

  while (data.length) {
    data.pop();
  }

  instantiateGroups();
  new Group(group);

  for (let i = 0; i < data.length; i++) {
    data[i].treesPerWeek = prevData[i].treesPerWeek;
  }

  weeks = weeksFromLS;
  week = weekFromLS;

  showPlantingSection();
} else {
  registrationSection.classList.remove("hidden");
}

console.log(data);
console.log(weeks);
console.log(week);

// All sections to be hidden to start. If there is LS data then make planting section visible. If there is no LS data then make registration section visible.
// Retrieve data from local storage
// As part of welcome statement feed back names of other groups. Save data to LS
// In planting section each week feed back total planted with encouraging statement.
// If number of weeks has been reached get new thank you for taking part section with total number of trees planted.

registrationForm.addEventListener("submit", handleRegistrationFormSubmit);

function handleRegistrationFormSubmit(e) {
  e.preventDefault();

  const groupName = document.getElementById("group-name");
  const numberOfWeeks = document.getElementById("number-of-weeks");

  group = groupName.value;
  weeks = numberOfWeeks.value;

  new Group(group);

  welcomeUser(group, weeks);

  registrationForm.reset();

  registrationSection.classList.add("hidden");

  welcomeSection.classList.remove("hidden");

  startPlantingButton.addEventListener("click", showPlantingSection);

  localStorage.setItem("weekly-data", JSON.stringify(data));
  localStorage.setItem("week", JSON.stringify(week));
  localStorage.setItem("weeks", JSON.stringify(weeks));
}

function welcomeUser(user, weeks) {
  const originalGroupArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].name !== group) {
      originalGroupArray.push(data[i].name);
    }
  }

  let originalGroups = "";

  for (let i = 0; i < originalGroupArray.length; i++) {
    if (i === 0) {
      originalGroups += `${originalGroupArray[0]}`;
    } else if (i === originalGroupArray.length - 1) {
      originalGroups += ` and ${
        originalGroupArray[originalGroupArray.length - 1]
      }.`;
    } else {
      originalGroups += `, ${originalGroupArray[i]}`;
    }
  }

  const welcomeMessage = document.getElementById("welcome-message");
  const welcomeP = document.createElement("p");
  welcomeP.textContent = `Welcome, ${user}! Thank you for signing up to the Green Leaves Scheme for ${weeks} weeks. The other groups in the scheme are ${originalGroups}`;
  welcomeMessage.appendChild(welcomeP);
}

function showPlantingSection() {
  welcomeSection.classList.add("hidden");
  document.getElementById(
    "planting-form-legend"
  ).textContent = `Tree Planting: Week ${week}`;
  document.getElementById(
    "trees-planted-label"
  ).textContent = `This week ${group} will plant: `;
  plantingSection.classList.remove("hidden");

  // plantingForm.addEventListener("submit", submitWeeklyPlanting);
}

function submitWeeklyPlanting(e) {
  e.preventDefault();

  console.log(data);

  weeklyTrees = parseInt(document.getElementById("trees-planted").value);
  for (let i = 0; i < data.length; i++) {
    data[i].addWeek();
  }
  week++;
  plantingForm.reset();

  document.getElementById(
    "planting-form-legend"
  ).textContent = `Tree Planting: Week ${week}`;

  localStorage.setItem("weekly-data", JSON.stringify(data));
  localStorage.setItem("week", JSON.stringify(week));
  localStorage.setItem("weeks", JSON.stringify(weeks));

  if (week > parseInt(weeks)) {
    showCompletedSection();
  }
}

function showCompletedSection() {
  let totalTrees = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === group) {
      totalTrees = data[i].treesPerWeek.reduce((a, b) => a + b, 0);
    }
  }
  plantingSection.classList.add("hidden");
  document.getElementById(
    "completed-message"
  ).textContent = `Thank you for joining the Green Leaves scheme. ${group} have planted a total of ${totalTrees} trees!`;
  completedSection.classList.remove("hidden");
}
