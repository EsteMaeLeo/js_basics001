//all function are local
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    createDB();
  });

  function createDB() {
    const crmDB = window.indexedDB.open("crm", 1);

    crmDB.onerror = function () {
      console.log("Error on create DB");
    };

    crmDB.onsuccess = function () {
      DB = crmDB.result;
    };
    console.log('DB created');
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {keyPath: 'id', autoIncrement:true});
        //name keypath
        objectStore.createIndex('id', 'id', {unique:true});
        objectStore.createIndex('name', 'name', {unique:false});
        objectStore.createIndex('email', 'email', {unique:true});
        objectStore.createIndex('phone', 'phone', {unique:false});
        objectStore.createIndex('company', 'company', {unique:false});
        
        console.log('DB created');
    }
    
  }
})();
