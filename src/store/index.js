import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import cart from '@/store/modules/cart';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
  },
  plugins: [createPersistedState({
    key: 'cart',
    paths: ['cart'],
  })],
});
