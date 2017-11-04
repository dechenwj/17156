<template>
<div>
	<ul id="wrapper">
		<li class="view-list">
			<div class="view">
				<div class="img">
					<img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_110x110_fac6a6cd.jpg">
					<span class="today">可订今日</span>
				</div>

				<div class="view-etail">
					<h4>
						<span class="view-name">故宫(5A)</span>
						<span class="price">￥<em>88</em></span>
						<i>&nbsp;起</i>
					</h4>
				
					<div class="view-comments">
						<span class="star icon-iconstar"></span>
						<span>147314评论</span>
					</div>

				</div>					
			</div>

			<div class="note">
				
			</div>
		</li>
	</ul>
</div>
</template>

<script>
	// var myscroll = new iScroll("wrapper");
	export default {

	}
</script>

<style>
	.wrapper{
		position: relative;
	}
/*li*/
	.view-list {
		width: 100%;
		margin-bottom: .2rem;
	}
/*左面图片*/
	.view {
		padding: .2rem;
	} 
/*图片*/
	.img{
		position: relative;
	}
	.img img{
		position: absolute;
		display: block;
		width: 2.2rem;
		height: 2.2rem;
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
		position: relative;
		left: 2.4rem;
		padding-left: .2rem;
	}
	.view-name {
		color: #212121;
		font-size: .32rem;
		line-height: .36rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.view-name::after {
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
	.price {
		position:  absolute;
		left: 2.5rem;
		color: #ff8300;
	}
	.price>em{
		font-size: .40rem;
	}
	h4>i {
		position: absolute;
		left: 3.2rem;
		color: #9e9e9e;
		font-size: .2rem;
		line-height: .5rem;
	}
	
</style>