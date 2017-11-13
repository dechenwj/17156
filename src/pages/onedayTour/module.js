import axios from "axios"

export default{
	state:{
		TourConentinfo:[]
	},
	actions:{
		getTourContentInfo(context){
			axios.get("./static/onedayTour.json")
			.then((response)=>{
				if(response.status===200){
					console.log(response.data.data);
					const data=response.data.data.TourConentinfo;
					
					context.commit("changeTourConentinfo",data);
				}
			})
		}
	},
	mutations:{
		changeTourConentinfo(state,data){
			state.TourConentinfo=data;
		},
		refreshInfo(state,data){
			state.TourConentinfo.push(...state.TourConentinfo);
		}
	},
	getters:{
		shouldGetTourDate(state){
			if(!state.TourConentinfo.length){
				return true;
			}else{
				return false;
			}
		}	
	}
}
