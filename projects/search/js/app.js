const result = document.querySelector("#resultado");
const year = document.querySelector("#year");

//get actual year
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

//events
document.addEventListener("DOMContentLoaded", () => {
  showCars();

  //fill opcion of years
  fillSelect();
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
  for (let i = maxYear; i >= minYear; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}
