<template>
	<div class="palaceMuseum-Recommend">
		<div class="palaceMuseum-Recommend-qunar">
			<span class="palaceMuseum-Recommend-icon iconfont icon-dianzan"></span>
			<div class="palaceMuseum-Recommend-titBox">
				<span class="palaceMuseum-Recommend-title">去哪儿推荐</span>
			</div>	
		</div>
		<div class="palaceMuseum-Recommend-content">
			<ul>
				<li class="palaceMuseum-Recommend-contentLi">
					<div class="palaceMuseum-Recommend-contentLeft">
						<p class="palaceMuseum-Recommend-conTit">【上午场】故宫成人票凭身份证入园</p>
						<span class="palaceMuseum-Recommend-booking"><span class="iconfont icon-shijian"></span>可订11月9日</span>
						<span class="palaceMuseum-Recommend-return"><span class="iconfont icon-duigou"></span>条件退</span>
					</div>
					<div class="palaceMuseum-Recommend-contentRight">
						<span class="palaceMuseum-Recommend-ticketPrice">
							<em class="palaceMuseum-Recommend-yuan">￥</em>40
						</span>
						<span class="palaceMuseum-Recommend-Reserve" @click = "handlefadeIn(show)">预定</span>
					</div>
				</li>
				<li class="palaceMuseum-Recommend-contentLi">
					<div class="palaceMuseum-Recommend-contentLeft">
						<p class="palaceMuseum-Recommend-conTit">【上午场】故宫成人票+故宫全景手绘地图</p>
						<span class="palaceMuseum-Recommend-booking"><span class="iconfont icon-shijian"></span>可订11月9日</span>
						<span class="palaceMuseum-Recommend-return"><span class="iconfont icon-gantan"></span>不可退</span>
					</div>
					<div class="palaceMuseum-Recommend-contentRight">
						<span class="palaceMuseum-Recommend-ticketPrice">
							<em class="palaceMuseum-Recommend-yuan">￥</em>50
						</span>
						<span class="palaceMuseum-Recommend-Reserve">预定</span>
					</div>
				</li>
				<li class="palaceMuseum-Recommend-contentLi">
					<div class="palaceMuseum-Recommend-contentLeft">
						<p class="palaceMuseum-Recommend-conTit">【5大景点】广场+故宫+八达岭长城+鸟巢水立方,北京一日游</p>
						<span class="palaceMuseum-Recommend-booking"><span class="iconfont icon-shijian"></span>可订11月9日</span>
						<span class="palaceMuseum-Recommend-return"><span class="iconfont icon-duigou"></span>无购物</span>
						<span class="palaceMuseum-Recommend-return"><span class="iconfont icon-duigou"></span>无自费</span>
					</div>
					<div class="palaceMuseum-Recommend-contentRight">
						<span class="palaceMuseum-Recommend-ticketPrice">
							<em class="palaceMuseum-Recommend-yuan">￥</em>148<b style="font-size: .24rem; color: #888;">起</b>
						</span>
						<span class="palaceMuseum-Recommend-Reserve">预定</span>
					</div>
				</li>
			</ul>
		</div>  
		<transition name="fade">
			<div class="fullScreen-zIndex" v-show="show"></div>
		</transition>
			<div class="fullScreen" id="f" v-show="show">
				<div class="fullScreen-top"></div>
				<div class="fullScreen-bottom">
					<div class="fullScreen-bottom-header">
						<h3 class="fullScreen-bottom-title">【上午场】故宫成人票凭身份证入园<span ref="btn" class="fullScreen-bottom-close" @click="handlefadeIn(show)">×</span></h3>
						<b class="fullScreen-bottom-price"><em class="fullScreen-bottom-yuan">￥</em>40<span class="fullScreen-bottom-num">/张</span></b>
					</div>
		
					<div>
						<h5 class="fullScreen-bottom-date">价格日历</h5>
						<ul class="fullScreen-bottom-ul">
							<li class="fullScreen-bottom-li">
								<p class="fullScreen-bottom-li-p">今天</p>
								<span>11月10日</span>
							</li>
							<li class="fullScreen-bottom-li">
								<p class="fullScreen-bottom-li-p">明天</p>
								<span>11月11日</span>
							</li>
							<li class="fullScreen-bottom-li">
								<p class="fullScreen-bottom-li-p">后天</p>
								<span>11月12日</span>
							</li>
							<li class="fullScreen-bottom-li">
								<p class="fullScreen-bottom-li-p">其他日期</p>
							</li>
						</ul>
						<p class="fullScreen-bottom-prompt">需要在游玩前1天的23:59前预定</p>
					</div>
					<span class="fullScreen-bottom-Btn">立即预定</span>
				</div>
			</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show : "false"				
			}
		},
		methods:{
			handlefadeIn() {
				let f = document.getElementById("f");
       			this.show = !this.show;
       			f.className = 'fullScreen animated fadeInUp';
   			}
		},
		mounted(){
			this.$nextTick( () => {
				this.$refs.btn.click();
  			})
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .2s
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	  opacity: 0
	}	
	.fullScreen-zIndex{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		background-color: rgba(0,0,0,.5);
	}
	.fullScreen{
		position: fixed;
		width: 100%;
		top: 0;
		bottom: 0;
		background-color:transparent;
	}
	.fullScreen-top{
		position: absolute;
		top: 0;
		width: 100%;
		height: 65.3%;
	}
	.fullScreen-bottom{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 34.7%;
		background-color:#fff;
	}
	.fullScreen-bottom-header{
		
	}
	.fullScreen-bottom-title{
		margin-top: .2rem;
		line-height: .34rem;			
		font-size: .34rem;
		font-weight: bold;
		color: #212121;
	}
	.fullScreen-bottom-close{
		width: .32rem;
		height: .32rem;
		text-align: center;
		line-height: .32rem;
		margin-right: .2rem;
		float: right;
		border: .02rem solid #212121;
		border-radius: 50%;
		color: #888;
		font-weight: bold;
	}
	.fullScreen-bottom-price{
		display: block;
		margin: .1rem 0 .3rem .1rem;
		line-height: .42rem;
		font-size: .32rem;
		color: #ff8900;
	}
	.fullScreen-bottom-yuan{
		font-size: .24rem;
	}
	.fullScreen-bottom-num{
		margin-left: .1rem;
		font-size: .24rem;
		color: #888;
	}
	.fullScreen-bottom-date{
		margin: 0 0 .1rem .1rem;
		line-height: .42rem;
		font-size: .28rem;
		color: #212121;
	}
	.fullScreen-bottom-ul{
		width: 100%;
		overflow: hidden;
	}
	.fullScreen-bottom-li{
		width: 22.75%;
		height: .86rem;
		text-align: center;
		float: left;
		margin-right: 0.6%;
		margin-left: 1%;
		border: .02rem solid #888;
		border-radius: .1rem;
		list-style: none;
	}
	.fullScreen-bottom-li-p{
		margin-top: .2rem;
	}
	.fullScreen-bottom-prompt{
		margin-left: 1%;
		padding: .14rem 0;
		line-height: .36rem;
		font-size: .24rem;
		color: #ff8900;
	}
	.fullScreen-bottom-Btn{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 25%;
		text-align: center;
		line-height: 1.2rem; 
		font-size: .32rem;
		color: white;
		background-color: #ff8900;
	}

