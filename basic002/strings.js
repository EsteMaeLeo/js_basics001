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
console.log(productCon + " " + priceNew);
console.log(productCon, " ", priceNew);
//template literals
console.log(`Product: ${productCon} with price: ${priceNew}`);

const product_spaces = "          Monitor AOC          ";
console.log(product_spaces);
console.log("trim " + product_spaces.length);
console.log(product_spaces.trimStart());
console.log(product_spaces.trimEnd());
console.log(product_spaces.trimStart().trimEnd());
console.log(product_spaces.trim());

console.log("REPLACE, SLICE, SUBSTRING");
const productFunctions = "Monitor AOC 27 inches";

console.log(productFunctions);
console.log(productFunctions.replace("inches", '"'));
console.log(productFunctions.replace("Monitor", "Monitor LED"));

//slice
console.log(productFunctions.slice(0, 10));

//substring IF substring move value greater at second then put in reverse o did a validation
console.log(productFunctions.substring(0, 10));

const user1 = "John";
console.log(user1.substring(0, 1));
console.log(user1.charAt(0, 1));

//repeat
const productRepeat = "Monitor AOC 27 inches";
const text = "Sales ".repeat(3);
console.log(text);
console.log(`${productRepeat} ${text} !!!`);

//split
const activity = "Learning Javascript Dude!";
console.log(activity.split(" "));

const hobbies = "Read, Music, Soccer, Programming, TV";
console.log(hobbies.split(", "));

//upercase
console.log(hobbies.toLocaleUpperCase());
console.log(hobbies.toLocaleLowerCase());

const priceString = 300;
console.log(priceString);
console.log(priceString.toString());
