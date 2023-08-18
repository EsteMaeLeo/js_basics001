(function () {
  let DB;

  const nameInput = document.querySelector('#nombre')

  document.addEventListener("DOMContentLoaded", () => {
    connectDB();
    //check the id from URL
    const parameterURL = new URLSearchParams(window.location.search);

    const idClient = parameterURL.get("id");
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
    client.onsuccess = function(e){
      const cursor = e.target.result;
      if(cursor){

        if(cursor.value.id === Number(id)){
          console.log('ID:', cursor.value)
          fillForm(cursor.value);
        }
        cursor.continue();
      }
    }
  }

  function connectDB() {
    const openDB = window.indexedDB.open("crm", 1);

    openDB.onerror = function () {
      console.log("Error OPEN DB");
    };

    openDB.onsuccess = function () {
      DB = openDB.result;
    };
  }

  function fillForm(dataClient){
    const {name} = dataClient;

    nameInput.value = name;
  }
})();
