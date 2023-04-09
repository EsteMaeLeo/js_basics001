//prevent change the elements in the objects
"use strict";
const product2 = {
  name: "Keyboard",
  price: 15,
  available: true,
};
//cant add or delete properties or modify the values
Object.freeze(product2);

//product2.available = false;
//product2.imagen = "imag.jpg";
console.log(product2);

console.log(Object.isFrozen(product2));

const product3 = {
  name: "Keyboard",
  price: 15,
  available: true,
};

//you can modify the values but cant add or delete properties
Object.seal(product3);
product3.available = false;
console.log(product3);
console.log(Object.isSealed(product3));


