import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { routes } from './routes';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const myRouter = new VueRouter({
  routes,
});

new Vue({
  router: myRouter,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
