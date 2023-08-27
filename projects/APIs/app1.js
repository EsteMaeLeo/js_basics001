const notifyBtn = document.querySelector("#notify");

notifyBtn.addEventListener("click", () => {
  Notification
    .requestPermission()
    .then(result =>{
        console.log(result);
    });
});
