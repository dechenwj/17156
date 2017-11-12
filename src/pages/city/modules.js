import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

export default {
	state: {
        inlandInfo: [],
        inlandHotInfo: [],
        foreignInfo: [],
        foreignHotInfo: []
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
            console.log(state);
            state.inlandInfo = data.inlandInfo;
            state.inlandHotInfo = data.inlandHotInfo;
            state.foreignInfo = data.foreignInfo;
            state.foreignHotInfo = data.foreignHotInfo;
		}
		
	},
	getters: {
        shouldGetCityData(state) {
            if(!state,inlandInfo.length &&
               !state,inlandHotInfo.length &&
               !state.foreignInfo.length &&
               !state.foreignHotInfo.length ) {
                   return true;
               }else{
                   return false;
               }
        }
    }
}