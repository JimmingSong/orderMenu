import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import btn from '@/components/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/test',
    	name:'test',
    	component:test
    },
    {
      path:'/btn',
      name:'btn',
      component:btn
    }
  ]
})
