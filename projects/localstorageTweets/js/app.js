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
function addTweet(e){
    e.preventDefault();
    console.log(e);
}
