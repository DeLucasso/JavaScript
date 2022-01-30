var guys = ["Tomas","John", "Dan", "Laura", "Sandra"];

function whosPayiing(){

var total_guys = guys.length;
var random_num = Math.random();
var result = Math.floor((total_guys * random_num + 1));
var youPay = " is going to buy lunch today!"

if (result === 0) {
    result++;

} else if (result > total_guys) {
    result--;

} else {

return (guys[result]+ " " + result) + youPay;
}
}
