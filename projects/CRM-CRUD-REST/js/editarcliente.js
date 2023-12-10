import { getClientId } from "./API.js";
import { showAlert, val } from "./funciones.js";

(function () {
  const inputName = document.querySelector("#nombre");
  const inputEmail = document.querySelector("#email");
  const inputPhone = document.querySelector("#telefono");
  const inputCompany = document.querySelector("#empresa");
  const inputId = document.querySelector("#id");

  document.addEventListener("DOMContentLoaded", async () => {
    const paramURL = new URLSearchParams(window.location.search);

    const idClient = parseInt(paramURL.get("id"));
    console.log(idClient);

    const client = await getClientId(idClient);
    console.log(client);
    showClient(client);

    const form = document.querySelector("#formulario");
    form.addEventListener("submit", valClient);
  });

  function showClient(client) {
    const { name, email, phone, company, id } = client;

    inputName.value = name;
    inputEmail.value = email;
    inputPhone.value = phone;
    inputCompany.value = company;
    inputId.value = id;
  }

  function valClient(e) {
    e.preventDefault();

    const client = {
      name: inputName.value,
      email: inputEmail.value,
      phone: inputPhone.value,
      company: inputCompany.value,
      id: parseInt(inputId.value),
    };

    console.log(!Object.values(client).every((input) => input !== ""));

    if (val(client)) {
      showAlert("All fields are mandatory");
      return;
    }
  }
})();
