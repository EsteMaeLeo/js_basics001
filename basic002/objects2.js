//prevent change the elements in the objects
"use strict";
const product2 = {
  name: "Keyboard",
  price: 15,
  available: true,
};

Object.freeze( product2 );

//product2.available = false;
//product2.imagen = "imag.jpg";
console.log(product2);

console.log(Object.isFrozen(product2));