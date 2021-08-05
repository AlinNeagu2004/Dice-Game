var randomNumber1 = Math.random;
randomNumber1 = Math.floor(Math.random() * 6 + 1);

document.querySelector("body").setAttribute("onload", "diceeGame();");

function diceeGame() {
  if (randomNumber1 === 1) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
  }
  else if (randomNumber1 === 2) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
  }
  else if (randomNumber1 === 3) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
  }
  else if (randomNumber1 === 4) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
  }
  else if (randomNumber1 === 5) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
  }
  else if (randomNumber1 === 6) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
  }  
}