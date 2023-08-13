//all function are local
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    createDB();

    if (window.indexedDB.open("cr,", 1)) {
      getClients();
    }
  });

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

          const clientList = document.querySelector("#listado-clientes");

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
                        <a href="editr-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
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
