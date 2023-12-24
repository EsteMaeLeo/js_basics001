const nameCache = "apv-v1";

const files = [
  "/",
  "index.html",
  "error.html",
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

/*self.addEventListener("fetch", (e) => {
console.log(e.request)
  e.respondWith(
    caches
      .match(e.request)
      .then((response) => {
        return response;
      })
      .catch(() => caches.match("error.html"))
  );
});*/
const CACHE_NAME = 'offline';
self.addEventListener("fetch", (e) => {
    console.log(e.request)
      e.respondWith(
        caches
          .match(e.request)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            console.log('Fetch failed; returning offline page instead.', error);

            const cache =  caches.open(CACHE_NAME);
            const cachedResponse =  cache.match("/error.html");
            return cachedResponse;
          })
      );
    });