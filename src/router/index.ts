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
      component: () => import('../components/paginas/ContactApp.vue'),
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../components/paginas/EventosApp.vue'),
    },
    {
      path: '/adoptar',
      name: 'adoptar',
      component: () => import('../components/paginas/AdopcionesApp.vue'),
    },
    {
      path: '/post',
      name: 'posy',
      component: () => import('../components/paginas/PostApp.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../components/paginas/NotFoundApp.vue'),
    },
  ],
});

export default router;
