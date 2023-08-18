//set local functions and variables
const form = document.querySelector("#formulario");
(function () {

  

  document.addEventListener("DOMContentLoaded", () => {
    conectDB();

    form.addEventListener("submit", validClient);
  });

  function validClient(e) {
    e.preventDefault();

    //read all inputs
    const name = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#telefono").value;
    const company = document.querySelector("#empresa").value;
    console.log(name.value);
    if (name === "" || email === "" || phone === "" || company === "") {
      printAlert("Fields are required", "error");

      return;
    }

    //create object literal enhancement.. in this case key and value has the same name
    const client = {
      id: Date.now(),
      name,
      email,
      phone,
      company,
    };

    console.log(client);
    createNewClient(client);
  }

  function createNewClient(client) {
    //const transaction = DB.transaction(["crm"], "readwrite");
    const transaction = DB.transaction(["crm"], "readwrite");
    //const transaction = DB.transaction(["appoitments"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.add(client);

    transaction.onerror = function () {
      console.log("Error");
      printAlert("Email duplicated");
    };

    transaction.oncomplete = function () {
      console.log("New client added");
      printAlert("New client added");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };
  }


})();
