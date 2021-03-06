import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import caseDetail from '@/components/case/case'
import admin from '@/components/admin/admin'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
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
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
