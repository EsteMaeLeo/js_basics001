//Basics JavaScript
//variables
var nombre = "Leo";

console.log(nombre);

//reassign the value
nombre = 10;
console.log(typeof nombre);

var num = 100;
console.log(num);

var object = {
  name: "Carl",
  lastname: "Marxs",
  phone: "6157758907",
};
console.log(object);
console.log(typeof object);

//boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//function
function myfunction() {}
console.log(myfunction);
console.log(typeof myfunction);

//symbol
var symbol = Symbol("my symbol");
console.log(symbol);
console.log(typeof symbol);

//class
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.apellido = apellido;
  }
}

console.log(Person);
console.log(typeof Person);

//type undefine
var x;
console.log(x);
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);

// null

var y = null;
console.log(y);
console.log(typeof y);

var automovile = ["BMW", "Audi", "Volvo"];
console.log(automovile);
console.log(typeof automovile);

var z = "";
console.log(z);
console.log(typeof z);