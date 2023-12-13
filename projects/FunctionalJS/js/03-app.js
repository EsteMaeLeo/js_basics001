const carrito3 = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Bocinas", precio: 300 },
  { nombre: "Laptop", precio: 800 },
];

const resultC1 = carrito3.filter((product) => {
  return product.precio > 400;
});

console.log(resultC1);

const mayor400 = (product) => {
  return product.precio > 400;
};

const resultC2 = carrito3.filter(mayor400);

console.log(resultC2);
