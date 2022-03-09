// This is a Constructor Function, must start with CapitalLetter! :
// "this" takes the input and assigns it to the parameter variable
function HouseKeeper (name, years, age) {
  this.name = name;
  this.years = years;
  this.age = age;
};

// To initialize function :
var houskeeper1 = new HouseKeeper ('Lukas, 25, 30');


// Now extend the constructor function of a Method
function HouseMaid (name, age, skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
  this.extraMethod = function () {
    alert("Cleaning in progress...");
    }
}

var houseMaid1 = new HouseMaid("Dean", 23, ["washing", "dusting", "vacuuming"])
