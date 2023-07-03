"use strict";

const registrationForm = document.getElementById("registration-form");
const groupName = document.getElementById("group-name");
const welcomeSection = document.getElementById("welcome-section");

let group = "";

registrationForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  group = groupName.value;
  const userGroup = new Group(group);

  console.log(data);

  welcomeUser(group);

  registrationForm.reset();
}

function welcomeUser(user) {
  const welcomeP = document.createElement("p");
  welcomeP.textContent = `Welcome, ${user}! Thank you for signing up to the Green Leaves Scheme`;
  welcomeSection.appendChild(welcomeP);
}
