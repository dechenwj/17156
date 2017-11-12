<template>
	<div class="locaActivity">
		<div class="location">
			<div class="location-failed">
				<span class="iconfont icon-dizhiguanli"></span>
				附近
			</div>
			<div class="location-hot-spring">
				<span class="iconfont icon-wangluo"></span>
				5折泡温泉
			</div>
		</div>
		<div class="activity">
			<div class="activity-hot-spring-bg"></div>
			<div class="activity-sales-bg"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgHot:"../../../../static/img/e395615b16fb1302.png",
				imgSales:"../../../../static/img/1685d2108b652302.png"
			}
		}
	}
</script>

<style scoped>
	.locaActivity{
		background-color: #F5F5F5;
	}
	.location-failed,.location-hot-spring{
		width:50%;
		height: 0.98rem;
		line-height: 0.98rem;
		font-size: 0.28rem;
		float: left;
		text-align: center;
		border-top:0.01rem solid #F5F5F5 ;
		background-color: #FFFFFF;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.location-failed{
		box-sizing: border-box;
		border-right:0.01rem solid #F5F5F5 ;
	}
	.activity{
		width: 100%;
		height: 1.4rem;
		overflow: hidden;
	}
	.activity-hot-spring-bg,.activity-sales-bg{
		width: 50%;
		height: 1.4rem;
		margin-top: 0.2rem;
		float: left;
	}
	.activity-hot-spring-bg{
		border-right:0.01rem solid #F5F5F5 ;
		box-sizing: border-box;
		background: url(../../../../static/img/e395615b16fb1302.png) no-repeat center center;
		background-size: auto 100%;
		background-color: #FFFFFF;
	}
	.activity-sales-bg{
		background: url(../../../../static/img/1685d2108b652302.png) no-repeat center center;
		background-size: auto 100%;
		background-color: #FFFFFF;
	}
</style>