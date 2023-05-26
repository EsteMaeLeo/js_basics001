//variables
const form = document.querySelector("#formulario");
const listTweets = document.querySelector("#lista-tweets");
let tweets = [];
//events
eventListeners();

function eventListeners() {
  //safe create tweets
  form.addEventListener("submit", addTweet);

  //load DOM
  document.addEventListener("DOMContentLoaded", () => {
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    console.log(tweets);
    createHTML();
  });
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
  const tweetObj = {
    id: Date.now(),
    tweet,
  };
  tweets = [...tweets, tweetObj];
  console.log(tweets);

  createHTML();
  //reset form
  form.reset();
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

//generate tweets
function createHTML() {
  clearHtml();
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      const li = document.createElement("li");
      li.innerText = tweet.tweet;
      listTweets.appendChild(li);
    });
  }
  safeLocalstorate();
}

//clear html
function clearHtml() {
  while (listTweets.firstChild) {
    listTweets.removeChild(listTweets.firstChild);
  }
}

//localstorage
function safeLocalstorate() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}
