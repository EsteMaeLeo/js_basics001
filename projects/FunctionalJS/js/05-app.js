const carrito2 = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

const getNamesArrow = (p) => p.nombre;

const resultArrow = carrito2.map(getNamesArrow);

console.log("--ARROW MAP--");
console.log(resultArrow);

const mayor400Arrow = (p) => p.precio > 400;

const resultCarrito2 = carrito2.filter(mayor400);
console.log("--ARROW Filter--");
console.log(resultCarrito2);
