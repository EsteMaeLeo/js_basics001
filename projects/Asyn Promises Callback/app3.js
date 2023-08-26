const applyDiscount = new Promise((resolve, reject) => {
  const discount = true;

  if (discount) {
    resolve("Discount applied");
  } else {
    reject("Discount cant be applied");
  }
});

applyDiscount

console.log(applyDiscount)