// JavaScript trainings with LuCaS, www.instagram.com/lukasnachtigall/
// MIT License - Feel free to use and modify the code

// Love Calculator with IF, ELSE
// 1. prompt for name 1
// 2. prompt for name 1
// 3. print a random number in % from 1 to 100
// 4. alert this number along with two names, how they match :) (show it to user)
// 5. score above 70 gets Like Crazy , between 30 AND 70 like a LOVER, all others the alert message is "it's questionable".

var name1 = prompt("What's the first name of the couple?: ");
var name2 = prompt("What's the second name of the couple?: ");
var lovescore = Math.floor(Math.random() * 100 + 1);

if (lovescore > 70) {
    alert ("Your love score is " + lovescore + "%. " + name1 + " loves " + name2 + " like CRAZY!!!");
}  

if (lovescore >= 30 && lovescore < 70){
    alert ("Your love score is " + lovescore + "%. " + name1 + " loves " + name2 + " like a Lover!!!");

} else {
    alert ("Your love score is " + lovescore + "%. " + name1 + " loves " + name2 + " like a ..... Are you sure, you are still together???");
}
