//object
const product_new2 = {
  name: "Keyboard",
  price: 15,
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

const months = ["january", "february", "march", "april"];
console.table(months);
console.log(months.length);

for(let i =0; i<months.length; i++){
    console.log(months[i]);
}