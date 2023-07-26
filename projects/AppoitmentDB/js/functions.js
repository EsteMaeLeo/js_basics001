import Appoitments from "./class/appoitment.js";
import UI from "./class/ui.js";
import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  sympInputs,
  form,
} from "./selector.js";

export let DB;

const ui = new UI();
console.log("UI Print Appoitment");

const appoitmentsManagement = new Appoitments();

const appoitmentObj = {
  id: "",
  pet: "",
  owner: "",
  phone: "",
  date: "",
  hour: "",
  symptoms: "",
};

let editing;

export function dataAppoitment(e) {
  console.log(e.target.name);
  //should be same name in HTML name and object
  appoitmentObj[e.target.name] = e.target.value;
}

export function newAppoitment(e) {
  e.preventDefault();
  const { pet, owner, phone, date, hour, symptoms } = appoitmentObj;
  if (
    pet === "" ||
    owner === "" ||
    phone === "" ||
    date === "" ||
    hour === ""
  ) {
    ui.printAlert("All field are required", "error");
    return;
  }

  if (editing) {
    appoitmentsManagement.editAppoitment({ ...appoitmentObj });

    //editing on IndexDB
    const transaction = DB.transaction(["appoitments"], "readwrite");
    const objectStore = transaction.objectStore("appoitments");
    objectStore.put(appoitmentObj);

    transaction.oncomplete = () => {
      ui.printAlert("Appoitment successfully edited");
      form.querySelector('button[type="submit"]').textContent =
        "CREATE APPOITMENT";
      editing = false;
    };
  } else {
    appoitmentObj.id = Date.now();
    //move the copy
    appoitmentsManagement.addApoitment({ ...appoitmentObj });

    //add in the indexedDB
    //let transaction = DB.transaction(['crmDB'], 'readwrite');
    const transaction = DB.transaction(["appoitments"], "readwrite");
    //enable the objectstore
    const objectStore = transaction.objectStore("appoitments");
    //add DB
    objectStore.add(appoitmentObj);
    transaction.oncomplete = function () {
      console.log("Appoitment created on DB");
      ui.printAlert("Appoitment successfully added");
    };
  }

  resetObj();

  form.reset();

  ui.printAppoitment();
}

export function resetObj() {
  appoitmentObj.pet = "";
  appoitmentObj.id = "";
  appoitmentObj.owner = "";
  appoitmentObj.phone = "";
  appoitmentObj.date = "";
  appoitmentObj.hour = "";
  appoitmentObj.symptoms = "";
}

export function deleteAppoitment(id) {
  //delete
  appoitmentsManagement.deleteAppoitment(id);
  //show message
  ui.printAlert("Appoitment deleted");
  //refresh
  ui.printAppoitment();
}

export function editAppoitment(appoitment) {
  //edit
  console.log(appoitment);
  const { id, pet, owner, phone, date, hour, symptoms } = appoitment;

  //fill the inputs
  petInput.value = pet;
  ownerInput.value = owner;
  phoneInput.value = phone;
  dateInput.value = date;
  timeInput.value = hour;
  sympInputs.value = symptoms;

  appoitmentObj.id = id;
  appoitmentObj.pet = pet;
  appoitmentObj.owner = owner;
  appoitmentObj.phone = phone;
  appoitmentObj.date = date;
  appoitmentObj.hour = hour;
  appoitmentObj.symptoms = symptoms;

  //change button
  form.querySelector('button[type="submit"]').textContent = "Save Changes";

  editing = true;
}

export function createDB() {
  //create DB index

  const createDB = window.indexedDB.open("appoitments", 1);

  //error handle
  createDB.onerror = function () {
    console.log("Error on create IndexedDB");
  };

  //on sucess
  createDB.onsuccess = function () {
    console.log("DB Created successfully");
    DB = createDB.result;

    //Call print but INDEXEDB is ready
    ui.printAppoitment();

    console.log(DB);
  };

  //define schema
  createDB.onupgradeneeded = function (e) {
    const db = e.target.result;

    const objectStore = db.createObjectStore("appoitments", {
      //index
      keyPath: "id",
      autoIncrement: true,
    });

    objectStore.createIndex("id", "id", { unique: false });
    objectStore.createIndex("pet", "pet", { unique: false });
    objectStore.createIndex("owner", "owner", { unique: false });
    objectStore.createIndex("phone", "phone", { unique: false });
    objectStore.createIndex("date", "date", { unique: false });
    objectStore.createIndex("hour", "hour", { unique: false });
    objectStore.createIndex("symptoms", "symptoms", { unique: false });
  };
  console.log("DB Create");
}
