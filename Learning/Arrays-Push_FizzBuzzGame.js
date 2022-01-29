// JavaScript training with LuCaS, (c) LuCaS 2022
// IG: @LukasNachtigall/ GitHub: github.com/DeLucasso
// YT: youtube.com/lukasnachtigall
// MIT License - Feel free to use and modify the code
//
// What does this code do?
// Adds a number to array [output]. If the number is
// divisible by 3 inserts "Fizz", if is divisible by 5
// inserts "Buzz", if is divisible by 3 and 5, inserts "FizzBuzz"

var output = [];
var counter = 1;

function fizzBuzz() {
    
    if (counter % 3 === 0) {
        output.push("Fizz");
    }

    else if (counter % 5 === 0) {
        output.push("Buzz");
    }

    if (counter % 3 === 0 && counter % 5 === 0) {
        output.push("FizzBuzz");
    }

    else {
        output.push(counter);
  
    }

counter++;
console.log (output);  

}
