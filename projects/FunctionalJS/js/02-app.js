const suma2 = (a, b) => a + b;
const multiply = (a, b) => a * b;

const addMultiply = (fn) => fn(10, 20);

console.log(addMultiply(suma2));

console.log(addMultiply(multiply));