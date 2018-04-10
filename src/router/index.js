import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Iview from '@/components/Iview'
import Iview2 from '@/components/Iview2'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/iview'
    }, {
      path: '/iview',
      name: 'iview',
      component: Iview
    }, {
      path: '/iview2',
      name: 'iview2',
      component: Iview2
    }
  ]
})
