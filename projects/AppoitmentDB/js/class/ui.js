import { deleteAppoitment, editAppoitment, DB } from "../functions.js";
import { appoitmentsContainer } from "../selector.js";

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
  printAppoitment() {
    this.cleanHtml();

    //read database
    const objectStore =
      DB.transaction("appoitments").objectStore("appoitments");

      //validate number appoitments
      const total = objectStore.count();
      total.onsuccess = function(){
        console.log(total.result);
      }
      console.log(total);

    objectStore.openCursor().onsuccess = function (e) {
      console.log(e.target.result);
      const cursor = e.target.result;
      if (cursor) {
   
          const { id, pet, owner, phone, date, hour, symptoms } = cursor.value;
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

          //edit
          const btnEdit = document.createElement("button");
          btnEdit.classList.add("btn", "btn-info", "mr-2");
          btnEdit.innerHTML =
            'Edit <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>';

          btnEdit.onclick = () => editAppoitment(appoitment);

          divAppoitment.appendChild(petParagraph);
          divAppoitment.appendChild(ownerParagraph);
          divAppoitment.appendChild(phoneParagraph);
          divAppoitment.appendChild(dateParagraph);
          divAppoitment.appendChild(hourParagraph);
          divAppoitment.appendChild(symptomsParagraph);
          divAppoitment.appendChild(btnDelete);
          divAppoitment.appendChild(btnEdit);

          appoitmentsContainer.appendChild(divAppoitment);
          //next element
          cursor.continue();
      }
    };
  }
  cleanHtml() {
    while (appoitmentsContainer.firstChild) {
      appoitmentsContainer.removeChild(appoitmentsContainer.firstChild);
    }
  }
}

export default UI;
