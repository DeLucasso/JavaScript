// JavaScript trainings with LuCaS, www.instagram.com/lukasnachtigall/
// MIT License - Feel free to use and modify the code

// Love Calculator with IF, ELSE
// 1. prompt for name 1
// 2. prompt for name 1
// 3. print a random number in % from 1 to 100
// 4. alert this number along with two names, how they match :) (show it to user)
// if it's more than 30%, print alert in IF block, if under 30%, print alert under ELSE block

var name1 = prompt("What's the first name of the couple?: ");
var name2 = prompt("What's the second name of the couple?: ");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) +1;
// we can shorten tho Same two lines to one line:
// var lovescore = Math.floor(Math.random() * 100 + 1);

if (lovescore > 30 ) {
alert ("Your love score is " + lovescore + ". " + name1 + "loves " + name2 + " like CRAZY!!!");
} else {
    alert ("The Love Match between " + name1 + " and " + name2 + " is " + lovescore + "%");
}


