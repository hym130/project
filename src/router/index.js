import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import solt from '@/components/slot.vue'
import vueX from '@/components/vuex.vue'
import listmap from '@/components/listmap.vue'
import excals from '@/components/excal.vue'
import international from '@/components/international.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slot',
      component: solt
    },
    {
      path: '/vuex',
      component: vueX
    },
    {
      path: '/listmap',
      component: listmap
    },
    {
      path: '/excal',
      component: excals
    },
    {
      path: '/international',
      component: international
    },
  ]
})
