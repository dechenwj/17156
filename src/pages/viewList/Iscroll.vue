<template>
	<div>
		<div class="view-iscroll">
			<div class="view-classify" v-bind:class="{ 'view-colorA' : isA, 'view-colorB': !isA}" @click="isA=!isA,bor=!bor,isB=false,bor1=true">
				<span class="view-classify-con" @click="show = !show ,show2=false">全部分类<span  v-bind:class="{ 'view-bor-top' : bor, 'view-bor-bottom': !bor}"></span></span>
			</div>
			
			<div class="view-sort" v-bind:class="{ 'view-colorA' : isB, 'view-colorB': !isB}" @click="isB=!isB,bor1=!bor1,isA=false,bor=true">
				<span class="view-sort-con" @click="show2 = !show2 ,show = false">推荐排序<span class="view-bor-top" v-bind:class="{ 'view-bor-top' : bor1, 'view-bor-bottom': !bor1}"></span></span>
			</div>
		</div>
		<div class="view-class-con" v-show="show">
			<div id="view-wrapper1">
				<div id="scroller">
					<ul id="list">
						<li v-for="item in content">
							<img class="view-class-con-img" :src="item.img"/>
							<span>{{item.name}}</span>
						</li>
					</ul>
				</div>
			</div>
			
			<div id="view-class-empty" @click="show = !show, isA = !isA, bor = !bor"></div>
		</div>
		
		<div class="view-sort-content" v-show="show2">
			<div id="view-wrapper2">
				<div id="scroller2">
					<ul id="list2">
						<li>排序推荐</li>
						<li>离我最近</li>
						<li>人气最高</li>
					</ul>
				</div>		
			</div>
			<div id="view-sort-empty" @click="show2 = !show2, isB = !isB, bor1 = !bor1"></div>
		</div>
	</div>
</template>


<script>
	export default {
		data(){
			return {
				show:false,
				show2:false,
				isA:false,
				isB:false,
				bor:true,
				bor1:true,
				content:[
					{name:'全部分类',img:'https://img1.qunarzz.com/piao/fusion/1509/9d/0ee9e4808773f.png'},
					{name:'运动健身',img:'http://img1.qunarzz.com/piao/fusion/1608/3e/72d2396d47131702.png'},
					{name:'文化古迹',img:'http://img1.qunarzz.com/piao/fusion/1608/73/0c8e23368dceac02.png'},
					{name:'农家度假',img:'http://img1.qunarzz.com/piao/fusion/1608/a5/9254bfcb77931f02.png'},
					{name:'演出',img:'http://img1.qunarzz.com/piao/fusion/1608/e6/f8a210e488ba7602.png'},
					{name:'游乐场',img:'http://img1.qunarzz.com/piao/fusion/1608/3e/d07407699d56c202.png'},
					{name:'自然风光',img:'http://img1.qunarzz.com/piao/fusion/1608/f8/799d67d22404c602.png'},
					
					{name:'公园',img:'http://img1.qunarzz.com/piao/fusion/1608/70/a7a71fb69cc7d902.png'},
					{name:'展馆',img:'http://img1.qunarzz.com/piao/fusion/1608/de/8b3631887808e202.png'},
					{name:'温泉',img:'http://img1.qunarzz.com/piao/fusion/1608/86/95cb8117ad91a402.png'},
					{name:'室内娱乐',img:'http://img1.qunarzz.com/piao/fusion/1509/1e/bee608077e1927.png'},
					
					{name:'城市观光',img:'http://img1.qunarzz.com/piao/fusion/1608/d5/2a3ec877befef902.png'},
					{name:'体验馆',img:'http://img1.qunarzz.com/piao/fusion/1608/15/8883a00c917e5202.png'},
					
					{name:'餐饮',img:'http://img1.qunarzz.com/piao/fusion/1608/ce/e06a995a69d60702.png'},
					{name:'水上玩乐',img:'http://img1.qunarzz.com/piao/fusion/1608/88/081697df39c9f802.png'},
					{name:'手工',img:'http://img1.qunarzz.com/piao/fusion/1608/26/1eea67d9388e4b02.png'},
					{name:'植物园',img:'http://img1.qunarzz.com/piao/fusion/1608/16/165a69fea0cc0502.png'},
					{name:'出行必备',img:'http://img1.qunarzz.com/piao/fusion/1608/38/bb338d8258a1ed02.png'},
					{name:'游船',img:'http://img1.qunarzz.com/piao/fusion/1608/2c/d4a2b394eecbeb02.png'},
					{name:'交通',img:'http://img1.qunarzz.com/piao/fusion/1608/15/d94c0a3f16a48a02.png'},
					{name:'海洋馆',img:'http://img1.qunarzz.com/piao/fusion/1608/72/494d8f9690e0ea02.png'},
				]
			}
		},
		methods:{
	
		}
	}
</script>

<style scoped>
	.view-iscroll{
		width: 100%;
		height: 0.8rem;
	}
	.view-classify,.view-sort{
		width: 50%;
		height: 0.8rem;
		float: left;
		line-height: 0.8rem;
		text-align: center;
		position: relative;
	}
	.view-classify-con{
		border-right: 0.02rem solid #F5F5F5;
	}
	.view-classify-con,.view-sort-con{
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-bottom: 0.02rem solid #F5F5F5;
	}
	.view-colorA{
		color: #00afc7;
	}
	.view-colorB{
		color: #212121;
	}
	.view-bor-top{
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border: .08rem solid transparent;
		border-top: .08rem solid #000;
		left: 75%;
		top: 0.36rem;
	}
	.view-bor-bottom{
		content: "";
		position: absolute;
		width: 0;
		height: 0;
		border: .08rem solid transparent;
		border-bottom: .08rem solid #00afc7;
		left: 75%;
		top: 0.28rem;
	}
	#view-wrapper1{
	width: 100%;
	height: 50%;
	background: #ccc;
	float: left;
	overflow: hidden;
	}
	#view-wrapper2{
		height: 2.52rem;
	}
	#scroller{
		width: 50%;
		height:50%;
		overflow: auto;
		position: absolute;
		z-index: 1;
	}
	#scroller2{
		width: 100%;
		text-align: center;
	}
	#scroller ul ,#scroller2 ul{
		list-style: none;
		padding: 0;
		margin: 0;
		width: 100%;
		text-align: left;
	}

	#scroller li ,#scroller2 li {
		padding: 0 10px;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #fff;
		background-color: #fafafa;
		font-size: 14px;
	}
	#scroller2 li{
		text-align: center;
	}
	.view-class-con{
		position: fixed;
		width: 100%;	
		overflow: hidden;
		z-index: 1;
		top: 1.68rem;
		bottom: 0;
		left: 0;
		background:rgba(0,0,0,0.4);
	}
	.view-sort-content{
		position: fixed;
		width: 100%;	
		overflow: hidden;
		z-index: 1;
		top: 1.68rem;
		bottom: 0;
		left: 0;
		background:rgba(0,0,0,0.4);
	}
	.view-class-con-img{
		width: .3rem;
	    height: .3rem;
	    vertical-align: middle;
	    margin-right: .1rem;
	}
	#list li,#list2 li{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	#view-class-empty{
		width: 100%;
	    height: 50%;
	    float: left;
	}
	#view-sort-empty{
		width: 100%;
		height: 80%;
		float: left;
	}
</style>

