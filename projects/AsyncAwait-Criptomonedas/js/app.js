const criptoselect = document.querySelector("#criptomonedas");
const form = document.querySelector("#formulario");
const currencySelect = document.querySelector("#moneda");
const result = document.querySelector("#resultado");
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

async function consultCrypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  //showSpinner();

  /* fetch(url)
    .then((response) => response.json())
    .then((result) => obtainCrypto(result.Data))
    .then((cryptos) => selectCrypto(cryptos))
    .catch((error) => console.log(error));*/

  try {
    const response = await fetch(url);
    const result = await response.json();
    const cryptos = await obtainCrypto(result.Data);
    selectCrypto(cryptos);
  } catch (error) {
    console.log(error);
  }
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

async function fetchCrypto() {
  const { currency, crypto } = objSearch;

  const url = `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${currency}`;

  const urlFullData = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

  showSpinner();

  /* fetch(urlFullData)
    .then((response) => response.json())
    .then((quote) => showQuoteHTML(quote))
    .catch((error) => console.log(error));*/

  try {
    const response = await fetch(urlFullData);
    const quote = await response.json();
    showQuoteHTML(quote);
  } catch (error) {
    console.log(error);
  }
}

function showQuoteHTML(quote) {
  cleanHTML();
  const { currency, crypto } = objSearch;
  console.log(quote.DISPLAY[crypto][currency]);

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } =
    quote.DISPLAY[crypto][currency];

  const price = document.createElement("p");
  price.classList.add("precio");
  price.innerHTML = `Price is <span>${PRICE}</span>`;

  const priceHigh = document.createElement("p");
  priceHigh.innerHTML = `Highest Price of the day: <span>${HIGHDAY}</span>`;

  const priceLow = document.createElement("p");
  priceLow.innerHTML = `Lowest Price of the day: <span>${LOWDAY}</span>`;

  const lastHour = document.createElement("p");
  lastHour.innerHTML = `Variation for the last 24 hours: <span>${CHANGEPCT24HOUR}%</span>`;

  const lastUpdate = document.createElement("p");
  lastUpdate.innerHTML = `Last update: <span>${LASTUPDATE}</span>`;

  result.appendChild(price);
  result.appendChild(priceHigh);
  result.appendChild(priceLow);
  result.appendChild(lastHour);
  result.appendChild(lastUpdate);
}

function cleanHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function showSpinner() {
  cleanHTML();
  const spinner = document.createElement("DIV");
  spinner.classList.add("sk-cube-grid");
  spinner.innerHTML = `<div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
  </div>`;

  result.appendChild(spinner);
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
