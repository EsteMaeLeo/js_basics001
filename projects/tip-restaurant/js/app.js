let client = {
  table: "",
  time: "",
  order: [],
};

const btnSaveOrderClient = document.querySelector("#guardar-cliente");

btnSaveOrderClient.addEventListener("click", saveClient);

function saveClient() {
  const table = document.querySelector("#mesa").value;
  const time = document.querySelector("#hora").value;
  console.log(time);

  const emptyFields = [table, time].some((field) => field === "");

  if (emptyFields) {
    //console.log("Found an empty field");
    const existAlert = document.querySelector(".invalid-feedback");

    if (!existAlert) {
      const alert = document.createElement("DIV");

      alert.classList.add("invalid-feedback", "d-block", "text-center");
      //alert.textContent = 'All fields are mandatory'
      alert.textContent = "Todos los campos son mandatorios";
      document.querySelector(".modal-body form").appendChild(alert);

      //delete alert
      setTimeout(() => {
        alert.remove();
      }, 3000);
    }
    return;
  }
}
