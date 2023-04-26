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

const index2 = shopProducts.findIndex((product)=> product.name === "VGA Card");
console.log(index2);
