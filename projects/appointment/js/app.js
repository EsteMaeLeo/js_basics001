const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const timeInput = document.querySelector("#hora");
const sympInputs = document.querySelector("#sintomas");

const form = document.querySelector('#nueva-cita')
const appoitments = document.querySelector('#citas');

eventListener();

function eventListener(){
    petInput.addEventListener('input', dataAppoitment);
}

function dataAppoitment(e){
    console.log(e.target.value);
}
