import './css/style.css';
import './js/app';

(async () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register('./service.worker.js');
        console.log('sw registered');
      } catch (e) {
        console.log(e);
      }
    });
  }
})();
