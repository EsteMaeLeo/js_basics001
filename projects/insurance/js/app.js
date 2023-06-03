//constructor

function Insurance(model, year, type) {
  (this.model = model), (this.year = year);
  this.type = type;
}

Insurance.prototype.insuranceQuote = function () {
  // Option 1= American 1.15; 2 = Asian 1.05; 3 = Europe 1.35
  let quantity;
  const base = 2000;
  console.log(this.model);
  switch (this.model) {
    case "1":
      quantity = base * 1.15;
      break;
    case "2":
      quantity = base * 1.05;
      break;
    case "3":
      quantity = base * 1.35;
      break;
    default:
      break;
  }
  console.log(quantity);
  const readYear = document.querySelector("#year").value;
  console.log(readYear);
  //for each year difference between actual year and the car year reduce 3%
  const difference = new Date().getFullYear() - readYear;
  quantity -= (difference * 3 * quantity) / 100;
  console.log(quantity);
  // Basic 30% and premium 50%
  console.log(this.type);
  if (this.type === "basico") {
    quantity *= 1.3;
  } else {
    quantity *= 1.5;
  }
  console.log(quantity);
  return quantity;
};

function userInterface() {}
//fill years
userInterface.prototype.fillOptions = () => {
  const maxYear = new Date().getFullYear(),
    min = maxYear - 20;

  const selectYear = document.querySelector("#year");
  for (let i = maxYear; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

userInterface.prototype.showMsg = (message, type) => {
  const div = document.createElement("div");
  if (type === "error") {
    div.classList.add("error");
  } else {
    div.classList.add("correcto");
  }
  div.classList.add("mensaje", "mt-10");
  div.textContent = message;
  const form = document.querySelector("#cotizar-seguro");
  form.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

userInterface.prototype.showResult = (insurance, total) => {
  const { model, year, type } = insurance;
  let text;
  switch (model) {
    case "1":
      text = "American";
      break;
    case "2":
      text = "Asian";
      break;
    case "3":
      text = "European";
      break;
    default:
      break;
  }
  const div = document.createElement("div");
  div.classList.add("mt-10");
  div.innerHTML = `
        <p class="hearder">Quote</p>
        <p class="font-bold">Model: <span class="font-normal">${text}</span></p>
        <p class="font-bold">Model: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Model: <span class="font-normal">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;
  const resultDiv = document.querySelector("#resultado");

  //spiiner
  const spiiner = document.querySelector("#cargando");
  spiiner.style.display = "block";

  setTimeout(() => {
    spiiner.style.display = "none";
    resultDiv.appendChild(div);
  }, 3000);
};
const UI = new userInterface();

document.addEventListener("DOMContentLoaded", () => {
  UI.fillOptions();
});

loadEventListeners();

function loadEventListeners() {
  const form = document.querySelector("#cotizar-seguro");
  form.addEventListener("submit", insuranceQuote);
}

function insuranceQuote(e) {
  e.preventDefault();
  console.log(e);

  //read model
  const model = document.querySelector("#marca").value;

  //read year
  const year = document.querySelector("#year").value;

  //read type
  const type = document.querySelector('input[name="tipo"]:checked').value;
  console.log(type);
  if (model === "" || year === "" || type === "") {
    UI.showMsg("All fields are required", "error");
    return;
  }
  UI.showMsg("Creating Insurance quote...", "exito");

  //remove previous quote
  const results = document.querySelector("#resultado div");
  if (results != null) {
    results.remove();
  }

  const insurance = new Insurance(model, year, type);
  let total = insurance.insuranceQuote();
  UI.showResult(insurance, total);
}
