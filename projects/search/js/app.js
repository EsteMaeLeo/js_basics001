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
  showCars();

  //fill opcion of years
  fillSelect();
});

//event listner for the selects
marca.addEventListener("change", (e) => {
  dataSearch.marca = e.target.value;
  console.log(dataSearch);

  autofilter();
});

year.addEventListener("change", (e) => {
  dataSearch.year = e.target.value;
  console.log(dataSearch);
});

minimo.addEventListener("change", (e) => {
  dataSearch.minimo = e.target.value;
  console.log(dataSearch);
});

maximo.addEventListener("change", (e) => {
  dataSearch.maximo = e.target.value;
  console.log(dataSearch);
});

puertas.addEventListener("change", (e) => {
  dataSearch.puertas = e.target.value;
  console.log(dataSearch);
});

transmision.addEventListener("change", (e) => {
  dataSearch.transmision = e.target.value;
  console.log(dataSearch);
});

color.addEventListener("change", (e) => {
  dataSearch.color = e.target.value;
  console.log(dataSearch);
});

//functions
function showCars() {
  cars.forEach((car) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = car;
    const carHtml = document.createElement("p");
    carHtml.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
    result.appendChild(carHtml);
  });
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
function autofilter() {
  const result = cars.filter(filtercar);
  console.log(result)
}

function filtercar(car) {
  const { marca } = dataSearch;
  if (marca) {
    return car.marca === marca;
  }
  return car;
}
