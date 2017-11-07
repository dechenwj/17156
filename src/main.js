
import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import iScroll from "iscroll"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  iScroll,
  template: '<App/>',
  components: { App }
})
