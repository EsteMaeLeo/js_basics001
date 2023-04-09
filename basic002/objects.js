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

//copy objects
const product4 = {
  name: "Keyboard",
  price: 15,
  available: true,
};

const measure2 = {
  weight: "1kg",
  measure: "1m",
};

console.log(product4);
console.log(measure2);
const result = Object.assign(product4, measure2);
console.log(result);

//spread operator
const result2 = { ...product, ...measure2 };
console.log(result2);

//THIS reference the fields of the object
const product_this = {
  name: "Keyboard",
  price: 15,
  available: true,
  showInfo: function () {
    console.log(`Producto info: ${this.name} price ${this.price}`);
  },
};

product_this.showInfo();

//object literal
const product_literal = {
  name: "Keyboard",
  price: 15,
  available: true,
};

//object constructor

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.available = true;
}

const product_constructor = new Product("Tablet", 300);
console.log(product_constructor);

//object key return array with the key
console.log("object key")
console.log(Object.keys(product_literal));

//object values return array with the values
console.log("object values")
console.log(Object.values(product_literal));

//object entries return array all info of the objects
console.log("object entries")
console.log(Object.entries(product_literal));