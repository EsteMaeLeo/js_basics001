const criptoselect = document.querySelector("#criptomonedas");
const form = document.querySelector("#formulario");
const currencySelect = document.querySelector("#moneda");

const objSearch = {
  currency: "",
  crypto: "",
};

//on promise

const obtainCrypto = (cryptos) =>
  new Promise((resolve) => {
    resolve(cryptos);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultCrypto();

  form.addEventListener("submit", submitform);

  currencySelect.addEventListener("change", readValue);
  criptoselect.addEventListener("change", readValue);
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
    const { FullName, Name } = crypto.CoinInfo;
    console.log(FullName);
    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;
    criptoselect.appendChild(option);
  });
}

function readValue(e) {
  console.log(e.target.value);
  objSearch[e.target.name] = e.target.value;
  //objSearch.currency = e.target.value
  console.log(objSearch);
}

function submitform(e) {
  e.preventDefault();

  const { currency, crypto } = objSearch;
  console.log(currency);
  if (currency === "" || crypto === "") {
    showAlert("Fields are mandatory");
    return;
  }
}

function showAlert(msg) {
  const div = document.createElement("DIV");
  div.classList.add("error");
  div.textContent = msg;
  form.appendChild(div);

  setTimeout(() => {
    div.remove();
  }, 3000);
}
