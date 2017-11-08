<template>
	<div class="weekend-content">
		<h3 class="weekend-title">周末去哪儿</h3>
		<div class="goto" v-for="item in Weekend" >
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
		props: ["Weekend"]
	}
	// export default 
</script>

<style>
	.weekend-content {
		background: #fff;
	}
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