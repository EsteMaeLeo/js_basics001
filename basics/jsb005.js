//Array and functions
//Array
//clasic definition not recomended
let autos = new Array("BMW", "Mercedes Benz", "Volvo");

//Recomended way
const car = ["BMW", "Mercedes Benz", "Volvo"];
console.log(car);

//access by index
console.log(car[0]);

for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

car[1] = "MercedesBenz";
console.log(car[1]);

car.push("Volkswagen");
console.log(car);
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}
console.log(car.length);
car[car.length] = "Cadillac";
console.log(car);

//check if is array

console.log(Array.isArray(car));
console.log(car instanceof Array);

//*************...........functions.............**********
//hoisting when you can call function before the definition
function myFunction(a, b) {
  return a + b;
}

let adding = myFunction(5, 5);
console.log(adding);

//function typeself invoking but only will be call one time

(function (a, b) {
  console.log("excuting the function " + (a + b));
})(3, 2.1);

//function type objects
console.log(typeof myFunction);

function myFunction2(a, b) {
  console.log(arguments.length);
  return a + b;
}

let xy = myFunction2(10, 20);
// can convert to string function
let miFunctionText = myFunction2.toString();
console.log(miFunctionText);

//function type expresion you can assign defaults values
let sumar = function (a = 4, b = 6) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
  return a + b;
};

let resultado = sumar(4, 4);
console.log(resultado);

//not passing values
resultado = sumar();
console.log(resultado);

//you can pass more arguments
resultado = sumar(4, 4, 9);
console.log(resultado);

//Arrow Function
const sumarFunctionArrow = (a, b) => a + b;
resultado = sumarFunctionArrow(3, 9);
console.log(resultado);

//
let result2 = sumarTodo(5, 4, 13, 10, 9, 41);
console.log(result2);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += arguments[i]; //suma = suma + arguments[i]
  }
  return suma;
}

//pass by value
//primitive types
let x = 10;

function cambiaValor(a) {
  a = 20;
}
//X pass a copy of the value 10 only pass the value but only change is done in the variable a
cambiaValor(x);
console.log(x);

// pass by reference
const persona = {
  nombre: "John",
  apellido: "William",
};

function cambiarValorObjeto(p1) {
  p1.nombre = "Steph";
  p1.apellido = "Vives";
}

console.log(persona);
cambiarValorObjeto(persona);
console.log(persona);


