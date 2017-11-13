<template>
<div>
	<div id="wrapper">
	<ul>
		<p v-if="show">松开加载..</p>
		<li  class="view-list" v-for="item in viewContent">
			<div class="view">
				<div class="img">
					<img :src="item.img">
					<span class="today" v-if="item.show">今日可定</span>
				</div>

				<div class="view-etail">
					<h4>
						<span class="view-name">{{item.place}}</span>
						<span class="price title"><span class="price-ico"><i>￥</i><em>{{item.price1}}</em></span>起	`</span>
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
	import { mapState } from "vuex"
	// require("./iscroll.js")
	import iScroll from "../../utils/iscroll-probe.js"
	export default {
		data() {
			return {	
				myscroll:"",
			//是否正在加载中	true表示正在加载  false表示没有加载
			
				show: false,
				flag: false,
				loading: false,
				myScroll:""
			}
		},

		computed: mapState({
			viewContent(state) {
				return state.viewList.viewContent;
			}
		}),

		methods: {
			bindEvents() {
				this.myScroll.on('scroll', this.handleScroll.bind(this));
				this.myScroll.on('scrollEnd',this.handleScrollEnd.bind(this));
			},

			handleScroll() {
				if (!this.loading) {
					if (this.myScroll.y>100) {
						this.show = true;
						this.flag = true;
					}else{
						this.show = false;
					}
				}
			},

			handleScrollEnd() {
				if (this.flag) {
					this.show = false;
					this.loading = true;
					this.$store.commit("viewListRefresh")
					setTimeout(this.handleGetDate.bind(this), 500);
				}
			},

			handleGetDate: function() {
				this.loading = false;
				this.flag = false;
			}
		},

		mounted:function() {
			this.myScroll = new iScroll("#wrapper" ,{ mouseWheel: true,probeType:2 });
		},

		updated: function() {
			setTimeout(()=>{
          		this.myScroll.refresh();
				this.bindEvents();
        	},500)
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
	#wrapper{		
		position: relative;
		height: 9.6rem;
		overflow: hidden;
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