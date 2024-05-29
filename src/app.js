/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "Vincent Van Gogh ",
    "Pablo Picasso ",
    "Claude Monet",
    "Francisco de Goya"
  ];
  let action = ["destroyed", "burned", "crack", "exterminated"];
  let what = ["my carrer", "my fayth", "my hope", "my empire"];
  let when = [
    " in my wedding",
    " in my prime",
    "in my decadence",
    " in my free day"
  ];

  const generateExcuse = () => {
    let randomdecimal = Math.random();
    let indicewho = Math.floor(randomdecimal * who.length);
    let indiceaction = Math.floor(randomdecimal * action.length);
    let indicewhat = Math.floor(randomdecimal * what.length);
    let indicewhen = Math.floor(randomdecimal * when.length);

    let wordwho = who[indicewho];
    let wordaction = action[indiceaction];
    let wordwhat = what[indicewhat];
    let wordwhen = when[indicewhen];

    let sentence = wordwho + " " + wordaction + " " + wordwhat + " " + wordwhen;

    return sentence;
  };

  document.querySelector("#excuse").innerHTML = generateExcuse();
};
