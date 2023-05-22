localStorage.setItem("name", "Carl");

sessionStorage.setItem("name", "Rick");

const product = {
  name: "Laptop HP",
  price: 999,
};

const productString = JSON.stringify(product);
localStorage.setItem("product", productString);

const months = ["January", "February", "March"];
localStorage.setItem("months", JSON.stringify(months));


//get values

const name = localStorage.getItem('name');
console.log(name)

const productStorage = localStorage.getItem('product');
console.log(productStorage);
console.log(JSON.parse(productStorage));

const monthsStorage = JSON.parse(localStorage.getItem('months'))
console.log(monthsStorage);
