<template>
	<div class="hotRecom">
		<h2 class="hot">热销推荐</h2>
		<div class="hotRecom-list-con">
			<ul>
				<li class="hotRe-list" v-for="item in content">
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
	export default {
		data(){
			return {
				content:[
					{name:'故宫',introduce:'东方宫殿建筑代表，世界宫殿建筑典范',money:'65',img:'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg'},
					{name:'八达岭长城',introduce:'不到长城非好汉',money:'25',img:'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg'},
					{name:'颐和园',introduce:'保存完整的一做皇家行宫御园',money:'1',img:'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg'},
					{name:'北京欢乐谷',introduce:'七大主题园区带你畅享北京欢乐谷',money:'11',img:'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg'},
					{name:'慕田峪长城',introduce:'秀梅长城,关键是人少',money:'19.1',img:'http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg'}
				]			
			}
		}
	}
</script>

<style>
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