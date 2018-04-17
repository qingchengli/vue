import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from './../pages/indexPage'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component : indexPage
    },
  //   {
  //     path: '/hello',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   },
  //   {
  //     path: '/kiss/:color/detail/:width',
  //     name: 'kissWorld',
  //     component: kiss
  //   }
  // 
]}
)
