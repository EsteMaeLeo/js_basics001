//scope
console.log("---SCOPE---");

const client = "Charles";

function showClient() {
  const client = "William";
  console.log(client);
}

console.log(client);

showClient();

//hosting
console.log("---HOSTING---");

showClientFunction("Paul");
function showClientFunction(name) {
  console.log(`Client name is ${name}`);
}

const showNameExpresion = function (name) {
  console.log(`Client name is ${name}`);
};

showNameExpresion("Mike");

// coercion refers to the automatic conversion of data types
console.log("--coercion---");

const number1 = 20;
const number2 = "20";

console.log(number1 + number2);

console.log(Number(number2));

console.log(number1.toString());

const order = [1, 2, 3, 4];

console.log(order.toString());
console.log(JSON.stringify(order));

//Implicit binding
console.log("--Implicit binding---");

const user = {
  name: "Petter",
  age: 44,
  information() {
    console.log(`User name is ${this.name} and age is ${this.age}`);
  },
  pet: {
    name: "Firulais",
    age: 5,
    information() {
      console.log(`Pet name is: ${this.name}, age is ${this.age}`);
    },
  },
};

user.information();
user.pet.information();

//Explicit binding
console.log("--Explicit binding---");

function person(el1, el2) {
  console.log(`Name is ${this.name} and listen ${el1} and ${el2}`);
}

const info = {
  name: "Joseph",
};

const music = ["Metal", "Rock", "Progresive Rock"];

console.log("--Explicit binding using call---");
person.call(info, music[0], music[1]);

console.log("--Explicit binding using apply---");
//apply can use whole array
person.apply(info, music);

//bind create new function
console.log("--Explicit binding using bind---");
const newFn = person.bind(info, music[0], music[1]);
newFn();

console.log("--Explicit binding NEW BINDING---");

function Auto(model, color) {
  this.model = model;
  this.color = color;
}

const auto = new Auto("BMW", "White");
console.log(auto);

console.log("--Explicit binding WINDOW BINDING---");
//define GLOBAL WINDOW in the browser
window.color = "black";
function hello() {
  console.log(color);
}

hello();