.palaceMuseum-Recommend{
	position: relative;
	margin-bottom: .2rem;
	background: #FFFFFF;
}
.palaceMuseum-Recommend-qunar{
	width: 100%;
	height: 0.88rem;
	line-height: .88rem;
	padding: 0 .2rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	
}
.palaceMuseum-Recommend-icon{
	display: inline-block;
	width: 0.8rem;
	height: 0.8rem;
	text-align: center;
	float: left;
}
.palaceMuseum-Recommend-qunar .icon-dianzan::before{
	content: "\E600";
    color: #FFFFFF;
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #FF1200;
    position: absolute;
    top: 0.14rem;
    border-radius: 50%;
}
.palaceMuseum-Recommend-titBox{
	width: 2rem;
	float: left;
	margin-left: -.2rem;
}
.palaceMuseum-Recommend-title{
	width: 80%;
	display: inline-block;
	float: left;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.palaceMuseum-Recommend-contentLi{
	position: relative;
	overflow: hidden;
	padding: .2rem .2rem .24rem .2rem;
	border-top: .02rem solid #dadada;
}
.palaceMuseum-Recommend-contentLeft{
	width: 70%;
	float: left;
	margin-right: .1rem;
	border-right: .02rem solid #DADADA;
}
.palaceMuseum-Recommend-conTit{
	line-height: 0.52rem;
}
.palaceMuseum-Recommend-booking,.palaceMuseum-Recommend-return{
	margin-right: .1rem;
	line-height: 0.52rem;
	font-size: .24rem;
}
.palaceMuseum-Recommend-booking .icon-shijian,
.palaceMuseum-Recommend-return .icon-duigou{
	width: .24rem;
	height: .24rem;
	margin-right: .08rem;
	color: #1ba9ba;
}
.palaceMuseum-Recommend-return .icon-gantan{
	color: #ff4500;
}
.palaceMuseum-Recommend-booking .iconfont,
.palaceMuseum-Recommend-return .iconfont{
	font-size: 0.24rem;
}
.palaceMuseum-Recommend-contentRight{
	width: 28%;
	line-height: .5rem;
	float: left;
	text-align: center;
}
.palaceMuseum-Recommend-ticketPrice{
	position: absolute;
	right: .8rem;
	bottom: .9rem;
	display: block;
	color: #ff9800;
	font-size: .32rem;
}
.palaceMuseum-Recommend-yuan{
	font-size: .2rem;
}
.palaceMuseum-Recommend-Reserve{
	position: absolute;
	right:.4rem ;
	bottom: .4rem;
	display: block;
	width: 1.6rem;
	height: 0.6rem;
	line-height: 0.6rem;
	text-align: center;
	margin-left:.2rem ;
	border-radius: .08rem;
	color: #FFFFFF !important;
	background: #FF9800;
}
</style>