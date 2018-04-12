// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('focus',{
  bind : function (el,msg) {
    alert ("添加成功");
  },

  update : function (el,binding) {
    el.style.color = binding.value.color;
    el.style.fontSize = bingding.value.fontSize;
  },

  unbind : function (el,binding) {
    alert ("移除成功")
  }
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
