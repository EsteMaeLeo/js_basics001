const notifyBtn = document.querySelector("#notify");
const checkNotify = document.querySelector("#checkNotify");

notifyBtn.addEventListener("click", () => {
  Notification.requestPermission().then((result) => {
    console.log(result);
  });
});

checkNotify.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    const newNotify = new Notification("this is the Notification", {
      icon: "img/twitter.png",
      body: "Sending notifications is easy just allowed",
    });

    newNotify.onclick = function () {
      window.open("https://github.com/EsteMaeLeo");
    };
  }
});

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);

function updateStatus() {
  if (navigator.onLine) {
    console.log("is connected");
  } else {
    console.log("is not connected");
  }
}

const openBtn = document.querySelector("#full-screen");
const closeBtn = document.querySelector("#exit-full-screen");

openBtn.addEventListener("click", fullScreen);
closeBtn.addEventListener("click", closeScreen);

function fullScreen() {
  document.documentElement.requestFullscreen();
}

function closeScreen() {
  document.exitFullscreen();
}

document.addEventListener("visibilitychange", () => {
  //console.log(document.visibilityState);
  if (document.visibilityState === "visible") {
    console.log("visible");
  } else {
    console.log("not visible");
  }
});

const exit = document.querySelector("#exit");
const micro = document.querySelector("#microphone");

micro.addEventListener("click", speechApi);

function speechApi() {
  const speechRecog = webkitSpeechRecognition;

  const recognition = new speechRecog();

  recognition.start();

  recognition.onstart = function () {
    exit.classList.add("mostrar");
    exit.textContent = "Listining...";
  };

  recognition.onspeechend = function () {
    exit.textContent = "stop recording";
    recognition.stop();
  };

  recognition.onresult = function (e) {
    console.log(e.results);

    const { confidence, transcript } = e.results[0][0];

    const speech = document.createElement("p");
    speech.innerHTML = `Record: $transcript`;

    const confe = document.createElement("p");
    confe.innerHTML = `Confidence ${parseInt(confidence * 100)} %`;

    exit.appendChild(speech);
  };
}
