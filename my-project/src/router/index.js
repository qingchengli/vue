import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/test/hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: hello
    }
  ]
})
