import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { APP_ROUTES } from '@constants';

const BiomePage = async () => await import('@pages/BiomePage.vue');
const RecommendationPage = async () => await import('@pages/RecommendationPage.vue');
const MeaningPage = async () => await import('@pages/MeaningPage.vue');

const routes = [
  {
    path: APP_ROUTES.MAIN_PAGE,
    redirect: APP_ROUTES.BIOME_PAGE,
  },
  {
    path: APP_ROUTES.BIOME_PAGE,
    component: BiomePage,
    name: 'BiomePage',
  },
  {
    path: APP_ROUTES.MEANING_PAGE,
    component: MeaningPage,
    name: 'MeaningPage',
  },
  {
    path: APP_ROUTES.RECOMMENDATION_PAGE,
    component: RecommendationPage,
    name: 'RecommendationPage',
  },
  {
    path: APP_ROUTES.NO_OVERLAPS,
    redirect: APP_ROUTES.BIOME_PAGE,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});