(function () {
  let DB;

  document.addEventListener("DOMContentLoaded", () => {

    connectDB();
    //check the id from URL
    const parameterURL = new URLSearchParams(window.location.search);

    const idClient = parameterURL.get("id");
    console.log(idClient);
    if (idClient) {
      setTimeout(()=>{
        getClient(idClient);
      }, 1000)
      
    }
  });

  function getClient(id) {
    console.log(id);
    const transaction = DB.transaction(['crm'], 'readwrite');

    const objectStore = transaction.objectStore('crm')
    console.log(objectStore)
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
})();
