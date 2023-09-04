const loadTxtBtn = document.querySelector("#loadTxt");
const loadJsonBtn = document.querySelector("#loadJSON");

loadTxtBtn.addEventListener("click", getData);
loadJsonBtn.addEventListener("click", getDataJson);

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
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
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
