import axios from "axios"


export default {
	state: {
		tourContent: []
	},
	actions: {
		getOnedayInfo(context) {
			axios.get('/static/onedayTour.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data;
						context.commit("changeOnedayInfo",data)
					}
				})
		}
	},
	mutations: {
		changeOnedayInfo(state, data) {
			state.tourContent = data.tourContent;
		}
		
	},
	getters: {
		GetOnedayData(state) {
			if (!state.tourContent.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}