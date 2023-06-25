const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const timeInput = document.querySelector("#hora");
const sympInputs = document.querySelector("#sintomas");

const form = document.querySelector("#nueva-cita");
const appoitments = document.querySelector("#citas");

const citaObj = {
  pet: "",
  owner: "",
  phone: "",
  date: "",
  hour: "",
  symptoms: "",
};

eventListener();

function eventListener() {
  petInput.addEventListener("input", dataAppoitment);
  ownerInput.addEventListener("input", dataAppoitment);
  phoneInput.addEventListener("input", dataAppoitment);
  dateInput.addEventListener("input", dataAppoitment);
  timeInput.addEventListener("input", dataAppoitment);
  sympInputs.addEventListener("input", dataAppoitment);
}

function dataAppoitment(e) {
  console.log(e.target.name);
  //should be same name in HTML name and object
  citaObj[e.target.name] = e.target.value;
  console.log(citaObj);
}
