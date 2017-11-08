import axios from "axios"


export default {
	state: {
		SwiperInfo: [],
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
			state.SwiperInfo = data.SwiperInfo;
			state.IcoSwiperInfo = data.IcoSwiperInfo;
			state.HotRecommend = data.HotRecommend;
			state.Weekend = data.Weekend;
		}
		
	},
	getters: {
		shouldGetData(state) {
			if (!state.SwiperInfo.length &&
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