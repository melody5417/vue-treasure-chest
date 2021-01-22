import Vue from 'vue';
// 启用mock
import '../mock/index.js';
import App from './App.vue';
import router from './router/router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
