<template>
	<div class="wrapper">
		<div class="header" v-for="item in headerInfo">
			 <div class="header-title" v-if="item.add">
				<div class="header-title-back"><span class="header-title-back-span"><</span></div>
				<div class="header-title-cont">{{item.strokeName}}</div>
			 </div> 
			<div class="header-img">
				<router-link :to="item.link">
					<img class="header-img-jpg" :src="item.img" :alt="item.strokeName">
				</router-link>
				<span class="fallback"><</span>
				<span class="iconfontLeft place">出发地:{{item.place}}</span>
				<span class="iconfontRight place">{{item.describe}}</span>
			</div>
			<div class="header-content">
				<div class="stroke-name">{{item.strokeName}}</div>
				<div class="order">
					<i class="order-coin">￥</i>
					<em class="order-price">{{item.orderPrice}}</em>
					<span class="order-font same">起</span>
					<span class="order-date same">可定{{item.date}}</span>
					<span class="order-sale same">已售：{{item.sale}}</span>
				</div>
				<ul class="header-list">
					<li class="li-con">
						<span class="ico-font iconfont icon-duigou"></span>
						<span class="same">条件退</span>
					</li>
					<li class="li-con">
						<span class="ico-font iconfont icon-duigou"></span>
						<span class="same">铁定成团</span>
					</li>
					<li class="li-con">
						<span class="ico-font iconfont icon-duigou"></span>
						<span class="same">无自费</span>
					</li>
					<li class="li-con">
						<span class="ico-font iconfont icon-duigou"></span>
						<span class="same">无购物</span>
					</li>
				</ul>
			</div>
			
		</div>
  	</div>
</template>

<script>
import {mapState} from "vuex"

export default {
	computed:mapState({
		headerInfo(state){
			return state.tourDetails.headerInfo;
		}
		
	})
}
</script>

<style scoped>
.place{
	position: absolute;
	color: #fff;
	font-size: .28rem;
}
.same{
	font-size: .24rem;
	color: #616161;
}
</style>

<style>
html{ 
	 background-color:#F5F5F5;
}
.header-img{
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56%;
	overflow: hidden;
	background: #ccc;
}
.header-title{
	position: absolute;
	width: 100%;
	background: #00BCD4;
	z-index: 999;
	color: #fff;
	height: .88rem;
	line-height: .88rem;
}
.header-title-back{
	float: left;
	width: 10%;
	font-size: .54rem;
	text-align: center;
}
.header-title-cont{
	position: absolute;
	width: 80%;
	height: .88rem;
	float: left;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	left: 10%;
}
.header-img-jpg{
	width: 100%;
	white-space: nowrap;
}
.fallback{
	display: inline-block;
	width: 0.72rem;
	height: 0.72rem;
	background: red;
	background: rgba(84,85,102,.7);
	left: .1rem;
	top: .1rem;
	font-size: 0.48rem;
	border-radius: .36rem;
	text-align: center;
	line-height: 0.72rem;
}
.iconfontLeft{
	left: .1rem;
	bottom: .2rem;
}
.iconfontRight{
	right: .1rem;
	bottom: .2rem;
}
.header-content{
	position: relative;
	background: #fff;
	margin-top: -.1rem;
	padding: .2rem .2rem 0;
	border-radius: .1rem .1rem 0 0;
}
.stroke-name{
	height: 1.28rem;
	font-size: .36rem;
	line-height: .44rem;
	overflow: hidden;
	text-overflow: ellipsis;
}
.order{
	line-height: .48rem;
	padding: .1rem 0;
}
.order-coin,.order-price{
	color: #ff8300;	
}
.order-coin{
	font-size: .24rem;
	margin-right: -.1rem;
}
.order-price{
	font-size: .5rem;
}
.order-font{
	color: #9E9E9E；
}
.order-date{
	margin-left:.16rem;
}
.order-sale{
	display: inline-block;
	width: 1.8rem;
	text-align: right;
	float: right;
	overflow: hidden;
}
.header-list{
	height: .54rem;
}
.li-con{

	float: left;
	padding: 0 .1rem;
}
.ico-font{
	font-size: .24rem;
	color: #00afc7;
}
</style>

