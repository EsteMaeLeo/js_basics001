const criptoselect = document.querySelector("#criptomonedas");
const form = document.querySelector("#formulario");

//on promise

const obtainCrypto = (cryptos) =>
  new Promise((resolve) => {
    resolve(cryptos);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultCrypto();

  form.addEventListener("submit", submitform)
});

function consultCrypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((result) => obtainCrypto(result.Data))
    .then((cryptos) => selectCrypto(cryptos))
    .catch((error) => console.log(error));
}

function selectCrypto(cryptos) {
  cryptos.forEach((crypto) => {
    console.log(crypto);
    const { FullName, Name } = crypto.CoinInfo;
console.log(FullName)
    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;
    criptoselect.appendChild(option);
  });
}


function submitform(e){
    e.preventDefault()
}