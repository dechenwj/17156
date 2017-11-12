<template>
  <header class="header">
  	<div class="header-left iconfont icon-fanhui"></div>
  	<div class="header-title">
  		订单填写
  	</div>
  	<div class="header-right">
  		<div class="header-login-wrapper">
  				<span class="header-login">登录</span>	
  		</div>
  	</div>
  </header>
</template>

<script>
export default {
	
}
</script>

<style scoped>
 	.header{
 		height: .88rem;
 		background: #00bcd4;
		overflow:hidden;
 	}
 	.header-left{
 		float: left;
 		width: .4rem;
 		padding:0 .2rem;
 		line-height: .88rem;
 		font-size: .4rem;
 		color: #fff;
 	}
 	.header-title{
 		position: absolute;
 		left:.8rem;
 		right: 1rem;
 		top: .14rem;
    font-size: .32rem;
    color: #fff;
 		line-height: .6rem;
 		text-indent: .2rem;
    text-align: center;
 	}
 	.header-right{
 		float: right;
 		width: 1rem;
 		line-height: .88rem;
 		text-align: center;
 		color: #fff;
 	}
 	.header-login-wrapper{
 		position: relative;
 	}
 	.header-login{
 		overflow: hidden;
		display: inline-block;
 		white-space: nowrap;
		width: 1rem;
 		text-overflow: ellipsis;
 	}
 	.header-city::after{
 		content: "\0020";
 		position: absolute;
 		top: .4rem;
 		right: .14rem;
		width: 0;
		height: 0;
		border: .1rem solid transparent;
		border-top: .1rem solid #fff;
 	}
</style>
