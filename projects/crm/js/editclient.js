(function () {
  let DB;
  let idClient;

  const nameInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#telefono");
  const companyInput = document.querySelector("#empresa");

  form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectDB();
    //check the id from URL
    const parameterURL = new URLSearchParams(window.location.search);

    //updatef
    form.addEventListener("submit", updateClient);

    idClient = parameterURL.get("id");
    console.log(idClient);
    if (idClient) {
      setTimeout(() => {
        getClient(idClient);
      }, 100);
    }
  });

  function getClient(id) {
    console.log(id);
    const transaction = DB.transaction(["crm"], "readwrite");

    const objectStore = transaction.objectStore("crm");
    console.log(objectStore);
    const client = objectStore.openCursor();
    client.onsuccess = function (e) {
      const cursor = e.target.result;
      if (cursor) {
        if (cursor.value.id === Number(id)) {
          console.log("ID:", cursor.value);
          fillForm(cursor.value);
        }
        cursor.continue();
      }
    };
  }

  function conectDB() {
    const openDB = window.indexedDB.open("crm", 1);

    openDB.onerror = function () {
      console.log("Error OPEN DB");
    };

    openDB.onsuccess = function () {
      DB = openDB.result;
    };
  }

  function updateClient(e) {
    e.preventDefault();
    if (
      nameInput.value === "" ||
      emailInput.value === "" ||
      phoneInput.value === "" ||
      companyInput.value === ""
    ) {
      printAlert("Fields are required", "error");

      return;
    }

    //update client
    const clientUpdate = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      id: Number(idClient),
    };
    console.log(clientUpdate);
    const transaction = DB.transaction(["crm"], "readwrite");

    const objectStore = transaction.objectStore("crm");
    objectStore.put(clientUpdate);
    transaction.oncomplete = function () {
      printAlert("Updated Correctly");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };

    transaction.onerror = function () {
      printAlert("Error on update", "error");
    };
  }

  function fillForm(dataClient) {
    const { name, email, phone, company } = dataClient;

    nameInput.value = name;
    phoneInput.value = phone;
    emailInput.value = email;
    companyInput.value = company;
  }
})();
