import {getClientId } from "./API.js";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const paramURL = new URLSearchParams(window.location.search);

    const idClient = parseInt(paramURL.get("id"));
    console.log(idClient)

    getClientId(idClient);
  });
})();
