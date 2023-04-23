//function declarations able to call function before the definition

function add(number1, number2) {
  let result = number1 + number2;
  console.log(`Result: ${result}`);
}

add(2, 2);

//function expression you can call function before the definition

const add2 = function (number1, number2) {
  let result = number1 + number2;
  console.log(`Result: ${result}`);
};

add2(2, 5);

//difference method and function... method: name variable .nameMethod
const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //function parseInt
console.log(numero1.toString());

//Parameters in function and default parameters
function saidHello(name = "Unknown", lastname = "") {
  console.log(`Hello ${name} ${lastname}`);
}

saidHello("John", "Connor");
saidHello("Glen");
saidHello();

//function return values
function addReturn(number1, number2) {
  return number1 + number2;
}

const result = addReturn(94, 78);
console.log(result);
