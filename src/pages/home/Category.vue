<template>
	<swiper :options="swiperOption" ref="mySwiper">
		<swiper-slide>
			<div class="category-container">
				<dl class="category-item" v-for="item in content1">
					<dt class="category-item-img">
						<img :src="item.img">
					</dt>
					<dd class="category-item-title">{{item.title}}</dd>
				</dl>
			</div>
    	</swiper-slide>
	    <swiper-slide>
	    	<div class="category-container category-container-two">
	    		<dl class="category-item" v-for="item in content2">
					<dt class="category-item-img">
						<img :src="item.img">
					</dt>
					<dd class="category-item-title">{{item.title}}</dd>
				</dl>
	    	</div>
	    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  	</swiper>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default {
		data() {
  			return {
    			swiperOption: {
	         		direction: 'horizontal',
	         		autoHeight: true,
	         		pagination: '.swiper-pagination',
	         		observeParents: true
    			},
    			content1:[
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",title:"城市风光"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png",title:"玻璃栈道"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png",title:"名胜古迹"},
    				{img:"https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png",title:"周边游"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",title:"必游榜单"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png",title:"秋色美"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",title:"游乐场"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",title:"泡温泉"}
    			],
    			content2:[
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",title:"景点门票"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",title:"动植物园"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png",title:"故宫"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",title:"一日游"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png",title:"自然风光"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png",title:"古北水镇"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png",title:"景点讲解"},
    				{img:"http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png",title:"全部"}
    			],

 			}
		},
	    components: {
		    swiper,
		    swiperSlide
	  	}
  	}
</script>
<style type="text/css">
.category-container{
	width: 100%;
	height: 3.6rem;
}
.category-item{
	width: 25%;
	float: left;
	margin-bottom:-.1rem;
}
.category-item-img{
	width: 100%;
	text-align: center;
	padding: .1rem 0;
	margin-top:.2rem; 
}
.category-item-img img{
	width: .66rem;
	height: .66rem;
}
.category-item-title{
	width: 100%;
	text-align: center;
	padding: .1rem 0;
	color: #212121;
	font-size: .28rem;
	overflow: hidden;
	white-space: nowrap;	
}
</style>