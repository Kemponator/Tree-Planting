"use strict";

const existingGroups = ["yarmouth", "norwich", "halesworth", "southwold"];

const data = [];

// let week = 1;

function getRandomNumber() {
  return (Math.floor(Math.random() * 10) + 1) * 10;
}

let group = "";
let weeklyTrees;

function Group(name) {
  this.name = name[0].toUpperCase() + name.slice(1);
  this.treesPerWeek = [];
  data.push(this);
}

Group.prototype.addWeek = function () {
  if (this.name === group) {
    this.treesPerWeek.push(weeklyTrees);
  } else {
    this.treesPerWeek.push(getRandomNumber());
  }
};

function instantiateGroups() {
  for (let i = 0; i < existingGroups.length; i++) {
    new Group(existingGroups[i]);
  }
}

instantiateGroups();
