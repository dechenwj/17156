<template>
	<div class="hotRecom">
		<h2 class="hot">热销推荐</h2>
		<div class="hotRecom-list-con">
			<ul>
				<li class="hotRe-list" v-for="(item,key) in HotRecommend" :key="item.id" ref="{{key}}" @click="handleRouter">
					<img class="hotRe-list-img" :src="item.img"/>
					<h2 class="hotRe-list-name">{{item.name}}</h2>
					<p class="hotRe-list-introduce">{{item.introduce}}</p>
					<span class="hotRe-list-money"><span class="hotRe-list-yuan">￥</span><b class="hotRe-list-fontcolor">{{item.money}}</b>起</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	require('../../../utils/iscroll-probe.js');
	import { mapState } from "vuex"
	export default {
		
		methods:{
			handleRouter(e) {
				if(e.path[1].children[1].innerText == "故宫"){
					this.$router.push('/thePalaceMuseum');
				}
			}
		},
		computed: mapState({
			HotRecommend(state) {
				return state.home.HotRecommend;
			}
		})
	}
</script>

<style scoped>
	.hot{
		height: .8rem;
		line-height: .8rem;
		color: #212121;
		padding-left: .26rem;
		background-color: #f5f5f5;
	}
	.hotRe-list{
		height: 1.4rem;
		padding: .24rem;
		background: #fff;
		border-bottom: 1px solid #F5F5F5;
	}
	.hotRe-list-img{
		width:1.4rem;
		height: 1.4rem;
		float: left;
		padding-right: .24rem;
		background:url(../../../../static/img/timg.jpg) no-repeat left top;
	}
	.hotRe-list-name{
		font-size: .3rem;
		margin-top: 0.04rem;
		margin-bottom: 0.1rem;		
	}
	.hotRe-list-introduce{
		color: #9e9e9e;
		margin-top: 0.04rem;
		margin-bottom: 0.12rem;
	}
	.hotRe-list-money{
		display: block;
		color: #9e9e9e;
		font-size: 0.24rem;
		padding-top: 0.08rem;
	}
	.hot,.hotRe-list-name,.hotRe-list-introduce,.hotRe-list-money{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;	
	}
	.hotRe-list-fontcolor{
		color: #ff8300;
		font-size: .36rem;
	}
	.hotRe-list-yuan{
		color: #ff8300;
	}
</style>