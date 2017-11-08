import Vue from "vue"
import Vuex from "vuex"
import home from "../pages/home/module"
import onedayTour from "../pages/onedayTour/module"
import search from "../pages/search/module"


Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		home: home,
		onedayTour: onedayTour,
		search: search
	}
})