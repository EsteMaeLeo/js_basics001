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

    const inputQuantity = document.createElement("INPUT");
    inputQuantity.type = "number";
    inputQuantity.min = 0;
    inputQuantity.value = 0;
    inputQuantity.id = `product-${food.id}`;
    inputQuantity.classList.add("form-control");

    //function detect quantity and food
    inputQuantity.onchange = function () {
      const quantity = parseInt(inputQuantity.value);
      console.log(quantity);
      addFood({ ...food, quantity });
    };

    const addInput = document.createElement("DIV");
    addInput.classList.add("col-md-2");
    addInput.appendChild(inputQuantity);

    row.appendChild(name);
    row.appendChild(price);
    row.appendChild(category);
    row.appendChild(addInput);
    content.appendChild(row);
  });
}

function addFood(food) {
  //extract order
  const { order } = client;

  if (food.quantity > 0) {
    //check if product already exist
    if (order.some((product) => product.id === food.id)) {
      //update the quantity
      const orderUpdated = order.map((product) => {
        if (product.id === food.id) {
          product.quantity = food.quantity;
        }
        return product;
      });

      //assign new array to client.order
      client.order = [...orderUpdated];
    } else {
      //order not exist assign to the array
      client.order = [...order, food];
    }
  } else {
    //delete element equal to 0
    const result = order.filter((product) => product.id !== food.id);
    client.order = [...result];
  }

  console.log(client);
  cleanHtml();

  if (client.order.length) {
    showSumary(client);
  } else {
    cleanEmptyOrder();
  }
}

function showSumary(client) {
  const content = document.querySelector("#resumen .contenido");

  const sumary = document.createElement("DIV");
  sumary.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");

  const table = document.createElement("P");
  table.textContent = "Mesa: ";
  table.classList.add("fw-bold");

  const tableSpan = document.createElement("SPAN");
  tableSpan.textContent = client.table;
  tableSpan.classList.add("fw-normal");

  const time = document.createElement("P");
  time.textContent = "Hora: ";
  time.classList.add("fw-bold");

  const timeSpan = document.createElement("SPAN");
  timeSpan.textContent = client.time;
  timeSpan.classList.add("fw-normal");

  const heading = document.createElement("H3");
  heading.textContent = "Item List";
  heading.classList.add("my-4", "text-center");

  //product list
  const group = document.createElement("UL");
  group.classList.add("list-group");

  const { order } = client;
  order.forEach((product) => {
    const { nombre, quantity, precio, id } = product;
    const list = document.createElement("LI");
    list.classList.add("list-group-item");

    const nameEl = document.createElement("H4");
    nameEl.classList.add("my-4");
    nameEl.textContent = nombre;

    const quantityEl = document.createElement("P");
    quantityEl.classList.add("fw-bold");
    quantityEl.textContent = "Quantity: ";

    const quantityValue = document.createElement("SPAN");
    quantityValue.classList.add("fw-normal");
    quantityValue.textContent = quantity;

    const precioEl = document.createElement("P");
    precioEl.classList.add("fw-bold");
    precioEl.textContent = "Price: ";

    const precioValue = document.createElement("SPAN");
    precioValue.classList.add("fw-normal");
    precioValue.textContent = `$${precio}`;

    const subTotalEl = document.createElement("P");
    subTotalEl.classList.add("fw-bold");
    subTotalEl.textContent = "Total per Item: ";

    const subTotalValue = document.createElement("SPAN");
    subTotalValue.classList.add("fw-normal");
    subTotalValue.textContent = `$${precio * quantity}`;

    quantityEl.appendChild(quantityValue);
    precioEl.appendChild(precioValue);
    subTotalEl.appendChild(subTotalValue);

    const btnDelete = document.createElement("BUTTON");
    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.textContent = "Delete Item";

    btnDelete.onclick = function () {
      deleteITem(id);
    };

    list.appendChild(nameEl);
    list.appendChild(quantityEl);
    list.appendChild(precioEl);
    list.appendChild(subTotalEl);
    list.appendChild(btnDelete);

    group.appendChild(list);
  });

  table.appendChild(tableSpan);
  time.appendChild(timeSpan);

  sumary.append(heading);
  sumary.append(table);
  sumary.append(time);
  
  sumary.append(group);

  content.appendChild(sumary);

  showTips();
}

function showTips() {
  const content = document.querySelector("#resumen .contenido");
  const form = document.createElement("DIV");
  form.classList.add("col-md-6", "formulario");

  const formDiv = document.createElement("DIV");
  formDiv.classList.add("card", "py-2", "px-3", "shadow");
  const heading = document.createElement("H3");
  heading.classList.add("my-4");
  heading.textContent = "Tips";

  form.appendChild(formDiv);
  formDiv.appendChild(heading);
  content.appendChild(form);
}

function cleanHtml() {
  const content = document.querySelector("#resumen .contenido");

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

function deleteITem(id) {
  const { order } = client;
  const result = order.filter((product) => product.id !== id);
  client.order = [...result];
  cleanHtml();

  if (client.order.length) {
    showSumary(client);
  } else {
    cleanEmptyOrder();
  }

  //at moment delete product reset value in the form
  const itemDeleted = `#product-${id}`;
  console.log(itemDeleted);
  const inputDeleted = document.querySelector(itemDeleted);
  inputDeleted.value = 0;
}

function cleanEmptyOrder() {
  const content = document.querySelector("#resumen .contenido");

  const text = document.createElement("P");

  text.classList.add("text-center");

  text.textContent = "Añade los elementos del pedido";
  content.appendChild(text);
}
