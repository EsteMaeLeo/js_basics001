const criptoselect = document.querySelector("#criptomonedas");

document.addEventListener("DOMContentLoaded", () => {
  selectCripto();
});

function selectCripto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
