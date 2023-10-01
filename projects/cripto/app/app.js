const criptoselect = document.querySelector("#criptomonedas");

//on promise

const obtainCripto = cripto => new Promise(resolve =>{
    resolve(cripto)
})

document.addEventListener("DOMContentLoaded", () => {
  selectCripto();
});

function selectCripto() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((result) => obtainCripto(result.Data))
    .then(cripto => console.log(cripto))
    .catch((error) => console.log(error));
}

