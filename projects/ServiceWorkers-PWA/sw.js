const nameCache = "apv-v3";

const files = [
  "/",
  "index.html",
  "error.html",
  "css/bootstrap.css",
  "css/styles.css",
  "js/app.js",
  "js/apv.js",
];

console.log(files);

//install the service work

self.addEventListener("install", (e) => {
  console.log("Servicer worker installed");

  e.waitUntil(
    caches.open(nameCache).then((cache) => {
      console.log("installing cache ", cache);
      cache.addAll(files);
    })
  );
});

//activate service worker

self.addEventListener("activate", (e) => {
  console.log("Service Worker activated");

  //delete old cache
  e.waitUntil(
    caches.keys().then((keys) => {
      console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== nameCache) //return array with not equal names caches
          .map((key) => caches.delete(key)) //delete each none equal
      );
    })
  );
});

const OFFLINE_URL = "error.html";

self.addEventListener("fetch", (e) => {
  console.log(location.origin);
  console.log(e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) => {
        return cacheResponse || fetch(e.request);
      })
      .catch(() => caches.match("error.html"))
    //.catch(() => caches.match("error.html"))
  );
});
