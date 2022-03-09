// This is a Constructor Function, must start with CapitalLetter! :
// "this" takes the input and assigns it to the parameter variable
function HouseKeeper (name, years, age) {
  this.name = name;
  this.years = years;
  this.age = age;
};

// To initialize function :
var houskeeper1 = new HouseKeeper ('Lukas, 25, 30');
