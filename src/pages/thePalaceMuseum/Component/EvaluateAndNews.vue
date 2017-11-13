<template>
	<div>
		<div class="palaceMuseum-evaluate">
			<div class="palaceMuseum-evaluate-score">
				<span class="palaceMuseum-evaluate-xiaolian"></span>
				<div class="palaceMuseum-evaluate-star">
					<span class="iconfont icon-iconstar"></span>				
					<span class="palaceMuseum-evaluate-sco">5.0分</span>
				</div>
			</div>
			<div class="palaceMuseum-evaluate-Num">
				<a class="palaceMuseum-evaluate-Num-Href" href="#">155166评论</a>
				<span class="palaceMuseum-evaluate-dayuhao iconfont icon-dayuhao"></span>
			</div>
		</div>
		
		<div class="palaceMuseum-hotNews">
			<span class="iconfont icon-laba"></span>
			<span class="palaceMuseum-hotNews-new">因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。</span>
			<span class="palaceMuseum-hotNews-dayuhao iconfont icon-dayuhao"></span>
		</div>
	</div>
</template>

<script>
</script>

<style>
.palaceMuseum-evaluate{
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	background: #FFFFFF;
	margin-bottom: 0.2rem;
}
.palaceMuseum-evaluate-score{
	display: inline-block;
}
.palaceMuseum-evaluate-xiaolian{
	position: relative;
	top: 0.08rem;
	display: inline-block;
	width: 0.36rem;
	height: 0.36rem;
	margin-left: 0.2rem;
	margin-right: 0.1rem;
	background:url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -1.24rem no-repeat;
	background-size: cover;
}
.palaceMuseum-evaluate-star{
	display: inline-block;
	color: #00bcd4;
}
.palaceMuseum-evaluate-star .icon-iconstar::before{
	content: "\e604";
	display: inline-block;
	line-height: 0.8rem;
}
.palaceMuseum-evaluate-sco{
	display: inline-block;
	width: 1rem;
    float: right;
    margin-left: .2rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.palaceMuseum-evaluate-Num{
	position: relative;
	float: right;
	padding-right: 0.62rem;
}
.palaceMuseum-evaluate-Num-Href{
	display: block;
	width: 1.5rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: #9e9e9e;
	
	
}
.palaceMuseum-evaluate-dayuhao,.palaceMuseum-hotNews-dayuhao{
	position: absolute;
	top: 0;
	right: 0.24rem;
}
.palaceMuseum-hotNews{
	position: relative;
	height: .8rem;
	line-height: .8rem;
	padding-left: .2rem;
	margin-bottom: .2rem;
	color: #f1441a;
	background-color:#fdeede;
}
.palaceMuseum-hotNews-new{
	width: 83%;
	display: inline-block;
	margin-right: .2rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.palaceMuseum-hotNews .icon-laba{
	margin-right: .1rem;
	float: left;
}
</style>