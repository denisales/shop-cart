import Vue from 'vue';
import PortalVue from 'portal-vue';
import { makeServer } from './miragejs/server';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './filters';
import './styles/global.scss';

Vue.use(PortalVue);

Vue.config.productionTip = false;

// if (process.env.NODE_ENV === 'development') {
makeServer();
// }

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
