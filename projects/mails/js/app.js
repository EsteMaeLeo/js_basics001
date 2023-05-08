//all html loaded
document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputSubject = document.querySelector("#asunto");
  const inputMsg = document.querySelector("#mensaje");

  //trigger in the field but after user click another
  inputEmail.addEventListener("blur", function (e) {
    //access the value or the text in the input
    console.log(e.target.value);
  });


  console.log(inputMsg);
});
