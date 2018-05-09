import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import caseDetail from '@/components/case/case'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/case/detail',
      name: 'caseDetail',
      component: caseDetail
    }
  ]
})
