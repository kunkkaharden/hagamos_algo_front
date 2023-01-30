import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import 'primeicons/primeicons.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
const app = createApp(App);

app.use(createPinia());
app.use(router);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 10000 * 60,
      },
    },
  },
});
app.mount('#app');
