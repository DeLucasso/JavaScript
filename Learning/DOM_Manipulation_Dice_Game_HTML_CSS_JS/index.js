// JavaScript training with LuCaS, (c) LuCaS 2022
// IG: @LukasNachtigall/ GitHub: github.com/DeLucasso
// YT: youtube.com/lukasnachtigall
// MIT License - Feel free to use and modify the code
//
// What does this code do? It's a manipulation with DOM
// in index.js

var roll = Math.random();
var randomNumber1 = Math.floor(roll * 6 + 1);

var roll2 = Math.random();
var randomNumber2 = Math.floor(roll2 * 6 + 1);
document.querySelector("img.img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src", "./images/dice"+randomNumber2+".png")


// Option 1:
// if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").innerHTML = "It's a DRAW!"
//   } else if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 WINS!"
//   } else if (randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "Player 2 WINS!"
// }


// Option 2 - Using a function
function getWinner(randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    return "It's a DRAW!"
  } else if (randomNumber1 > randomNumber2){
    return "Player 1 WINS!"
  } else if (randomNumber1 < randomNumber2){
    return "Player 2 WINS!"
  }
}

document.querySelector("h1").innerHTML = getWinner(randomNumber1, randomNumber2);
