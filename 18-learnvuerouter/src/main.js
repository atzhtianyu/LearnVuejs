import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.test = function () {
  console.log('test');
}

Vue.prototype.name = 'coderwhy';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);
