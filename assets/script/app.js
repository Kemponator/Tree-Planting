"use strict";

const data = [];

function Group(name) {
  this.name = name;
  this.treesPerWeek = [];
  data.push(this);
}

const yarmouth = new Group("yarmouth");
const norwich = new Group("norwich");
const halesworth = new Group("halesworth");
const southwold = new Group("southwold");

console.log(data);
