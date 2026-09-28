// Service Worker mínimo — só existe para receber o arquivo compartilhado
// pelo Android (Web Share Target), quando o app está "instalado"
// (Adicionar à tela inicial). Não faz cache nem funciona offline.

var DB_NAME = "camaco-share-store";
var STORE_NAME = "files";

function openDb() {
  return new Promise(function (resolve, reject) {
    var req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = function () {
      req.result.createObjectStore(STORE_NAME);
    };
    req.onsuccess = function () { resolve(req.result); };
    req.onerror = function () { reject(req.error); };
  });
}

function storeFile(file) {
  return openDb().then(function (db) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(STORE_NAME, "readwrite");
      tx.objectStore(STORE_NAME).put(file, "pending");
      tx.oncomplete = function () { resolve(); };
      tx.onerror = function () { reject(tx.error); };
    });
  });
}

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
  var url = new URL(event.request.url);
  var isShareTarget = event.request.method === "POST" && /\/share-target\/?$/.test(url.pathname);
  if (!isShareTarget) return;

  event.respondWith((function () {
    return event.request.formData().then(function (formData) {
      var file = formData.get("file");
      var work = file ? storeFile(file) : Promise.resolve();
      return work.then(function () {
        return Response.redirect("./?shared=1", 303);
      });
    }).catch(function () {
      return Response.redirect("./?shared=0", 303);
    });
  })());
});
