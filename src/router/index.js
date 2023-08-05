import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  // {
  //   path: '/',
  //   name: '',
  //   component: () => import('../views/HappyHair.vue'),
  // },
  // {
  //   path: '/happyprices',
  //   name: 'happyprices',
  //   component: () => import('../views/HappyCheckout.vue'),
  // },
  {
    path: '/',
    name: '/',
    component: () => import('../views/HollyHair.vue'),
  },
  {
    path: '/holly',
    name: '/holly',
    component: () => import('../views/HollyHair.vue'),
  },
  {
    path: '/hollyprices',
    name: 'hollyprices',
    component: () => import('../views/HollyCheckout.vue'),
  },
  {
    path: '/hidraliso',
    name: '/hidraliso',
    component: () => import('../views/HidralisoPage.vue'),
  },
  {
    path: '/hidralisoprices',
    name: '/hidralisoprices',
    component: () => import('../views/HidralisoCheckout.vue'),
  },
  // {
  //   path: '/hidralisomesmaeprices',
  //   name: '/hidralisomesmaeprices',
  //   component: () => import('../views/HidralisoChechout.vue'),
  // },
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
