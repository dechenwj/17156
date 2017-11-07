<template>
<div>
	<div id="wrapper">
	<ul>
		<li id="loadNotice" style="display: none;">松开加载</li>
		<li  class="view-list" v-for="item in viewContent">
			<div class="view">
				<div class="img">
					<img :src="item.img">
					<span class="today" v-if="item.show">今日可定</span>
				</div>

				<div class="view-etail">
					<h4>
						<span class="view-name">{{item.place}}</span>
						<span class="price title"><span class="price-ico"><i>￥</i><em>{{item.price1}}</em></span>起</span>
					</h4>
				
					<div class="view-comments">
						<span class="star icon-ico_praise iconfont"></span>
						<span class="title">{{item.discuss}}评论</span>
					</div>

					<p class="seat title">{{item.position}}</p>
				</div>					
			</div>

			<div class="note">
				<dl class="note-dl1">
					<dt class="note-title">{{item.mpKind1}}{{item.mpKindname1}}</dt>
					<dd class="note-price"><i>￥</i><em>{{item.price2}}</em></dd>
				</dl>
				<dl class="note-dl2">
					<dt class="note-title">{{item.mpKind2}}{{item.mpKindname2}}</dt>
					<dd class="note-price"><i>￥</i><em>{{item.price3}}</em></dd>
				</dl>
			</div>
		</li>
	</ul>
	</div>
	<div class="footer">
		<div class="pagelist">
			<span class="pre-page pageN">上一页</span>
			<span class="page-num">1</span>
			<span class="next-page pageN">下一页</span>
		</div>
		<p class="toWhere"><a href="javaScript;">去哪门票</a></p>
	</div>
</div>

</template>

<script>

	export default {
		data() {
			return {
				viewContent:[
				{show:true,img:"http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_110x110_fac6a6cd.jpg",place:"故宫(5A)",price1:88,discuss:14656,position:"北京.东城区",mpKind1:"【当日票】",mpKind2:"【上午场】",
					mpKindname1:"故宫成人票",mpKindname2:"故宫成人票",price2:39.9,price3:39.9},
					{show:false,img:"http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_110x110_d9d85877.jpg",place:"颐和园(5A)",price1:22.9,discuss:21031,position:"北京.海淀区",mpKind1:"颐和园+",mpKind2:"颐和园+",
					mpKindname1:"园中园成人票",mpKindname2:"园中园学生/成人票",price2:48.9,price3:25},
					{show:true,img:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_110x110_684eb80e.jpg",place:"八达岭长城(5A)",price1:25,discuss:14656,position:"北京.延庆县",mpKind1:"八达岭长城门票+",mpKind2:"八达岭长城门票+",
					mpKindname1:"空中索道往返成人票",mpKindname2:"空中索道往返学生/...",price2:175,price3:157.5},
					{show:false,img:"http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_110x110_d957be56.jpg",place:"恭王府(5A)",price1:18.2,discuss:24417,position:"北京.西城区",mpKind1:"恭王府",mpKind2:"恭王府",
					mpKindname1:"成人票",mpKindname2:"半价票(学生/老人)",price2:38.5,price3:20},
					{show:true,img:"http://img1.qunarzz.com/sight/p0/1505/f5/f5f45e1a83537bcb.water.jpg_110x110_4c72dbfd.jpg",place:"圆明园(4A)",price1:25,discuss:11978,position:"北京.海淀区",mpKind1:"圆明园",mpKind2:"圆明园",
					mpKindname1:"成人票(含大水法遗址、迷宫...)",mpKindname2:"导览器(中文)",price2:25,price3:2},
					{show:false,img:"http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_110x110_2c172ba2.jpg",place:"天安门广场",price1:20,discuss:15936,position:"北京.东城区",mpKind1:"【当日票】",mpKind2:"故宫+珍宝馆+钟表馆",
					mpKindname1:"故宫成人票",mpKindname2:"(成人票)",price2:39.9,price3:60},
					{show:false,img:"http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_110x110_2de732a1.jpg",place:"水立方",price1:14,discuss:23413,position:"北京.奥林匹克公园",mpKind1:"水立方",mpKind2:"水立方",
					mpKindname1:"成人票",mpKindname2:"儿童票",price2:30,price3:14,}
				],
				myscroll:"",			
			//是否正在加载中	true表示正在加载  false表示没有加载
				is_r:false,
				methods: {
					
				}
			}
		},
		mounted: function() {
			window.onload = function(){
				setTimeout(function(){
					myscroll = new iScroll("wrapper",{
						topOffset: 0,
						//上拉时触发
						onScrollMove: function(){
							//如果上拉高度 大于 (内容高度 - wrapper高度) 50px 以上  且是未刷新状态时触发 ; 
							if(this.y <= ( this.wrapperH - this.scroller.clientHeight -50) && is_r == false){
								//正在加载状态
								is_r = true;
								setTimeout(function(){
									//这里表示数据加载成功后
									for (var i = 0;i<3;i++){
										// w.lis.push({name:"+"});
									}
									//这里表示渲染完成后刷新wrapper
									setTimeout(function(){
										//显示加载成功状态图标 (没有更多数据时候的提示作用)
											// w.static = "";
										},500)
										//加载完成状态
										is_r = false;
										myscroll.refresh();
								},2000)
								
							}
						},
						onScrollEnd: function(){
							//上拉之后如果触发刷新则 状态图标值为1 显示loading状态
							if(is_r == true){
								console.log("显示提示");
							}
						}
					});
				},0);
			}
		}
	}
