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
  functionCallBack(`Resultado: ${res}`);
}

sumar(5, 9, imprimir);
