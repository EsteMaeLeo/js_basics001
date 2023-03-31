//Arrow functions
const miFucion = function () {
  console.log("Mensaje desde funcion");
};

const miFuncionFlecha = () => {
  console.log("Mensaje desde funcion flecha");
};

const miFuncionFlecha2 = () => console.log("Mensaje desde funcion flecha #2");

const saludar = () => "Saludos desde function flecha";

const regresaObjeto = () => ({ nombre: "Juan", apellido: "Perez" });

//const funcionParametros = (mensaje) => console.log(mensaje)
const funcionParametros = (mensaje) => console.log(mensaje);

const funcionSuma = (a, b) => a + b;

miFucion();

const listOfNumbers = [];

const storeNumber = (num) => listOfNumbers.push(num);
storeNumber(2)
console.log(listOfNumbers)


miFuncionFlecha();
miFuncionFlecha2();

console.log(saludar());
console.log(regresaObjeto());
funcionParametros("saludo con paramentros");

console.log(funcionSuma(19, 8));
