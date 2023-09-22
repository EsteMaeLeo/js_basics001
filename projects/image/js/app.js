const result = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

window.onload = () => {
  form.addEventListener("submit", valForm);
};

function valForm(e) {
  e.preventDefault();

  const wordSearch = document.querySelector("#termino").ariaValueMax;
  if (!wordSearch) {
    console.log("Search is empty please provide a search word");
    showAlert("Search is empty please provide a search word");
    return;
  }
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
