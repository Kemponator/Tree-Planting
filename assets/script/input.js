"use strict";

const dataFromLS = JSON.parse(localStorage.getItem("weekly-data"));
const weeksFromLS = JSON.parse(localStorage.getItem("weeks"));
const weekFromLS = JSON.parse(localStorage.getItem("week"));
const groupFromLS = JSON.parse(localStorage.getItem("group"));

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

  weeks = weeksFromLS;
  week = weekFromLS;
  group = groupFromLS;

  instantiateGroups();
  new Group(group);

  for (let i = 0; i < data.length; i++) {
    data[i].treesPerWeek = prevData[i].treesPerWeek;
  }

  showPlantingSection();
} else {
  registrationSection.classList.remove("hidden");
}

// console.log(data);
// console.log(weeks);
// console.log(week);

registrationForm.addEventListener("submit", handleRegistrationFormSubmit);

function handleRegistrationFormSubmit(e) {
  e.preventDefault();

  const groupName = document.getElementById("group-name");
  const numberOfWeeks = document.getElementById("number-of-weeks");

  group = groupName.value[0].toUpperCase() + groupName.value.slice(1);
  weeks = numberOfWeeks.value;

  new Group(group);

  welcomeUser(group, weeks);

  registrationForm.reset();

  registrationSection.classList.add("hidden");

  welcomeSection.classList.remove("hidden");

  startPlantingButton.addEventListener("click", showPlantingSection);

  saveToLocalStorage();
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
  const welcomeH3 = document.createElement("h3");
  welcomeH3.textContent = `Welcome, ${user}! Thank you for signing up to the Green Leaves Scheme for ${weeks} weeks. The other groups in the scheme are ${originalGroups}`;
  welcomeMessage.appendChild(welcomeH3);
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

  saveToLocalStorage();

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
  const completedMessage = document.getElementById("completed-message");
  const completedH3 = document.createElement("h3");
  completedH3.textContent = `Thank you for taking part in the Green Leaves scheme. ${group} have planted a total of ${totalTrees} trees!`;
  completedMessage.appendChild(completedH3);
  completedSection.classList.remove("hidden");
}

function saveToLocalStorage() {
  localStorage.setItem("weekly-data", JSON.stringify(data));
  localStorage.setItem("week", JSON.stringify(week));
  localStorage.setItem("weeks", JSON.stringify(weeks));
  localStorage.setItem("group", JSON.stringify(group));
}
