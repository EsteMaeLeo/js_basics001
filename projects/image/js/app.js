const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.onload = () => {
  form.addEventListener("submit", valForm);
};

function valForm(e) {
  e.preventDefault();

  const wordSearch = document.querySelector("#termino").ariaValueMax;
  if (!wordSearch) {
    console.log("Search is empty please provide a search word");
    showAlert("Search is empty please provide a search word");
    return;
  }
}

function showAlert(msg) {}
