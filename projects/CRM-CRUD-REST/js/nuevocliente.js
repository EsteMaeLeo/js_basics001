import { showAlert } from "./funciones.js";

(function () {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", validateClient);

  function validateClient(e) {
    e.preventDefault();

    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;

    const client = {
      name,
      email,
      phone,
      company,
    };

    console.log(!Object.values(client).every((input) => input !== ""));

    if (val(client)) {
      showAlert("All fields are mandatory");
      return;
    }

    console.log("Validation OK");
  }

  function val(obj) {
    return !Object.values(obj).every((input) => input !== "");
  }
})();
