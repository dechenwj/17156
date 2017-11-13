import axios from "axios"
export default{
	state: {
  	headerInfo:[],
    introductions:[],
    arrange:[],
    costinner:[],
    costoutter:[],
    users:[],
  },
  actions:{
  	getHeaderInfo(context){
  		axios.get("./static/TourDetails.json")
			.then((response)=>{
				if(response.status===200){
				const data=response.data.data;
				context.commit("changetourInfo",data);
				}
			})
  	}
  },
  mutations: {
  	changetourInfo(state,data){
  		state.headerInfo=data.headerInfo;
      state.introductions=data.introductions;
      state.arrange=data.arrange;
      state.costinner=data.costinner;
      state.costoutter=data.costoutter;
      state.users=data.users;
  	}
  },
  getters:{
  	shouldGetDate(state){
  		if(!state.headerInfo.length){
  			return true;
  		}else{
  			return false;
  		}
  	}
  }
}