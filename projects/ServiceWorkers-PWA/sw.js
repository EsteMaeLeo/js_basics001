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
const OFFLINE_URL = 'error.html';
self.addEventListener("fetch", (e) => {
  
      /*e.respondWith(
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
      );*/
      
    e.respondWith((async () => {
        try {
          // First, try to use the navigation preload response if it's supported.
          const preloadResponse = await e.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }
          console.log(e.request)
          const networkResponse = await fetch(e.request);
          console.log(networkResponse)
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is likely
          // due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          console.log('Fetch failed; returning offline page instead.', error);
  
          const cache = await caches.open(CACHE_NAME);
          const cachedResponse = await cache.match(OFFLINE_URL);
          return cachedResponse;
        }
      })());
    });

