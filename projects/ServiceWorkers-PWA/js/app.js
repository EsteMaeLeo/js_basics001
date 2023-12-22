if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((register) => console.log("Service Worker Register", register))
    .catch((error) =>
      console.log("Error to register the service worker", error)
    );
} else {
  console.log("Service Workers dont supporter by the navigator");
}