</script>
<style scoped>
	.view-list i{
	color: #ff8300;
	font-size: .2rem;
	}
	.view-list em{
		color: #ff8300;
		font-size: .38rem;
		margin-right: .06rem;
	}
	.title{
		font-size: .2rem;
		right:1.8rem;
		color: #9E9E9E;
	}
</style>
<style>
	body{
		background-color:#F5F5F5;
	}
	.wrapper{		
		position: relative;
	}
	.view-list {
		width: 100%;
		margin-bottom: .2rem;	
		border: 1px solid #e4e6e6;	
		background: #fff;
	}
	.view{
		padding: .2rem;
	}
/*左面图片*/
/*图片*/
	.img{
		position: relative;

	}
	.img img{
		position: absolute;
		display: block;
		width: 1.6rem;
		height: 1.6rem;
		padding-bottom: 2.2rem;
	}
/*今天可订*/
	.today {
		position: absolute;
		display: block;
		background: #fa8514;
		left: -.04rem;
		top: -.04rem;
		height: .24rem;
		color: #fff;
		line-height: .24rem;
		font-size: 0.2rem;
		padding: .02rem;
	}
	.today::after {
		position: absolute;
		content: "";
		height: 0rem;
		width: .1rem;
		border-bottom: .14rem solid #fa8514;
		border-top: .14rem solid #fa8514;
		border-right: .1rem solid transparent;
		top: 0rem;
		right: -.13rem;
	}
/*右面详情*/
	.view-etail {
		width: 100%;
		position: relative;
		left: 1.8rem;
	}
	.view-etail .view-name {
		display: block;
		width: 56%;
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.view-etail .view-name::after {
		content: "热";
		display: inline-block;
		margin-left:.06rem;
		width: .3rem;
		height: .3rem;
		background: #ff1200;
		color: #fff;
		font-size: .24rem;
		line-height: .3rem;
		text-align: center;
	}
	.view-etail .price {
		position:  absolute;
		display: block;
		width: 20%;
		text-align: right;
		white-space: nowrap;
		overflow: hidden;
		top: -.04rem;
	}
	.price-ico{
		display: inline-block;
		width: 76%;
		padding-right: .04rem; 
		overflow: hidden;
	}
	.view-comments{
		margin-top:.56rem; 
	}
	.view-comments .star{
		color: #00BCD4;
		font-size: .2rem;
	}
	.seat{
		white-space: nowrap;
		overflow: hidden;
		margin:.16rem .1rem 0 0; 

	}
/*票种*/
.note{
	margin:.1rem .2rem 0;
}
.note dl{
	width: 100%;
	border-top: 1px dashed #cacaca;
	height: 0.9rem;
}
.note dl dt,.note dl dd{
	float: left;
	margin-top: .3rem;
}
.note dl dt{
	width:80%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.note dl dt .note-title{
	color: #212121;
}
.note dl dd{
	width: 20%;
	text-align: right;
	overflow: hidden;
}
.footer{
	width: 100%;
	padding-top:.2rem; 
}
.pagelist{
	text-align: center;
}
.pagelist .pageN{
	padding: .1rem .16rem;
	background:#BDBDBD;
	border-radius: .04rem;
	text-align: center;
	color: #fff;
}
.pagelist .next-page{
	border: 1px solid #00AfC9;
	color: #00AfC9;
	background: none;
}
.pagelist .page-num{
	padding: .1rem .2rem;
}
.toWhere{
	text-align: center;
	padding: .4rem 0;
	font-size: .32rem;
}
</style>