const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const timeInput = document.querySelector("#hora");
const sympInputs = document.querySelector("#sintomas");

const form = document.querySelector("#nueva-cita");
const appoitmentsContainer = document.querySelector("#citas");

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

  deleteAppoitment(id) {
    this.appoitments = this.appoitments.filter(
      (appotiment) => appotiment.id !== id
    );
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
  //destructuring to the object
  printAppoitment({ appoitments }) {
    this.cleanHtml();
    appoitments.forEach((appoitment) => {
      const { id, pet, owner, phone, date, hour, symptoms } = appoitment;
      const divAppoitment = document.createElement("div");
      divAppoitment.classList.add("cita", "p-3");
      divAppoitment.dataset.id = id;

      const petParagraph = document.createElement("p");
      petParagraph.classList.add("card-title", "font-weight-bolder");
      petParagraph.textContent = pet;

      const ownerParagraph = document.createElement("p");
      ownerParagraph.classList.add("card-title", "font-weight-bolder");
      ownerParagraph.innerHTML = ` <span class="font-weight-bolder">Owner: </span> ${owner}`;

      const phoneParagraph = document.createElement("p");
      phoneParagraph.classList.add("card-title", "font-weight-bolder");
      phoneParagraph.innerHTML = ` <span class="font-weight-bolder">Phone: </span> ${phone}`;

      const dateParagraph = document.createElement("p");
      dateParagraph.classList.add("card-title", "font-weight-bolder");
      dateParagraph.innerHTML = ` <span class="font-weight-bolder">Date: </span> ${date}`;

      const hourParagraph = document.createElement("p");
      hourParagraph.classList.add("card-title", "font-weight-bolder");
      hourParagraph.innerHTML = ` <span class="font-weight-bolder">Hour: </span> ${hour}`;

      const symptomsParagraph = document.createElement("p");
      symptomsParagraph.classList.add("card-title", "font-weight-bolder");
      symptomsParagraph.innerHTML = ` <span class="font-weight-bolder">Symptoms: </span> ${symptoms}`;

      //button delete
      const btnDelete = document.createElement("button");
      btnDelete.classList.add("btn", "btn-danger", "mr-2");
      btnDelete.innerHTML =
        'Delete <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>';

      btnDelete.onclick = () => deleteAppoitment(id);

      divAppoitment.appendChild(petParagraph);
      divAppoitment.appendChild(ownerParagraph);
      divAppoitment.appendChild(phoneParagraph);
      divAppoitment.appendChild(dateParagraph);
      divAppoitment.appendChild(hourParagraph);
      divAppoitment.appendChild(symptomsParagraph);
      divAppoitment.appendChild(btnDelete);

      appoitmentsContainer.appendChild(divAppoitment);
    });
  }
  cleanHtml() {
    while (appoitmentsContainer.firstChild) {
      appoitmentsContainer.removeChild(appoitmentsContainer.firstChild);
    }
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
  //move the copy
  appoitmentsManagement.addApoitment({ ...appoitmentObj });

  resetObj();

  form.reset();

  ui.printAppoitment(appoitmentsManagement);
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

function deleteAppoitment(id) {
  //delete
  appoitmentsManagement.deleteAppoitment(id);
  //show message
  ui.printAlert("Appoitment deleted");
  //refresh
  ui.printAppoitment(appoitmentsManagement);
}
