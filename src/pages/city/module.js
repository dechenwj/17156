import axios from "axios"


export default {
	state: {
        inlandInfo: [],
        inlandHotInfo: [],
        foreignInfo: [],
        foreignHotInfo: [],
       // alphabet: []
    },
    
	actions: {
		getCityInfo(context) {
			axios.get('/static/city.json')
				.then((response) => {
					if (response.status === 200) {
						const {data} = response.data;
						context.commit("changeCityInfo",data)
					}
				})
		}
	},
	mutations: {
		changeCityInfo(state, data) {
            state.inlandInfo = data.inlandInfo;
            state.inlandHotInfo = data.inlandHotInfo;
            state.foreignInfo = data.foreignInfo;
            state.foreignHotInfo = data.foreignHotInfo;
        },
        // changeSidebarInfo(state, data) {
        //     state.alphabet = data;
        // }
		
	},
	getters: {
        shouldGetCityData(state) {
            if(!state.inlandInfo.length &&
               !state.inlandHotInfo.length &&
               !state.foreignInfo.length &&
               !state.foreignHotInfo.length ) {
                   return true;
               }else{
                   return false;
               }
        }
    }
}