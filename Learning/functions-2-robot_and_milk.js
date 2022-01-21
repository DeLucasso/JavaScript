var price = prompt("How much cost 1 bottle?");
var bottles = prompt("How many milk bottles you want?");
var money = prompt("How much $ you gave to robot?");
var totalCost = bottles * price;
var afford = money / price;
var change = money - totalCost; 
var change1 = totalCost % money; /*We can use a remainder here*/

function getMilk(bottles) {   
  alert("OK, robot bought " + bottles + " of milk, and paid " + "$" + totalCost );
  alert("His change will be $" + change + " as return.");
  alert("Change using remainder will be " + change1);
  alert("You requested to buy " + bottles + " ,but the robot could afford " + Math.floor(afford) + " bottles!");
}

getMilk(bottles);
