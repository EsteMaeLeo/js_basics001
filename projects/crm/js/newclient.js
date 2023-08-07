//set local functions and variables
(function(){
    let DB;

    document.addEventListener('DOMContentLoaded', ()=>{
        conectDB();
    });

    function conectDB(){
        const openDB = window.indexedDB.open('CRM', 1);

        openDB.onerror = function(){
            console.log('Error OPEN DB');
        }

        openDB.onsuccess = function(){
            DB = openDB.result;
        }
    }
})();