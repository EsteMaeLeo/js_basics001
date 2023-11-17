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
  console.log(time)

  const emptyFields = [table, time].some((field) => field === "");

  if (emptyFields) {
    console.log("Found an empty field");
  } else {
    console.log("all fields filled");
  }
}
