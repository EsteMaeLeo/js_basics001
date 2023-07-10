document.addEventListener("DOMContentLoaded", () => {
  crmDB();
});

function crmDB() {
  //create DB
  let crmDB = window.indexedDB.open("crmDB", 1);

  //error
  crmDB.onerror = function () {
    console.log("Error on create DB");
  };

  //create success
  crmDB.onsuccess = function () {
    console.log("DB create successfully");
  };

  //configuration
  crmDB.onupgradeneeded = function (e) {
    console.log("Method is created just one time when the DB is Created");
    console.log(e.target.result);
    //reference of the DB
    const db = e.target.result;

    const objectStore = db.createObjectStore("crmDB", {
      keyPath: "crmDB",
      autoIncrement: true,
    });
    //create columns
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("phone", "phone", { unique: false });
  };
}
