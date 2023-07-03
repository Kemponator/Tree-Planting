"use strict";

const data = [];

function getRandomNumber() {
  return (Math.floor(Math.random() * 10) + 1) * 10;
}

let group = "";
let weeklyTrees;

function Group(name) {
  this.name = name;
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

const yarmouth = new Group("yarmouth");
const norwich = new Group("norwich");
const halesworth = new Group("halesworth");
const southwold = new Group("southwold");

console.log(data);
