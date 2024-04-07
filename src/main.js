import { createApp } from 'vue';
import '@sass/index.scss';
import App from './App.vue';
import { router } from '@/router/index.js';
import { vTooltip } from 'floating-vue';
import 'floating-vue/dist/style.css';

createApp(App)
  .use(router)
  .directive('tooltip', vTooltip)
  .mount('#app');
