<template>
	<div class="palaceMuseum">
		<div class="palaceMuseum-header">
			<div class="palaceMuseum-hideHeader">
				<span class="iconfont icon-fanhui" @click="handleBackHome"></span>
				<p class="palaceMuseum-hideHeader-name">故宫</p>
			</div>
			<div class="palaceMuseum-header-img">
				<img class="palaceMuseum-header-imgUrl" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
			</div>
			<span class="palaceMuseum-header-returnBg" @click="handleBackHome"></span>
			<span class="palaceMuseum-header-return iconfont icon-fanhui" ></span>
			<div class="palaceMuseum-header-introduce">
				<span class="palaceMuseum-header-introduce-title">故宫(AAAAA景区)</span>
				<span class="palaceMuseum-header-introduce-imgNum iconfont icon-tupian">10</span>
			</div>
		</div>
		<div class="palaceMuseum-baseInfo">
			<div class="palaceMuseum-baseInfo-addr">	
				<p class="palaceMuseum-baseInfo-addr1">
					<span class="palaceMuseum-baseInfo-dizhi iconfont icon-dizhiguanli"></span>
					<b class="palaceMuseum-baseInfo-address">北京市东城区景山前街4号</b>
					<span class="palaceMuseum-baseInfo-dayuhao iconfont icon-dayuhao"></span>
				</p>
			</div>
			
			<div class="palaceMuseum-baseInfo-time">
				<p class="palaceMuseum-baseInfo-time1">
					<span class="palaceMuseum-baseInfo-tupian iconfont icon-tupian"></span>
					<b class="palaceMuseum-baseInfo-visited">查看景点简介及开放时间</b>
					<span class="palaceMuseum-baseInfo-dayuhao iconfont icon-dayuhao"></span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted(){
			window.onscroll = (e) => {
				let st = document.documentElement.scrollTop || document.body.scrollTop;
				let ht = document.getElementsByClassName("palaceMuseum-header")[0].clientHeight;
				let opacity = st/100;
				if(opacity >= ht/100){
					opacity = 1;
				}
				let header = document.getElementsByClassName("palaceMuseum-hideHeader")[0];
				header.style.opacity = opacity;
			}
		},
		destroyed() {
			window.onscroll = null;
		},
		methods:{
			handleBackHome() {
				console.log(123);
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	body{
		background: #f5f5f5;
	}
	.palaceMuseum{
		font-size: 0.28rem;
		color: #212121;
	}
	.palaceMuseum-header{
		position: relative;
		display: block;
		width:100%;
		height: 0;
		padding-bottom: 55%;
	}
	.palaceMuseum-hideHeader{
		z-index: 1;
		opacity: 0;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: .88rem;
		background: #00BCD4;
		color: #FFFFFF;
		font-size: .32rem;
	}

	.palaceMuseum-hideHeader .icon-fanhui{
		position: absolute;
		top: 0;
		left: .2rem;
		width: .8rem;
		height: .88rem;
		line-height: .88rem;
		font-weight: bold;
	}
	.palaceMuseum-hideHeader-name{
		text-align: center;
		line-height: .88rem;
		
		
	}
	.palaceMuseum-header-img{
		width:100%;
		height: 0;
		padding-bottom: 55%;
	}
	.palaceMuseum-header-imgUrl{
		width: 100%;
		vertical-align: top;
	}
	.palaceMuseum-header-returnBg{
		z-index: 2;
		position: absolute;
		display: block;
		width: 0.72rem;
		height: 0.72rem;
		background-color: #000;
		opacity: 0.4;
		top: 0;
		border-radius: 50%;
		margin-top: 0.16rem;
		margin-left: 0.16rem;
	}
	.palaceMuseum-header-return::before{
		content: "\e624"; 
		position: absolute;
		display: block;
		width: 0.72rem;
		height: 0.72rem;
		text-align: center;
		line-height: 0.72rem;
		top: 0;
		border-radius: 50%;
		margin-top: 0.16rem;
		margin-left: 0.16rem;
		color: #FFFFFF;
	}
	.palaceMuseum-header-introduce{
		z-index: 10;
		position: absolute;
		left: .2rem;
		right: .2rem;
		bottom: 0.26rem;
		color: #fff;
		font-size: 0.32rem;
	}
	.palaceMuseum-header-introduce-title{
		display: inline-block;
		width: 3.2rem;
		height: 0.32rem;
		line-height: 0.32rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.palaceMuseum-header-introduce-imgNum{
		display: inline-block;
		width: 1.2rem;
		float: right;
		text-align: center;
		line-height: 0.32rem;
		border-radius: 0.2rem;
		background: rgba(0,0,0,.4);
		font-size: 0.24rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.palaceMuseum-header-introduce-imgNum::before{
		margin-right: 0.1rem;
	}
	.palaceMuseum-baseInfo{
		position: relative;
		top: -.1rem;
		width: 100%;
		height: 1.76rem;
		padding: 0.1rem 0.2rem 0 0.2rem;
		margin-bottom: 0.1rem;
		border-radius: .1rem .1rem 0 0;
		background-color: #FFFFFF;
	}
	.palaceMuseum-baseInfo-addr{
		position: absolute;
		width: 100%;
		line-height: 0.88rem;
	}
	.palaceMuseum-baseInfo-addr1{
		position: relative;
		overflow: hidden;
    	padding-right: .56rem;
    	white-space: nowrap;
    	text-overflow: ellipsis;
	}
	.palaceMuseum-baseInfo-address,.palaceMuseum-baseInfo-visited{
		width: 80%;
	    display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.palaceMuseum-baseInfo-dizhi,.palaceMuseum-baseInfo-tupian{
		float: left;
		margin-right: .2rem;
	}
	.palaceMuseum-baseInfo-dayuhao::before{
		content: "\e6b7";
		position: absolute;
		right: 0.86rem;
	}
	.palaceMuseum-baseInfo-time{
		position: absolute;
		width: 100%;
		top: 0.88rem;
		line-height: 0.88rem;
	}
</style>