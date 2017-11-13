<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div class="category-container">
				<dl class="category-item" v-for="item in IcoSwiperInfo[0]" :key="item.id">
					<dt class="category-item-img">
						<img :src="item.img" :alt="item.alt">
					</dt>
					<dd class="category-item-title">{{item.title}}</dd>
				</dl>
			</div>
    	</swiper-slide>
	    <swiper-slide>
	    	<div class="category-container category-container-two">
	    		<dl class="category-item" v-for="item in IcoSwiperInfo[1]" :key="item.id">
	    		<router-link :to="item.link">
					<dt class="category-item-img">
						<img :src="item.img" :alt="item.alt">
					</dt>
					<dd class="category-item-title">{{item.title}}</dd>
				</router-link>	
				</dl>
	    	</div>
	    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>

<script scoped>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapState } from "vuex"
	export default {
		
		data() {
  			return {
    			swiperOption: {
	         		direction: 'horizontal',
	         		autoHeight: true,
	         		pagination: '.swiper-pagination',
	         		observeParents: true
    			}
 			}
		},

	    components: {
		    swiper,
		    swiperSlide
	  	},

	  	computed: mapState({
	  		IcoSwiperInfo(state) {
	  			return state.home.IcoSwiperInfo
	  		}
	  	})
  	}
</script>
<style scoped>
.category-container{
	width: 100%;
	height: 3.6rem;
	background: #fff;
}
.category-item{
	width: 25%;
	float: left;
	margin-bottom:-.1rem;
}
.category-item-img{
	width: 100%;
	height: .66rem;
	line-height: .66rem;
	text-align: center;
	padding: .1rem 0;
	margin-top:.2rem; 
	overflow: hidden;
}
.category-item-img img{
	width: .66rem;
	height: .66rem;
}
.category-item-title{
	width: 96%;
	text-align: center;
	padding: .1rem 0;
	color: #212121;
	font-size: .28rem;
	overflow: hidden;
	white-space: nowrap;	
}
</style>