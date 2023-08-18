//all function are local
(function () {
  const clientList = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", () => {
    createDB();

    if (window.indexedDB.open("cr,", 1)) {
      getClients();
    }

    clientList, addEventListener("click", deleteClient);
  });

  function deleteClient(e) {
    console.log(e.target.classList);

    if (e.target.classList.contains("eliminar")) {
      const idDelete = Number(e.target.dataset.cliente);
      console.log(idDelete);
      const confirmn = confirm("Are sure to delete client?");
      if (confirmn) {
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");

        objectStore.delete(idDelete);

        transaction.oncomplete = function () {
          console.log("Deleted");

          e.target.parentElement.parentElement.remove();
        };

        transaction.onerror = function () {
          console.log("Error");
        };
      }
    }
  }

  function createDB() {
    const crmDB = window.indexedDB.open("crm", 1);

    crmDB.onerror = function () {
      console.log("Error on create DB");
    };

    crmDB.onsuccess = function () {
      DB = crmDB.result;
    };
    console.log("DB created");
    crmDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });
      //name keypath
      objectStore.createIndex("id", "id", { unique: true });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("phone", "phone", { unique: false });
      objectStore.createIndex("company", "company", { unique: false });

      console.log("DB created");
    };
  }

  function getClients() {
    const openConection = window.indexedDB.open("crm", 1);

    openConection.onerror = function () {
      console.log("onerror to open CRM indexedDB");
    };

    openConection.onsuccess = function () {
      DB = openConection.result;

      const objectStore = DB.transaction("crm").objectStore("crm");

      //read indexDB

      objectStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;

        if (cursor) {
          console.log(cursor.value);
          const { id, name, company, email, phone } = cursor.value;

          clientList.innerHTML += ` <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${phone}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${company}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                    </td>
                </tr>
            `;
          cursor.continue();
        } else {
          console.log("No values on indexedDB");
        }
      };
    };
  }
})();
