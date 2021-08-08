// if (performance.getEntriesByType("navigation")[0].type === "reload") {
//   rollDice();
// }

var button = document.getElementById("roll-button");

function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceSource1 = "images/dice" + randomNumber1 + ".svg";
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomDiceSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceSource2 = "images/dice" + randomNumber2 + ".svg";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomDiceSource2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}

button.addEventListener("click", rollDice);
