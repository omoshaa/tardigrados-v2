/*
  TardiStudy - Service Worker
  Cache simples (stale-while-revalidate) + fallback para navegação.
*/

const CACHE_NAME = "tardistudy-v2-2025-12-22-2";

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/tardigrade-icon.png",
  "./assets/tardigrade-icon-192.png",
  "./assets/tardigrade-icon-512.png",

  "./css/main.css",
  "./css/pages.css",
  "./css/mapa.css",
  "./css/identificacao.css",
  "./css/projeto-pune.css",
  "./css/welcome.css",

  "./js/main.js",
  "./js/mapa.js",
  "./js/identificacao.js",
  "./js/welcome.js",

  "./html/home.html",
  "./html/mapa.html",
  "./html/identificacao.html",
  "./html/sobre-tardigrados.html",
  "./html/projeto-pune.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  // Evita cachear requests cross-origin (ex: tiles do OSM, CDNs)
  // Isso impede crescimento infinito do cache.
  if (url.origin !== self.location.origin) {
    return;
  }

  // Navegação (HTML): network-first para sempre tentar conteúdo fresco
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("./index.html"))
        )
    );
    return;
  }

  // Outros assets: stale-while-revalidate
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    })
  );
});
