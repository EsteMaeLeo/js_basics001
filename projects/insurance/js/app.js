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
const UI = new userInterface();

document.addEventListener("DOMContentLoaded", () => {
    UI.fillOptions();
});
