<template>
	<div class="weekend-content">
		<h3 class="weekend-title">周末去哪儿</h3>
		<div class="goto" v-for="item in weekendList">
			<div class="goto-img" >
				<img :src="item.img">
			</div>
			<div class="goto-txt">
				<h4 class="goto-title">{{item.title}}</h4>
				<p class="goto-data">{{item.content}}</p>
			</div>
			
		</div>	
	</div>
</template>

<script>
	export default {
		data(){
		return {
			weekendList: [
				{
					img:"http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
					title:"北京温泉排行榜",
					content:"细数北京温泉，温暖你的冬天"
				},
				{
					img:"http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
					title:"寻找北京的皇城范儿",
					content:"数百年的宫廷庙宇，至今依旧威严霸气"
				},
				{
					img:"http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
					title:"北京必游TOP10",
					content:"来北京必去的景点非这些地方莫属"
				},
				{
					img:"http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg",
					title:"登高望远秋色佳",
					content:"山顶满眼彩色，此情此景醉了"
				},
				{
					img:"http://img1.qunarzz.com/sight/source/1509/28/1bb74b851279e6.jpg_r_640x214_64ebf0ee.jpg",
					title:"秋高气爽去礼佛",
					content:"秋风伴着美妙轻声，品尝我的另一番滋味"
				}
			]
		}
		}
	}
	// export default 
</script>

<style>
	.weekend-title {
		overflow: hidden;
		padding-left: .26rem;
		height: 0.8rem;
		color: rgba(33,33,33);
		line-height: .8rem;
		background: #f5f5f5;
	}
	.goto-img {
		overflow: hidden;
		height: 0;
		padding-bottom: 38%;
	}
	.goto-txt {
		padding: .14rem .2rem .2rem .2rem;
		position: relative;
	}
	.goto-title {
		width: 100%;
		line-height: .48rem;
		overflow: hidden;
		padding-right: 1.4rem;
		color: #212121;
		font-size: .28rem;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goto-data {
		overflow: hidden;
		padding-right: 1.4rem;
		color: #616161;
		font-size: .24rem;
		line-height: .42rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>