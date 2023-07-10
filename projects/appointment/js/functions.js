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

const ui = new UI();
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
    ui.printAlert("Appoitment successfully edited");

    appoitmentsManagement.editAppoitment({ ...appoitmentObj });

    form.querySelector('button[type="submit"]').textContent =
      "CREATE APPOITMENT";
    editing = false;
  } else {
    appoitmentObj.id = Date.now();
    //move the copy
    appoitmentsManagement.addApoitment({ ...appoitmentObj });
    ui.printAlert("Appoitment successfully added");
  }

  resetObj();

  form.reset();

  ui.printAppoitment(appoitmentsManagement);
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
  ui.printAppoitment(appoitmentsManagement);
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
