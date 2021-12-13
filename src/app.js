/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  giveMeThePassword();
};

function giveMeThePassword(student, house) {
  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  const housesAndPasswords = [
    { house: "Gryffindor", password: "a" },
    { house: "Slytherin", password: "b" },
    { house: "Ravenclaw", password: "c" },
    { house: "Hufflepuff", password: "d" }
  ];

  document.getElementById("heading").innerHTML = "Welcome to Hogwarts";
}
