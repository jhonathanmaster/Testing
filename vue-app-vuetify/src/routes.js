import HomeApi from './components/HomeApi.vue';

const lazyHome = () => import('./components/Home.vue');
const lazyAbout = () => import('./components/About.vue');

export const routes = [
  { path: '', component: HomeApi },
  { path: '/homeApi', component: HomeApi },
  { path: '/home', component: lazyHome },
  { path: '/about', component: lazyAbout },
];
export default 'lazyAbout';
