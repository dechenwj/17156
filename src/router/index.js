import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import viewList from '@/pages/viewList/Home'
import Indent from '@/pages/indent/indent'
import OnedayTour from '@/pages/onedayTour/Home'
import thePalaceMuseum from '@/pages/thePalaceMuseum/thePalaceMuseum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/viewList',
      name: 'viewList',
      component: viewList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/indent',
      name: 'indent',
      component: Indent
    },
    {
      path:'/onedayTour',
      name:"onedayTour",
      component:OnedayTour
    },{
    	path:'/thePalaceMuseum',
    	name:'thePalaceMuseum',
    	component:thePalaceMuseum
    }
  ]
})

