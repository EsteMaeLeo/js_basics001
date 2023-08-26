const applyDiscount = new Promise((resolve, reject) => {
  const discount = true;

  if (discount) {
    resolve("Discount applied");
  } else {
    reject("Discount cant be applied");
  }
});

applyDiscount
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//console.log(applyDiscount)
//fulfilled promise
//reject promise
// pending not fulfilled or reject

const countries = [];

const newCountry = (country) =>
  new Promise((resolve) => {
    setTimeout(() => {
      countries.push(country);
      resolve(`Country added ${country}`);
    }, 2000);
  });

newCountry("Germany")
  .then((result) => {
    console.log(result);
    console.log(countries);
    return newCountry("France");
  })
  .then((result) => {
    console.log(result);
    console.log(countries);
    return newCountry("England");
  })
  .then((result) => {
    console.log(result);
    console.log(countries);
  });
