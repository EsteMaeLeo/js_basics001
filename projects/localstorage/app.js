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

//get elements
const name = localStorage.getItem("name");
console.log(name);

const productStorage = localStorage.getItem("product");
console.log(productStorage);
console.log(JSON.parse(productStorage));

//delete elements
localStorage.removeItem("name");

//update elements
const monthsStorage = JSON.parse(localStorage.getItem("months"));
console.log(monthsStorage);

monthsStorage.push("April");
console.log(monthsStorage);
localStorage.setItem("months", JSON.stringify(monthsStorage));


//delete all localStorage.clear()
