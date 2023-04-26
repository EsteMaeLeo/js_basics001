const months = ["january", "february", "march", "april", "may", "june", "july"];

const shopProducts = [
  { name: "Iphone", price: 750 },
  { name: "VGA Card", price: 250 },
  { name: "Mouse", price: 50 },
  { name: "Ipad", price: 750 },
  { name: "HP Monitor 22", price: 350 },
];

months.forEach((month) => {
  if (month === "january") {
    console.log("January contain in the array");
  }
});

//INCLUDE and SOME check if the value is contain in the array
const result = months.includes("january");
console.log(result);

//in array of object you have to use .some

const exist = shopProducts.some((product) => product.name === "Iphone");
console.log(exist);

const exist2 = months.some((month) => month === "january");
console.log(exist2);

//FIND INDEX

//before
months.forEach((month, index) => {
  if (month === "april") {
    console.log(`January on index: ${index}`);
  }
});

const index = months.findIndex((month) => month === "april");
//NOT FOUND return -1
console.log(index);

const index2 = shopProducts.findIndex((product) => product.name === "VGA Card");
console.log(index2);

//REDUCE
//Before
let total = 0;
shopProducts.forEach((product) => (total += product.price));
console.log(total);
//previous value Total and actual value product, initial in 0
let totalPay = shopProducts.reduce(
  (total, product) => total + product.price,
  0
);
console.log(totalPay);

//FILTER new array with the condition you are checking
let resultadoFilter = shopProducts.filter((product) => product.price > 300);
console.log(resultadoFilter);
resultadoFilter = shopProducts.filter((product) => product.price < 300);
console.log(resultadoFilter);

resultadoFilter = shopProducts.filter((product) => product.name !== "Ipad");
console.log(resultadoFilter);

//FIND create new array with the condition Return the first Element meets criteria.
//before

let resultFind = "";
shopProducts.forEach((product, index) => {
  if (product.name === "HP Monitor 22") {
    resultFind = shopProducts[index];
  }
});

console.log(resultFind);

resultFind = shopProducts.find((product) => product.name == "HP Monitor 22");
console.log(resultFind);

//EVERY all elements in the array need meet the criteria to return true
//ALL full meet
let resultEvery = shopProducts.every((product) => product.price < 1000);
console.log(resultEvery);

//With some is like OR
//compare first using every will return false when compare less 200
resultEvery = shopProducts.every((product) => product.price < 200);
console.log(resultEvery);
//Now with some will return TRUE
resultEvery = shopProducts.some((product) => product.price < 200);
console.log(resultEvery);

//CONCAT

const months2 = ["august", "september", "octuber"];
const months3 = ["november", "december"];

const monthConcat = months.concat(months2, months3);
console.log(monthConcat);

//with spread YOU NOT CHANGE ORIGINAL ARRAY
const resultSpread = [...months, ...months2, ...months3];
console.log(resultSpread);

const mSpread1 = [...months, "august"];
console.log(mSpread1);

//split vs spread
const newWord = "word";
const stringArray = newWord.split("");
console.log(stringArray);
const spreadWord = [...newWord];
console.log(spreadWord);

const newProduct = { name: "Hard Drive", price: 100 };
const newS2 = [...shopProducts, newProduct];
console.log(newS2);
