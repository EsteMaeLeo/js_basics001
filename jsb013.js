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

const funcionParametros = (mensaje) => console.log(mensaje)

miFucion();

miFuncionFlecha();
miFuncionFlecha2();

console.log(saludar());
console.log(regresaObjeto());
funcionParametros("saludo con paramentros");