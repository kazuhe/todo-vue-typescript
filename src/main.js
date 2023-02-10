import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/** msw を利用して API をモックする */
if (import.meta.env.DEV) {
  (async () => {
    const { worker } = await import("./mocks/browser");
    worker.start();
  })();
}

createApp(App).mount('#app')
