"use strict";
const createBtn = document.querySelector("#create");
const shapeSelect = document.querySelector("#shape");
const colorSelect = document.querySelector("#color");

const grid = document.querySelector("#shape-grid");
const display = document.querySelector(".output-text");

class Shape {
  #name;
  #color;
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  set name(name) {
    this.#name = name;
  }

  set color(color) {
    this.#color = color;
  }

  get name() {
    return this.#name;
  }

  get color() {
    return this.#color;
  }

  getInfo() {
    return `${this.#name} ${this.#color}`;
  }
}

function colorCheck(color) {
  if (color == "blue") return "#09f";
  if (color == "green") return "#9f0";
  if (color == "orange") return "#ffa500";
  if (color == "pink") return "#ff1493";
  if (color == "purple") return "#800080";
}

let list = [];
let count = 0;
createBtn.addEventListener("click", function () {
  count++;
  if (count >= 25) {
    display.innerText = "Reached max amount of shapes";
    return;
  }

  const newShape = new Shape(shapeSelect.value, colorSelect.value);
  list.push(newShape);

  const newDiv = document.createElement("div");
  newDiv.classList.add(newShape.name);
  newDiv.style.backgroundColor = colorCheck(newShape.color);
  newDiv.onclick = function () {
    display.innerText = `Unit ${
      list.indexOf(newShape) + 1
    }: ${newShape.getInfo()}`;
  };
  grid.append(newDiv);
});
