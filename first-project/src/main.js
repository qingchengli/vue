// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#layout',
  router : router,
  components: {layout },
  template: '<layout/>'
})
