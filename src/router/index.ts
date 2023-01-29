import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/paginas/HomeApp.vue'),
    },
    {
      path: '/contactos',
      name: 'contactos',
      component: () => import('../components/paginas/contactApp.vue'),
    },
  ],
});

export default router;
