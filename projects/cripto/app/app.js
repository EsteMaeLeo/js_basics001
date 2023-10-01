const criptoselect = document.querySelector("#criptomonedas");

//on promise

const obtainCrypto = cryptos => new Promise(resolve =>{
    resolve(cryptos)
})

document.addEventListener("DOMContentLoaded", () => {
  consultCrypto();
});

function consultCrypto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((result) => obtainCrypto(result.Data))
    .then(cryptos => selectCrypto(cryptos))
    .catch((error) => console.log(error));
}

function selectCrypto(cryptos){

    cryptos.forEach(crypto => {
        console.log(crypto)
    });
}
