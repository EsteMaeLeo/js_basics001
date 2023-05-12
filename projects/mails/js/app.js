//all html loaded
document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#asunto");
  const inputMsg = document.querySelector("#mensaje");

  //trigger in the field but after user click another
  inputEmail.addEventListener("blur", validate);

  //trigger in the field but after user click another
  inputSubject.addEventListener("blur", validate);
  //trigger in the field but after user click another
  inputMsg.addEventListener("blur", validate);

  function validate(e) {
    console.log(e.target.value);
  }
});
