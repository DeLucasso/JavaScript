// Love Calculator
// 1. prompt for name 1
// 2. prompt for name 1
// 3. print a random number in % from 1 to 100
// 4. alert this number along with two names, how they match :) (show it to user)

var name1 = prompt("What's the first name of the couple?: ");
var name2 = prompt("What's the second name of the couple?: ");
var match = Math.floor(Math.random() * 101);
alert ("The Love Match between " + name1 + " and " + name2 + " is " + match + "%");
