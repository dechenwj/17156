import axios from "axios"

export default {
	state: {
		viewContent: []
	},
	actions: {
		getViewListInfo(context) {
			axios.get('/static/viewList.json')
				.then((response) => {
					if (response.status === 200) {
						const { data } = response.data;
						context.commit("changeViewListInfo",data);
 					}
				})
		}
	},
	mutations: {
		changeViewListInfo(state,data) {
			state.viewContent = data.viewContent
		},
		viewListRefresh(state) {
			state.viewContent.push(...state.viewContent)
		}
	},
	getters: {
		GetViewListData(state) {
			if( !state.viewContent.length) {
				return true;
			}else {
				return false;
			}
		}
	}
}