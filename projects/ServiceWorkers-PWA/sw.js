const nameCache = "apv-v1";

const files = [
  "/",
  "index.html",
  "css/bootstrap.css",
  "css/styles.css",
  "js/app.js",
  "js/apv.js",
];

//install the service worker

self.addEventListener("install", (e) => {
  console.log("Servicer worker installed");

  e.waitUntil(
    caches.open(nameCache).then((cache) => {
      console.log("installing cache");
      cache.addAll(files);
    })
  );
});

//activate service worker
self.addEventListener("activate", (e) => {
  console.log("Service Worker activated");

});

//event fetch to download files

self.addEventListener("fetch", (e) => {
  console.log("fetch event ", e);

  e.respondWith(
    caches.match(e.request).then((response) => {
      console.log(response);
      return response;
    })
  );
});
