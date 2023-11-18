let client = {
  table: "",
  time: "",
  order: [],
};

const categories = {
  1: "Comida",
  2: "Bebidas",
  3: "Postres",
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

  //asign form data to client
  client = { ...client, table, time };

  console.log(client);
  //hide modal
  const modalForm = document.querySelector("#formulario");
  const modalBootstrap = bootstrap.Modal.getInstance(modalForm);
  modalBootstrap.hide();

  //show sections
  showSections();

  //Get food from API JSON-Server
  getFood();
}

function showSections() {
  const hideSections = document.querySelectorAll(".d-none");
  hideSections.forEach((section) => section.classList.remove("d-none"));
}

function getFood() {
  const url = "http://localhost:3000/platillos/";

  fetch(url)
    .then((response) => response.json())
    .then((result) => showFood(result))
    .catch((error) => console.log(error));
}

function showFood(foodList) {
  const content = document.querySelector("#platillos .contenido");

  foodList.forEach((food) => {
    const row = document.createElement("DIV");
    row.classList.add("row", "py-3", "border-top");

    const name = document.createElement("DIV");
    name.classList.add("col-md-4");
    name.textContent = food.nombre;

    const price = document.createElement("DIV");
    price.classList.add("col-md-3", "fw-bold");
    price.textContent = `$${food.precio}`;

    const category = document.createElement("DIV");
    category.classList.add("col-md-3");
    category.textContent = categories[food.categoria];

    const inputaQuantity = document.createElement("INPUT");
    inputaQuantity.type = "number";
    inputaQuantity.min = 0;
    inputaQuantity.value = 0;
    inputaQuantity.id = `product-${food.id}`;
    inputaQuantity.classList.add("form-control");

    const addInput = document.createElement("DIV");
    addInput.classList.add("col-md-2");
    addInput.appendChild(inputaQuantity);

    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(category);
    row.appendChild(addInput);
    content.appendChild(row);
  });
}
