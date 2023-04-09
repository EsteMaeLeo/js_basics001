console.log("Objects on JS");

//objects
//object literal
const product = {
  name: "Keyboard",
  price: 15,
  available: true,
};

//access each
console.log(product.name);
console.log(product.price);
console.log(product["name"]);

//add new propeties
console.log(product);
product.image = "image.jpg";
console.log(product);

delete product.available;
console.log(product);

console.log("destruction objects");
//const name = product.name;
//console.log(name);

const { name, price } = product;

console.log(name);
console.log(price);

//object inside other object

const product_inside = {
  name: "Keyboard",
  price: 15,
  available: true,
  information: {
    measure: { weight: "1kg", measure: "1m" },
    countryFrom: {
      country: "China",
    },
  },
};
console.log(product_inside);
console.log(product_inside.information);
console.log(product_inside.information.measure);
console.log(product_inside.information.countryFrom.country);

const { measure, countryFrom } = product_inside.information;
console.log(measure);


