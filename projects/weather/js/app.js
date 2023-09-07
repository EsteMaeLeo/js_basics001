const container = document.querySelector(".container");
const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
  e.preventDefault();

  const city = document.querySelector("#ciudad").value;
  const country = document.querySelector("#pais").value;

  if (city === "" || country === "") {
    showError("Both fields are mandatory");
    return;
  }
  getDataAPI(city, country);
}

function showError(msg) {
  console.log(msg);
  const alert = document.querySelector(".bg-red-100");

  if (!alert) {
    const alert = document.createElement("div");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${msg}</span>`;
    container.appendChild(alert);

    //delete alert after time
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
}

function getDataAPI(city, country) {
  const appId = "98cc685a511e4cdddd0311ce79a8e339";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

  spiner();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      cleanHTML();
      if (data.cod === "404") {
        showError("City not found");
        return;
      }
      showHTML(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

function showHTML(data) {
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  if (data.length != 0) {
    console.log(data);
    const tempC = kelvinCelsius(temp);
    const max = kelvinCelsius(temp_max);
    const min = kelvinCelsius(temp_min);
    console.log(tempC, max, min);

    const nameC = document.createElement("p");
    nameC.innerHTML = `City: ${name}`;
    nameC.classList.add("font-bold", "text-2xl");

    const current = document.createElement("p");
    current.innerHTML = `${tempC} &#8451`;
    current.classList.add("font-bold", "text-6xl");

    const tempMax = document.createElement("p");
    tempMax.innerHTML = `Max: ${max} &#8451`;
    tempMax.classList.add("text-xl");

    const tempMin = document.createElement("p");
    tempMin.innerHTML = `Min: ${min} &#8451`;
    tempMin.classList.add("text-xl");

    const resultDiv = document.createElement("div");
    resultDiv.classList.add("text-center", "text-white");
    resultDiv.appendChild(nameC);
    resultDiv.appendChild(current);
    resultDiv.appendChild(tempMax);
    resultDiv.appendChild(tempMin);

    result.appendChild(resultDiv);
  }
}

/*function kelvinCelsius(degree) {
  return parseInt(degree - 273.15);
}*/

const kelvinCelsius = (degree) => parseInt(degree - 273.15);

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function spiner() {
  cleanHTML();

  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");

  divSpinner.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>`;

  result.appendChild(divSpinner);
}
