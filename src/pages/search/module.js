import axios from "axios"

export default {
	state: {
		list: [],
		cityList: []
	},
	actions: {
		getSearchInfo(context) {
			axios.get('/static/search.json')
				.then((response) => {
					if (response.status === 200) {
						const { data } = response.data;
						context.commit("changeSearchInfo",data);
 					}
				})
		}
	},
	mutations: {
		changeSearchInfo(state,data) {
			state.list = data.list,
			state.cityList = data.cityList
		}
	},
	getters: {
		GetSearchData(state) {
			if( !state.list.length &&
				!state.cityList.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}