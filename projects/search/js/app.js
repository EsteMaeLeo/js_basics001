const result = document.querySelector("#resultado");
const marca = document.querySelector("#marca");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const year = document.querySelector("#year");

//get actual year
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//generate search object
const dataSearch = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

//events
document.addEventListener("DOMContentLoaded", () => {
  showCars(cars);

  //fill opcion of years
  fillSelect();
});

//event listner for the selects
marca.addEventListener("change", (e) => {
  dataSearch.marca = e.target.value;
  console.log(dataSearch);

  carsFilter();
});

year.addEventListener("change", (e) => {
  dataSearch.year = e.target.value;
  console.log(dataSearch);

  carsFilter();
});

minimo.addEventListener("change", (e) => {
  dataSearch.minimo = e.target.value;
  console.log(dataSearch);
  carsFilter();
});

maximo.addEventListener("change", (e) => {
  dataSearch.maximo = e.target.value;
  console.log(dataSearch);
  carsFilter();
});

puertas.addEventListener("change", (e) => {
  dataSearch.puertas = e.target.value;
  //console.log(dataSearch);
  carsFilter();
});

transmision.addEventListener("change", (e) => {
  dataSearch.transmision = e.target.value;
  console.log(dataSearch);
  carsFilter();
});

color.addEventListener("change", (e) => {
  dataSearch.color = e.target.value;
  console.log(dataSearch);
  carsFilter();
});

//functions
function showCars(cars) {
  cleanHtml();
  cars.forEach((car) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = car;
    const carHtml = document.createElement("p");
    carHtml.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
    result.appendChild(carHtml);
  });
}

//clean HTML
function cleanHtml() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function fillSelect() {
  //generate year select
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

//function to filter by auto
function carsFilter() {
  const result = cars
    .filter(filterByCar)
    .filter(filterYear)
    .filter(filterMin)
    .filter(filterMax)
    .filter(filterDoor)
    .filter(filterTrans)
    .filter(filterColor);

  if (result.length) {
    showCars(result);
  } else {
    noResult();
  }
}

function noResult() {
  cleanHtml();
  const noResult = document.createElement("div");
  noResult.classList.add("alerta", "error");
  noResult.textContent =
    "No results with the search options. Try another options";
  result.appendChild(noResult);
}

//function check brand or marca and return only same
function filterByCar(car) {
  const { marca } = dataSearch; //destructuring for marca
  if (marca) {
    return car.marca === marca;
  }
  return car;
}

function filterYear(car) {
  const { year } = dataSearch;
  //conver to integer
  console.log(parseInt(year));
  console.log(car.year);
  if (year) {
    return car.year === parseInt(year);
  }
  return car;
}

function filterMin(car) {
  const { minimo } = dataSearch;

  if (minimo) {
    return car.precio >= parseInt(minimo);
  }
  return car;
}

function filterMax(car) {
  const { maximo } = dataSearch;

  if (maximo) {
    return car.precio <= parseInt(maximo);
  }
  return car;
}

function filterDoor(car) {
  const { puertas } = dataSearch;
  if (puertas) {
    return car.puertas === parseInt(puertas);
  }
  return car;
}

function filterTrans(car) {
  const { transmision } = dataSearch;
  if (transmision) {
    return car.transmision === transmision;
  }
  return car;
}

function filterColor(car) {
  const { color } = dataSearch;
  if (color) {
    return car.color === color;
  }
  return car;
}
