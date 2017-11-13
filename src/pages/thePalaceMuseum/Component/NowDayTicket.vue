<template>
	<div>
	<div class="palaceMuseum-nowTicket" v-for="type in types">
		<div class="palaceMuseum-nowTicket-titBox">
			<span class="palaceMuseum-nowTicket-titleIcon iconfont icon-piaozhong"></span>
			<h3 class="palaceMuseum-nowTicket-title">{{type.kind}}</h3>
		</div>
		<ul> 
			<li class="palaceMuseum-nowTicketLi" v-for="item in content" :key="item.id" @click="handleDisplayChange(item,type)">
				<div class="palaceMuseum-nowTicketLi-show">
					<b class="palaceMuseum-nowTicketLi-kind">{{item.time}}</b>
					<p class="palaceMuseum-nowTicketLi-goIn">{{item.type}}</p>
					<span class="iconfont" :class="{'icon-xiala': !item.show ,'icon-shangla': item.show }"></span>
					<em class="palaceMuseum-nowTicketLi-em">￥<span class="palaceMuseum-nowTicketLi-price">{{item.price}}</span><i class="palaceMuseum-nowTicketLi-i">起</i></em>					
				</div>
				<div class="palaceMuseum-nowTicketLi-hide" v-show = "item.show && type.show">
					<h3><span class="iconfont icon-qunaer"></span>去哪儿直销</h3>
					<span class="palaceMuseumnow-TicketLi-type">【{{item.time}}】{{type.kind}}凭身份证入园</span>
					<span class="palaceMuseumnow-TicketLi-tomorrow"><span class="iconfont icon-shijian"></span>可订明日</span>
					<span class="palaceMuseumnow-TicketLi-condition"><span class="iconfont icon-duigou"></span>条件退</span>
					<span class="palaceMuseumnow-TicketLi-money">￥40</span>
					<span class="palaceMuseumnow-TicketLi-btn">预定</span>
				</div>
				
				<div class="palaceMuseum-nowTicketLi-hide" v-show = "item.show && type.show">
					<h3>爱上旅游网</h3>
					<span class="palaceMuseumnow-TicketLi-type">【免排队购票 刷身份证直接进入】{{type.kind}}</span>
					<span class="palaceMuseumnow-TicketLi-tomorrow"><span class="iconfont icon-shijian"></span>可订明日</span>
					<span class="palaceMuseumnow-TicketLi-condition"><span class="iconfont icon-duigou"></span>条件退</span>
					<span class="palaceMuseumnow-TicketLi-money">￥40</span>
					<span class="palaceMuseumnow-TicketLi-btn">预定</span>
				</div>
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
					{"id":1,time:"上午场",type:"凭身份证入园",price:"40",show:"false"},
					{"id":2,time:"下午场",type:"凭身份证入园",price:"40",show:"false"},
					{"id":3,time:"故宫+珍宝馆+钟表馆",type:"凭身份证入园",price:"60",show:"false"}
				],
				
				types:[	
					{"id":1,"kind":"故宫成人票",show:"false"},
					{"id":2,"kind":"故宫学生票",show:"false"},
					{"id":3,"kind":"故宫老人票",show:"false"},
				]
			}
		},
		methods: {
			handleDisplayChange(item,type){
				item.show = !item.show;
				type.show = !type.show;
			}
		},
		mounted() {
			document.getElementsByClassName("palaceMuseum-nowTicketLi")[0].click();
			document.getElementsByClassName("palaceMuseum-nowTicketLi")[4].click();
			document.getElementsByClassName("palaceMuseum-nowTicketLi")[8].click();
			
		}
	}
</script>

<style>
.palaceMuseum-nowTicket{
	margin-bottom: .2rem;
	background: #FFFFFF;
}
.palaceMuseum-nowTicket-titBox{
	height: .88rem;
	line-height: .82rem;
}
.palaceMuseum-nowTicket-titleIcon{
	display: block;
	float: left;
	text-align: center;
	line-height: 0.36rem;
	margin: .21rem;
	background: #00bcd4;
    border-radius: 50%;
    color: #fff;
}
.palaceMuseum-nowTicket .iconfont{
	width: 0.36rem;
	height: 0.36rem;
}
.palaceMuseum-nowTicket-title{
	font-size: .3rem;
	float: left;
	margin-left: -.1rem;
}
.palaceMuseum-nowTicketLi{
	line-height: 0.48rem;
	border-top: .02rem solid #DADADA;
}
.palaceMuseum-nowTicketLi-show{
	padding: .24rem .2rem;
}
.palaceMuseum-nowTicketLi-kind{
	float: left;
	font-size: .3rem;
}
.palaceMuseum-nowTicketLi-goIn{
	display: inline-block;
	line-height: 0.26rem;
	margin-left: .04rem;
	margin-right: 1.6rem;
	color: #888;
	font-size: .24rem;
}
.palaceMuseum-nowTicketLi-em{
	position: relative;
	float: right;
	font-size: .24rem;
	color: #FF9800;
}
.palaceMuseum-nowTicketLi-price{
	font-size: .3rem;
}
.palaceMuseum-nowTicketLi-i{
	font-size: .24rem;
	color: #888;
}
.palaceMuseum-nowTicketLi-show .icon-xiala,.palaceMuseum-nowTicketLi-show .icon-shangla{
	margin-top: .02rem;
	float: right;
	color: #DADADA;
}
.palaceMuseum-nowTicketLi-hide{
	position: relative;
	width: 100%;
	padding: .14rem .1rem;
	background: #F5F5F5;
}
.palaceMuseum-nowTicketLi-hide .iconfont{
	width: .36rem;
	height: .36rem;
	color:#00BCD4;
	font-size: .24rem;
}
.palaceMuseum-nowTicketLi-hide .icon-qunaer{
	line-height: 0.36rem;
	text-align: center;
	color: #FFFFFF;
	background: #00bcd4;	
}
.palaceMuseumnow-TicketLi-tomorrow,.palaceMuseumnow-TicketLi-condition{
	margin-right: .1rem;
	font-size: .24rem;
	color: #888888;
}
.palaceMuseumnow-TicketLi-condition{
	color: #212121;
}
.palaceMuseumnow-TicketLi-type{
	display: block;
	color: #888888;
	font-size: .24rem;
}
.palaceMuseumnow-TicketLi-money{
	position: absolute;
	right: 1.2rem;
	bottom: .8rem;
	display: inline-block;
	color: #FF9800;
}
.palaceMuseumnow-TicketLi-btn{
	display: inline-block;
	position: absolute;
	right: .6rem;
	bottom: .2rem;
	width: 1.6rem;
	height: .6rem;
	text-align: center;
	line-height: .6rem;
	border-radius: .1rem;
	color: #FFFFFF;
	background: #FF9800;
}
</style>