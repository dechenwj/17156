import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import tourDetails from "../pages/tourDetails/module.js"
import onedayTour from "../pages/onedayTour/module.js"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		swiperInfo: [],
		IcoSwiperInfo: [],
		HotRecommend: [],
		Weekend: []
	},
	actions: {
		getInfo(context) {
			axios.get('/static/index.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data;
						context.commit("changeInfo",data)
					}
				})
		}
	},
	mutations: {
		changeInfo(state, data) {
			state.swiperInfo = data.swiperInfo;
			state.IcoSwiperInfo = data.IcoSwiperInfo;
			state.HotRecommend = data.HotRecommend;
			state.Weekend = data.Weekend;
		}
		
	},
	getters: {},

	modules:{
		tourDetails:tourDetails,
		onedayTour:onedayTour
	}
})

