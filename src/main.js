import Vue from 'vue'
//
import App from './App.vue';

import router from './routes/';
//
Vue.config.productionTip = false
//
import iView from 'iview';

import store from './store.js';

import 'iview/dist/styles/iview.css';
//
Vue.use(iView);
//
// console.log(Vue);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
