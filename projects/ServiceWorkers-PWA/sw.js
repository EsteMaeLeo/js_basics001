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
});

/*
self.addEventListener("activate", (e) => {
  // delete any caches that aren't in expectedCaches
  // which will get rid of static-v1
  e.waitUntil(
    caches
      .keys()
      .then((keyList) =>
        Promise.all(
          keyList.map((key) => {
            if (!nameCache.includes(key)) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => {
        console.log("V2 now ready to handle fetches!");
      })
  );
});*/

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
});

temp
        if(cacheResponse===undefined){
            caches.match("error.html")
            .then((response) => {
                return response;
              })
            //return
        }

*/

const OFFLINE_URL = "error.html";

self.addEventListener("fetch", (e) => {
  console.log(location.origin);
  console.log(e.request);
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheResponse) => {
        console.log(cacheResponse);

        return cacheResponse || fetch(e.request);
      })
      //.catch(() => caches.match("error.html"))
  );
});
