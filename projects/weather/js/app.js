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

function getDataAPI(city, country){
    
    const appId="98cc685a511e4cdddd0311ce79a8e339";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

    console.log(url)
}