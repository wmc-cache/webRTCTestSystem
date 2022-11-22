import { createRouter, createWebHashHistory, Router } from 'vue-router';

const router: Router = createNewRouter()

function createNewRouter() {
  return createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      }
    ]
  });
}

export default router;