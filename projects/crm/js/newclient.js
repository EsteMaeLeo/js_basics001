//set local functions and variables
(function () {
  let DB;
  const form = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectDB();

    form.addEventListener("submit", validClient);
  });

  function conectDB() {
    const openDB = window.indexedDB.open("CRM", 1);

    openDB.onerror = function () {
      console.log("Error OPEN DB");
    };

    openDB.onsuccess = function () {
      DB = openDB.result;
    };
  }

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
    const client ={
        name,
        email,
        phone,
        company
    }

    console.log(client)
  }

  function printAlert(msg, type) {
    const alert = document.querySelector(".alert");

    if (!alert) {
      const divAlert = document.createElement("div");
      divAlert.classList.add(
        "px-4",
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center",
        "border",
        "alert"
      );

      if (type === "error") {
        divAlert.classList.add("bg-red-100", "border-red-400", "text-red-700");
      } else {
        divAlert.classList.add(
          "bg-green-100",
          "border-green-400",
          "text-green-700"
        );
      }

      divAlert.textContent = msg;

      form.appendChild(divAlert);

      setTimeout(() => {
        divAlert.remove();
      }, 3000);
    }
  }
})();
