//constructor

function insurance(model, year, type) {
  (this.model = model), (this.year = year);
  this.type = type;
}

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
  } else {
  }
  UI.showMsg("Insurance quote...", "exito");
}
