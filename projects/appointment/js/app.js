const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const timeInput = document.querySelector("#hora");
const sympInputs = document.querySelector("#sintomas");

const form = document.querySelector("#nueva-cita");
const appoitments = document.querySelector("#citas");

const appoitmentObj = {
  id: "",
  pet: "",
  owner: "",
  phone: "",
  date: "",
  hour: "",
  symptoms: "",
};

class Appoitments {
  constructor() {
    this.appoitments = [];
  }

  addApoitment(appoitment) {
    this.appoitments = [...this.appoitments, appoitment];
    console.log(this.appoitments);
  }
}

class UI {
  printAlert(msg, type) {
    const divMsg = document.createElement("div");
    divMsg.classList.add("text-center", "alert", "d-block", "col-12");

    if (type === "error") {
      divMsg.classList.add("alert-danger");
    } else {
      divMsg.classList.add("alert-success");
    }
    divMsg.textContent = msg;

    document
      .querySelector("#contenido")
      .insertBefore(divMsg, document.querySelector(".agregar-cita"));

    setTimeout(() => {
      divMsg.remove();
    }, 5000);
  }
}

const ui = new UI();
const appoitmentsManagement = new Appoitments();
eventListener();

function eventListener() {
  petInput.addEventListener("input", dataAppoitment);
  ownerInput.addEventListener("input", dataAppoitment);
  phoneInput.addEventListener("input", dataAppoitment);
  dateInput.addEventListener("input", dataAppoitment);
  timeInput.addEventListener("input", dataAppoitment);
  sympInputs.addEventListener("input", dataAppoitment);

  form.addEventListener("submit", newAppoitment);
}

function dataAppoitment(e) {
  console.log(e.target.name);
  //should be same name in HTML name and object
  appoitmentObj[e.target.name] = e.target.value;
}

function newAppoitment(e) {
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

  appoitmentObj.id = Date.now();
  appoitmentsManagement.addApoitment({ ...appoitmentObj });

  resetObj();

  form.reset();
}

function resetObj() {
  appoitmentObj.pet = "";
  appoitmentObj.id = "";
  appoitmentObj.owner = "";
  appoitmentObj.phone = "";
  appoitmentObj.date = "";
  appoitmentObj.hour = "";
  appoitmentObj.symptoms = "";
}
