const cacheName = 'ahj-cache-v1';

const cacheFiles = [
  '/',
  '/img/js.png',
  '/js/app.js',
];

// async function putFilesToCache(files) {
//   const cache = await caches.open(cacheName);
//   await cache.addAll(files);
// }

// async function removeOldCache(retain) {
//   const keys = await caches.keys();
//   return Promise.all(
//     keys.filter((key) => !retain.includes(key))
//       .map((key) => caches.delete(key)),
//   );
// }

self.addEventListener('install', (evt) => {
  console.log('install');
  evt.waitUntil((async () => {
    // await putFilesToCache(cacheFiles);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (evt) => {
  console.log('activate');
  evt.waitUntil((async () => {
    // await removeOldCache([cacheName]);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (evt) => {
  const requestURL = new URL(evt.request.url);
  console.log(requestURL.pathname);
  if (!requestURL.pathname.startsWith('/news')) {
    return;
  }

  evt.respondWith((async () => {
    const cache = await caches.open(cacheName);
    const clients = await self.clients.matchAll();
    const client = clients.find((item) => item.id === evt.clientId);

    try {
      const response = await fetch(evt.request);

      if (response.statusText === 'OK') {
        evt.waitUntil(cache.put(evt.request, response.clone()));
        console.log(`Данные загружены из сервера. Статус ответа: ${response.status}.`);
        return response;
      }

      const cachedResponse = await cache.match(evt.request);
      if (cachedResponse) {
        console.log(`Данные загружены из кэша. Статус ответа: ${response.status}`);
        return cachedResponse;
      }
    } catch (err) {
      return (() => client.postMessage('error'))();
    }

    return (() => client.postMessage('error'))();
  })());
});
