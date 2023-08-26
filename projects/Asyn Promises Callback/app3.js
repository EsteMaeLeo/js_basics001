const applyDiscount = new Promise((resolve, reject) => {
  const discount = true;

  if (discount) {
    resolve("Discount applied");
  } else {
    reject("Discount cant be applied");
  }
});

applyDiscount
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })

//console.log(applyDiscount)
//fulfilled promise 
//reject promise 
// pending not fulfilled or reject