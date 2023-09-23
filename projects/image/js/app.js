const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.onload = () => {
  form.addEventListener("submit", valForm);
};

function valForm(e) {
  e.preventDefault();

  const wordSearch = document.querySelector("#termino").value;
  if (!wordSearch) {
    console.log("Search is empty please provide a search word");
    showAlert("Search is empty please provide a search word");
    return;
  }
  searchImg(wordSearch);
}

function searchImg(wordSearch) {
  const key = "39618957-229b962459be4fa4b5566cba9";
  const url = `https://pixabay.com/api/?key=${key}&q=${wordSearch}&image_type=photo`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

function showAlert(msg) {
  const existAlert = document.querySelector(".bg-red-100");
  if (!existAlert) {
    const alert = document.createElement("P");
    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
  <strong class="font-bold">Error!</strong>
  <span class="block sm:inline">${msg}</span> `;

    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}
