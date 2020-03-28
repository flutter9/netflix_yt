'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/assets/assets/movie3.jpg": "bb9e2008ae8f2f331b8d7d62ed79c67c",
"/assets/assets/movie6.jpg": "0226efc19731cd6eb998e0dd01d70b8d",
"/assets/assets/joker.jpg": "4871898fea92b7cd4565504022894ff4",
"/assets/assets/movie4.jpg": "33692301a2b28090267a394832063941",
"/assets/assets/logo.png": "3497bcfda5c65b948b667929aa7a45a1",
"/assets/assets/movie2.jpg": "db65e014feb2656ebc9993b10dac31b5",
"/assets/assets/movie5.jpg": "9e7f0ba6c0ccef4f3a51d0e53b52a97e",
"/assets/assets/movie1.jpg": "bffffa8c03cf540af216487d2f8ce5f4",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/AssetManifest.json": "f90cf61d44fa405562915e9c1e7749c4",
"/assets/LICENSE": "d57b2a576e7fbc1ecdcc841fb6c04ed3",
"/main.dart.js": "b68c0ce4de0560c94310047aedca7d0a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
