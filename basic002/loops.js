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
