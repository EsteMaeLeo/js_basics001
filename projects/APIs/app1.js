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
