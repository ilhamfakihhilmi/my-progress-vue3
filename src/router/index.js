import { createRouter, createWebHistory } from 'vue-router'

import Submenu1Page from '../views/Submenu1Page.vue'
import Submenu2Page from '../views/Submenu2Page.vue'
import Submenuproject1Page from '../views/SubmenuProject1.vue'
import Submenuproject2Page from '../views/SubmenuProject2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/submenu-1-1', name: 'Submenu1', component: Submenu1Page },
    { path: '/submenu-1-2', name: 'Submenu2', component: Submenu2Page },
    {
      path: '/submenuproject-1-2',
      name: 'Submenuproject1',
      component: Submenuproject1Page,
    },
    {
      path: '/submenuproject-2-2',
      name: 'Submenuproject2',
      component: Submenuproject2Page,
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
