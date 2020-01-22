//var staticCacheName = 'djangopwa-v1';
//
//self.addEventListener('install', function(event) {
//  event.waitUntil(
//    caches.open(staticCacheName).then(function(cache) {
//      return cache.addAll([
//        '/institute_home'
//      ]);
//    })
//  );
//});
//
//self.addEventListener('fetch', function(event) {
//  var requestUrl = new URL(event.request.url);
//    if (requestUrl.origin === location.origin) {
//      if ((requestUrl.pathname === '/jmp/')) {
//        event.respondWith(caches.match('/institute_home'));
//        return;
//      }
//    }
//    event.respondWith(
//      caches.match(event.request).then(function(response) {
//        return response || fetch(event.request);
//      })
//    );
//});

if ('serviceWorker' in navigator) {
  // sw.js can literally be empty, but must exist
  navigator.serviceWorker.register('/sw.js');
}

self.addEventListener('fetch', (event) => {});