//callback hell
const countries = [];

function newCountry(country, callback) {
  countries.push(country);
  console.log(`Added: ${country}`);
  callback();
}

function showCountries() {
  console.log(countries);
}

function initCallBackHell() {
  setTimeout(() => {
    newCountry("Germany", showCountries);
    setTimeout(() => {
      newCountry("UK", showCountries);
      setTimeout(() => {
        newCountry("Argentina", showCountries);
      }, 3000);
    }, 3000);
  }, 3000);
}

initCallBackHell();
