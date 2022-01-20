var price = prompt("How much cost 1 bottle?");
var bottles = prompt("How many milk bottles you want?");
var money = prompt("How much $ you gave to robot?");
var totalCost = bottles * price;
var afford = money / price;

function getMilk(bottles) {   
  alert("buy " + bottles + " of milk, and it will cost you " + "$" + totalCost );
  alert("You requested to buy " + bottles + " and the robot can afford " + afford);
}

getMilk(bottles);
