//object
const product_new2 = {
  name: "Keyboard",
  price: 15,
  available: true,
};

//object
const product_new3 = {
  name: "cellphone",
  price: 150,
  available: true,
};

const product_new4 = {
  name: "Monitor",
  price: 150,
  available: true,
};

//array
console.log("**********ARAYS*******************");
const numers = [10, 20, 30, [11, 23, 45]];

console.table(numers);

//access array
console.log(numers[2]);
console.log(numers[3]);
console.log(numers[3][1]);
//another way declare array
const meses = new Array("Enero", "Febrero", "Marzo");

//array with elment diferent types
const everyAll = ["Hello World", 20, false, "ABAP"];

console.log(everyAll);

const months = ["january", "february", "march", "april", "may"];
console.table(months);
console.log(months.length);

//add end array
months.push("june");

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

const shopingCar = [];

//add at end
shopingCar.push(product_new2);
shopingCar.push(product_new3);

//at the begining
shopingCar.unshift(product_new4);

console.table(shopingCar);

const shopingCar2 = [];

//declarative form to add elements
let resultSpread = [...shopingCar2, product_new2]
console.table(resultSpread);
console.table(shopingCar2);
//console.table(product_new2);

resultSpread = [...resultSpread, product_new3]
console.table(resultSpread);

resultSpread = [product_new4, ...resultSpread]
console.table(resultSpread);