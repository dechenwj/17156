<template>
	<div class="indent-main">
		<div class="indent-title">
			<div class="info-left">
				<h2 class="info-title">【上午场】故宫成人票凭身份证入园</h2>
				<ul class="info-taglist">
					<li class="info-tagitem">
						<img class="info-tagicon" src="../../../static/img/guo01.png">
						2017-11-11
					</li>
					<li class="info-tagicon">
						<img src="../../../static/img/guo02.png">
						条件退
					</li>
				</ul>
			</div>
			<div class="info-right">
				<div class="indent-price">
					<span class="info-price">￥<i class="info-price-num">40</i></span>/张
				</div>
				<p class="info-note">预定须知</p>
			</div>
		</div>

		<div class="indent-num">
			<p class="info-buy-num">购买数量</p><span class="maxnum">最多买5张</span>
			<div class="setnum">
				<span class="cut colorno"><span class="minus"></span></span>
				<input class="change-buy-num" type="text" value="1" />
				<span class="add coloryes"><span class="add-horizontal"><span class="add-vertical"></span></span></span>
			</div>
		</div>
		<div class="indent-tourist">
			<div class="tourist-info">
				<label class="tourist-id">游客<span>1</span></label>
				<input class="tourist-name" type="text" value="游客姓名"/>
				<span class="ico"></span>
			</div>
			<div class="center-tel">
			<label>手机号</label>
			<span>+86<span></span></span>
			<input type="text" value="请填写手机号">
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style socped>
	.indent-main {
		width: 100%;
		padding-bottom: 1.4rem;
		background: #f5f5f5;
	}
	.indent-title {
		min-height: 1.1rem;
		position: relative;
		background: #fff;
		padding: .2rem .2rem .1rem .2rem;
		overflow: hidden;
	}
	.info-left {
		margin-right: 1.9rem;
		float:left;
	}
	.info-title {
		color: #212121;
		font-size: .32rem;
		line-height: .44rem;
		margin-bottom: .04rem;
	}
	.info-taglist {
		margin-left: -.2rem;
		overflow: hidden;
	}
	.info-tagitem {
		float: left;
		line-height: .44rem;
		margin-left: .2rem;
		color: #616161;
		font-size: .24rem;
	}
	.info-tagicon {
		position: relative;
		width: .24rem;
		height: .24rem;
		margin-right: .08rem;
	}
	.info-right {
		position: absolute;
		right: .2rem;
		top: .2rem;
		width: 1.8rem;
		text-align: right;
		float: right;
	}
	.indent-price {
		height: .44rem;
		line-height: .44rem;
		color: #9e9e9e;
		font-size: .24rem;
	}
	.info-price {
		color: #ff8300;
	}
	.info-price-num {
		margin-left: .04rem;
		font-size: .4rem;
	}
	.info-note {
		margin-top: .12rem;
		line-height: .32rem;
		color: #00bcd4;
		font-size: .28rem;
	}
	.indent-num {
		margin: .2rem 0;
		padding: .3rem .2rem .3rem .2rem;
		overflow: hidden;
		position: relative;
		background: #fff;
	}
	.info-buy-num {
		position: relative;
		top: .12rem;
		float: left;
		width: 1.6rem;
		color: #616161;
		font-size: .3rem;
		line-height: .5rem;
	}
	.maxnum {
		position: absolute;
		top: 40%;
		left: 1.6rem;
		margin-right: 2.1rem;
		color: #ccc;
		font-size: .28rem;
	}
	.setnum {
		float: right;
		display: inline-block;
		position: relative;
		border: .02rem solid #c7ced4;
		line-height: .5rem;
	}
	.cut {
		float: left;
		background: #f0f0f0;
		border-right: 0;
		position: relative;
		display: inline-block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
	}
	.add {
		float: right;
		border-left: 0;
		position: relative;
		display: inline-block;
		width: .56rem;
		height: .56rem;
		margin: .02rem;
		line-height: .5rem;
	}
	.coloryes {
		background: #00afc4;
	}
	.minus {
		background: #cad1d7;
		top: .26rem;
		left:.12rem;
		width: .3rem;
		height: .06rem;
		position: absolute;
		line-height: .5rem;
		font-size: .28rem;
	}
	.add-horizontal {
		top: .26rem;
		left: .12rem;
		width: .3rem;
		height: .06rem;
		position: absolute;
		background: #fff;
		line-height: .5rem;
		font-size: .28rem;
	}
	.add-vertical {
		top: -.1rem;
		left: .12rem;
		width: .06rem;
		height: .28rem;
		position: absolute;
		background: #fff;
		line-height: .5rem;
		font-size: .28rem;
	}
	.change-buy-num {
		width: .6rem;
		height: .6rem;
		padding: 0 .06rem;
		border:0 none;
		text-align: center;
	} 
	.indent-tourist {
		margin: .2rem 0;
		position: relative;
		color: #616161;
		font-size: .28rem;
	}
	.tourist-info {
		position: relative;
		padding: .24rem;
		background: #fff;
		overflow: hidden;
	}
	.tourist-id {
		position: relative;
		width: 1.6rem;
		font-size: .3rem;
		line-height: .5rem;	
	}
	.tourist-name {
		height: .38rem;
		padding: .06rem 0;
		border: 0;
		line-height: .38rem;
		font-family: Arial, "Microsoft Yahei" ,""
	}
</style>