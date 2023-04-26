//for
for (let i = 0; i < 11; i++) {
  if (i % 2 == 0) {
    console.log(`Number: ${i} is pair`);
  }
}

const newShoppingEbay = [
  { name: "Google Pixel", price: 750 },
  { name: "Nvidia 2070 GT", price: 250 },
  { name: "Mouse HP", price: 50, discount: true },
  { name: "Ipad", price: 750 },
  { name: "LG Monitor 32", price: 350 },
];

for (let i = 0; i < newShoppingEbay.length; i++) {
  console.log(`${newShoppingEbay[i].name} price: ${newShoppingEbay[i].price}`);
}

//break
for (let i = 0; i < 10; i++) {
  if (i == 4) {
    console.log(`Break at Number: ${i}`);
    break;
  }
  console.log(i);
}
//continue
for (let i = 0; i < 10; i++) {
  if (i == 6) {
    console.log(`Continue at Number: ${i}`);
    continue;
  }
  console.log(i);
}

for (let i = 0; i < newShoppingEbay.length; i++) {
  if (newShoppingEbay[i].discount) {
    console.log(
      `**PRODUCT DISCOUNT*** ${newShoppingEbay[i].name} price: ${newShoppingEbay[i].price}`
    );
    continue;
  }
  console.log(`${newShoppingEbay[i].name} price: ${newShoppingEbay[i].price}`);
}

//FIZZBUZZ || 3 % 0 == Fizz 5%0 ==BUZZ 3 and 5 FIZZBUZZ
for (let i = 1; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`${i} FIZZBUZZ`);
  } else if (i % 3 == 0) {
    console.log(`${i} FIZZ`);
  } else if (i % 5 == 0) {
    console.log(`${i} BUZZ`);
  }
}

//WHILE
let i = 0;
while (i < 10) {
  //condition
  console.log(`number: ${i}`);
  i++;
}

//DO WHILE
i = 0;
do {
  console.log(`number: ${i}`);
  i++;
} while (i < 10); //condition a least one time do the loop

//FOR EACH array a least execute acording number elements in the array
const tasks = ["Homework", "Eat", "Development", "Coding JS"];

tasks.forEach((task, index) => {
  console.log(`${index} ${task}`);
});

newShoppingEbay.forEach((product) => {
  console.log(product.name);
});

//MAP return new array
const newShopProducts = newShoppingEbay.map((product) => product.name);
console.log(newShopProducts);

//FOR OF
for (let task of tasks) {
  console.log(task);
}

for (let product of newShoppingEbay) {
  console.log(product.name);
}

//FOR IN is use in OBJECTS

const car = {
  model: "Audi A4",
  year: 2023,
  engine: 2.5,
};

for (let properties in car) {
  console.log(`${car[properties]}`);
}

for (let [key, value] of Object.entries(car)) {
  console.log(value);
  console.log(key);
}

