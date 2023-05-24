//variables
const form = document.querySelector("#formulario");
const listTweets = document.querySelector("#lista-tweets");
let tweets = [];
//events
eventListeners();

function eventListeners() {
  form.addEventListener("submit", addTweet);
}

//functions
function addTweet(e) {
  e.preventDefault();
  const tweet = document.querySelector("#tweet").value;
  console.log(tweet);
  //check empty string
  if (tweet === "") {
    showError("Tweet cant be empty text");
    return;
  }
}

//show error
function showError(error) {
  const msgError = document.createElement("p");
  msgError.textContent = error;
  msgError.classList.add("error");
  const content = document.querySelector("#contenido");
  content.appendChild(msgError);

  setTimeout(() => {
    msgError.remove();
  }, 3000);
}
