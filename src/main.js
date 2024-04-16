import { createApp } from 'vue';
import '@sass/index.scss';
import App from './App.vue';
import { vTooltip } from 'floating-vue';
import 'floating-vue/dist/style.css';

createApp(App)
  .directive('tooltip', vTooltip)
  .mount('#app');
