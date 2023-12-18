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
