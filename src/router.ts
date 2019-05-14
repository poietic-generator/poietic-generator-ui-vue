import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Play from './views/Play.vue';
import LiveView from './views/LiveView.vue';
import HistoryView from './views/HistoryView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/live-view',
      name: 'live-view',
      component: LiveView,
    },
    {
      path: '/history-view',
      name: 'history-view',
      component: HistoryView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
