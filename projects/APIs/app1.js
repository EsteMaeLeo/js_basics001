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

    newNotify.onclick = function(){
        window.open('https://github.com/EsteMaeLeo')
    };
  }
});
