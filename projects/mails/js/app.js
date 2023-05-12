//all html loaded
document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#asunto");
  const inputMsg = document.querySelector("#mensaje");
  const form = document.querySelector("#formulario");

  //trigger in the field but after user click another
  inputEmail.addEventListener("blur", validate);

  //trigger in the field but after user click another
  inputSubject.addEventListener("blur", validate);
  //trigger in the field but after user click another
  inputMsg.addEventListener("blur", validate);

  function validate(e) {
    console.log(e.target.parentElement);
    //e.target.parentElement.nextElementSibling
    console.log(e.target.id);
    if (e.target.value.trim() === "") {
      showAlert(`Field ${e.target.id} is obligatory`, e.target.parentElement);
      return;
    }

    cleanAlert(e.target.parentElement);
  }

  function showAlert(msg, reference) {
    
    cleanAlert(reference);
    //generate HTML
    const error = document.createElement("P");
    error.textContent = msg;
    error.classList.add("bg-red-600", "text-white", "text-center", "p-2");
    reference.appendChild(error);
  }
});

//move the reference to know which alert
function cleanAlert(reference) {
  //validate if there is allready alert creates use reference the parent only on the div of the field
  const alert = reference.querySelector(".bg-red-600");
  if (alert) {
    
    alert.remove();
  }
}
