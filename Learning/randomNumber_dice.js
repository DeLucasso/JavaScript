// Getting a random number - it's in range 0 0.99999 and never one */
// That's we multiply by 6 and round down to get 1-6 random whole number */
// And we add +1 because we don't want to get zero as output */ 

var r = Math.random();
var dice = 6 * r + 1;
var dice_number = Math.floor(dice);
console.log (dice_number)


// Same thing, just shortened :)
// Because we have a FLOOR function here,
// we have to add +1 to get results between 1 and 6
var dice_roll = Math.random() * 10 + 1;
console.log (Math.floor(dice_roll));
