import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Search from '@/pages/search/Search'
import viewList from '@/pages/viewList/Home'
import CityList from '@/pages/city/CityList'
import Indent from '@/pages/indent/indent'
import OnedayTour from '@/pages/onedayTour/Home'
import thePalaceMuseum from '@/pages/thePalaceMuseum/thePalaceMuseum'
import Tourdetails from '@/pages/tourDetails/tourDetails'

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
      path: '/cityList',
      name: 'cityList',
      component: CityList
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
    },
    {
    	path:'/thePalaceMuseum',
    	name:'thePalaceMuseum',
    	component:thePalaceMuseum
	  },
    {
      path:'/tourDetails',
      name:"tourDetails",
      component:Tourdetails

    }
  ]
})

