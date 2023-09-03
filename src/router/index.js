import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../views/Hidraliso/HidralisoPage.vue'),
  },
  {
    path: '/holly',
    name: '/holly',
    component: () => import('../views/Holly/HollyHair.vue'),
  },
  {
    path: '/hollyprices',
    name: 'hollyprices',
    component: () => import('../views/Holly/HollyCheckout.vue'),
  },
  {
    path: '/hidraliso',
    name: '/hidraliso',
    component: () => import('../views/Hidraliso/HidralisoPageReconstruhair.vue'),
  },
  {
    path: '/hidralisoprices',
    name: '/hidralisoprices',
    component: () => import('../views/Hidraliso/HidralisoCheckout.vue'),
  },
  {
    path: '/rosamazonica',
    name: '/rosamazonica',
    component: () => import('../views/RAmazonica/RosaAmazonca.vue'),
  },
  // {
  //   path: '/hidralisoarganprices',
  //   name: '/hidralisoarganprices',
  //   component: () => import('../views/HidralisoChechoutArganOil.vue'),
  // }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
