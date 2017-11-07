import axios from "axios"


export default {
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
	getters: {
		shouldGetData(state) {
			if (!state.swiperInfo.length &&
		 		!state.IcoSwiperInfo.length &&
		 		!state.HotRecommend.length &&
		 		!state.Weekend) {
				return true;
			}else {
				return false;
			}
		}
	}
}