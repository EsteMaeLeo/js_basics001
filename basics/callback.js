//function callback
const miFucion1 = function () {
  console.log("Mensaje desde funcion #1");
};

const miFucion2 = function () {
  console.log("Mensaje desde funcion #2");
};

//callback function

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, functionCallBack) {
  let res = op1 + op2;
  //ejuctar procesos asincronico podria seguir ejecutando mientras callback
  functionCallBack(`Resultado: ${res}`);
}

sumar(5, 9, imprimir);

//async calls

function myFunctionCallBack() {
  console.log("saludo asincrono despues de 3 seg");
}

setTimeout(myFunctionCallBack, 3000); //ejecutar despues de 3 segundos

setTimeout(function () {
  console.log("Saludo async 2");
}, 4000);

setTimeout(() => console.log("Async 3"), 1000);

//setInterval
let reloj = () => {
  let fecha = new Date();
  let hours = fecha.getHours()
  console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
};

setInterval(reloj, 1000);
