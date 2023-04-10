const producto = "Monitor HP 20";
const producto2 = String("Monitor HP 20");
const producto3 = new String("Monitor HP 20");

console.log("Strings");
console.log(producto);
console.log(producto2);
console.log(producto3);

//lenght

console.log("Lenght: ", producto.length);

//index of find
console.log("Index of: ", producto.indexOf("HP"));

//includes return boolean
console.log("Includes: ", producto.includes("HP"));

const productCon = "Monitor AOC";
const priceNew = "200 USD";

console.log(productCon.concat(" ", priceNew));
