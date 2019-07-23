/* eslint-disable import/first */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PageIndex from '@/views/page-index'
import PageLogin from '@/views/page-login'
import PageContent from '@/views/page-content'
import PageSearch from '@/views/page-search'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: PageIndex
    },
    {
      path: '/login',
      name: 'login',
      component: PageLogin
    },
    {
      path: '/content',
      name: 'content',
      component: PageContent
    },
    {
      path: '/search',
      name: 'search',
      component: PageSearch
    }
  ]
})
