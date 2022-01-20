// /* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-globals */
// /* eslint-disable import/no-extraneous-dependencies */
// import { registerRoute } from 'workbox-routing';
// import {
//   NetworkFirst,
//   StaleWhileRevalidate,
//   CacheFirst,
// } from 'workbox-strategies';
// import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// import { precacheAndRoute } from 'workbox-precaching';

// precacheAndRoute(self.__WB_MANIFEST);

// registerRoute(
//   ({ request }) => {
//     console.log(request);
//     return request.mode === 'navigate';
//   },
//   new NetworkFirst({
//     cacheName: 'pages',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   }),
// );

// registerRoute(
//   ({ request }) => request.destination === 'style'
//     || request.destination === 'script'
//     || request.destination === 'worker',
//   new StaleWhileRevalidate({
//     cacheName: 'assets',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [200],
//       }),
//     ],
//   }),
// );

// registerRoute(
//   ({ url }) => url.pathname.startsWith('/news'),
//   new CacheFirst({
//     cacheName: 'pages',
//   }),
// );

self.addEventListener('install', (ev) => {
  console.log(ev);
});
