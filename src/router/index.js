import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const BiomePage = async () => await import('@pages/BiomePage.vue');
const AdvicePage = async () => await import('@pages/AdvicePage.vue');
const MeaningPage = async () => await import('@pages/MeaningPage.vue');

const routes = [
  {
    path: '/',
    redirect: '/biome',
  },
  {
    path: '/biome',
    component: BiomePage,
    name: 'BiomePage',
  },
  {
    path: '/advice',
    component: AdvicePage,
    name: 'AdvicePage',
  },
  {
    path: '/meaning',
    component: MeaningPage,
    name: 'MeaningPage',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/biome',
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});