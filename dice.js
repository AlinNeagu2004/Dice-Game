var element = document.querySelector("#btn");

// all CSS styles
var styles_applied = window.getComputedStyle(element);

if (styles_applied.display === "none") {
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
  }
} else if (styles_applied.display === "inline-block") {
  rollDice();
}

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

  if (randomNumber1 === randomNumber2) {
    var draw = ["Refresh Me", "Refresh Me", "Draw!", "Draw!"];
    var counter = 0;
    var elem = document.querySelector("h1");
    var inst = setInterval(changeDraw, 1000);

    function changeDraw() {
      elem.innerHTML = draw[counter];
      counter++;
      if (counter >= draw.length) {
        counter = 0;
        // clearInterval(inst);
      }
    }
  } else if (randomNumber1 > randomNumber2) {
    var firstWinner = [
      "Refresh Me",
      "Refresh Me",
      "🚩 Player 1 Wins!",
      "🚩 Player 1 Wins!",
    ];
    var counter = 0;
    var elem = document.querySelector("h1");
    var inst = setInterval(changeFirstWinner, 1000);

    function changeFirstWinner() {
      elem.innerHTML = firstWinner[counter];
      counter++;
      if (counter >= firstWinner.length) {
        counter = 0;
        // clearInterval(inst);
      }
    }
  } else {
    var secondWinner = [
      "Refresh Me",
      "Refresh Me",
      "Player 2 Wins! 🚩",
      "Player 2 Wins! 🚩",
    ];
    var counter = 0;
    var elem = document.querySelector("h1");
    var inst = setInterval(changeSecondWinner, 1000);

    function changeSecondWinner() {
      elem.innerHTML = secondWinner[counter];
      counter++;
      if (counter >= secondWinner.length) {
        counter = 0;
        // clearInterval(inst);
      }
    }
  }
}
