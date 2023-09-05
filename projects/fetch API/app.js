const loadTxtBtn = document.querySelector("#loadTxt");
const loadJsonBtn = document.querySelector("#loadJSON");
const loadJsonArrayBtn = document.querySelector("#loadArray");
const loadApiBtn = document.querySelector("#loadApi");

loadTxtBtn.addEventListener("click", getData);
loadJsonBtn.addEventListener("click", getDataJson);
loadJsonArrayBtn.addEventListener("click", getDataJsonArray);
loadApiBtn.addEventListener("click", getDataAPI);

function getDataAPI() {
  const url = "https://picsum.photos/list";
  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => {
      console.log(error);
    });
}

function getDataJsonArray() {
  const url = "data/employees.json";
  fetch(url)
    .then((response) => response.json())
    .then((result) => showHTMLArray(result))
    .catch((error) => {
      console.log(error);
    });
}

function showHTMLArray(employees) {
  const container = document.querySelector(".container");

  let html = "";
  employees.forEach((employee) => {
    const { id, name, company, job } = employee;

    html += `
    <p>ID: ${id}</p>
    <p>Name: ${name}</p>
    <p>Company: ${company}</p>
    <p>Job Title: ${job}</p>
    `;
  });

  container.innerHTML = html;
}

function getDataJson() {
  const url = "data/employee.json";
  fetch(url)
    .then((response) => {
      console.log(response);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      console.log(response.type);

      return response.json();
    })
    .then((result) => {
      console.log(result);
      showHTML(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showHTML({ id, name, company, job }) {
  const container = document.querySelector(".container");

  container.innerHTML = `
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>Company: ${company}</p>
        <p>Job Title: ${job}</p>`;
}

function getData() {
  const url = "data/data.txt";
  fetch(url)
    .then((response) => {
      console.log(response);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      console.log(response.type);

      return response.text();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
