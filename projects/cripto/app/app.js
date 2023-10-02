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

    const option = document.createElement("OPTION");
    option.value = Name;
    option.textContent = FullName;
    criptoselect.appendChild(option);
  });
}

function readValue(e) {

  objSearch[e.target.name] = e.target.value;
  //objSearch.currency = e.target.value

}

function submitform(e) {
  e.preventDefault();

  const { currency, crypto } = objSearch;
  console.log(currency);
  if (currency === "" || crypto === "") {
    showAlert("Fields are mandatory");
    return;
  }

  fetchCrypto();
}

function fetchCrypto() {
  const { currency, crypto } = objSearch;
  console.log(currency)
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`;

  const urlFullData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

  fetch(urlFullData)
    .then((response) => response.json())
    .then((quote) =>  showQuoteHTML(quote))
    .catch((error) => console.log(error));
}

function showQuoteHTML(quote) {
 const { currency, crypto } = objSearch;
  console.log(quote.DISPLAY[crypto][currency]);
  
}
function showAlert(msg) {
  const existAlert = document.querySelector(".error");
  if (!existAlert) {
    const div = document.createElement("DIV");
    div.classList.add("error");
    div.textContent = msg;
    form.appendChild(div);

    setTimeout(() => {
      div.remove();
    }, 3000);
  }
}
