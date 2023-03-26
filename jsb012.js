//TRY CATCH manejo errores
"use strict";

try {
  //x = 10;
  mifunction();
} catch (error) {
  console.log(error);
} finally {
  console.log("terminamos la revision de errores");
}
console.log("continue....");

//throw send errores propios
try {
  let x = 10;
  throw "Mi error";
} catch (error) {
  console.log(error);
} finally {
  console.log("terminamos la revision de errores");
}

console.log("continue....");

let resultado = -1;

try {
  //x = 10;
  if (isNaN(resultado)) throw "No es numero";
  else if (resultado == "") throw "cadena vacia";
  else if (resultado < 0) throw "Valor negativo";
} catch (error) {
  console.log(error);
  //console.log(error.name);
  //console.log(error.message);
}
