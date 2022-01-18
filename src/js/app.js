import Loading from './ifLoad';
import Server from './server';

console.log('app started');

const server = new Server();
const load = new Loading(server);

load.events();

// (async () => {
//   try {
//     if (navigator.serviceWorker) {
//       await navigator.serviceWorker.register('/service.worker.js', {
//         scope: './',
//       });
//       console.log('sw registered');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// })();

(async () => {
  if (navigator.serviceWorker) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('./service.worker.js');
        console.log('service worker is registered');
      } catch (e) {
        console.log(e);
      }
    });
  }
})();
