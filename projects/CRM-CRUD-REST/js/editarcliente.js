import { getClientId } from "./API.js";

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
  });

  function showClient(client) {
    const { name, email, phone, company, id } = client;

    inputName.value = name;
    inputEmail.value = email;
    inputPhone.value = phone;
    inputCompany.value = company;
    inputId.value = id;
  }
})();
