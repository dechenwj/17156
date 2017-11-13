<template>
    <header class="header">
        <router-link to="/">
        <div class="header-return iconfont icon-fanhui"></div>
        </router-link>
        <h1 class="header-title">
            <div class="header-country" @click="handleTypeClick">
                <span class="header-city inland"  :class="{'check': !isActive}">国内</span>
                <span class="header-city foreign" :class="{'check': isActive}" inland=true>海外</span>
            </div>
        </h1>
    </header>
</template>

<script>
export default {
	data(){
        return{
            isActive: true
        }
    },

    methods: {
        handleTypeClick(e) {
            const isInland = e.target.getAttribute("inland");
            this.isActive = isInland ? true : false;
            this.$emit('change', this.isActive)
        },

    }
    
}
</script>

<style scoped>

 	.header{
 		height: .88rem;
 		background: #00bcd4;
		overflow:hidden;
 	}
 	.header-return{
 		float: left;
 		width: .4rem;
 		padding: 0 .22rem;
 		line-height: .88rem;
 		font-size: .4rem;
 		color: #fff;
     }
    .header-title{
        text-align: center;
    }
 	.header-country{
        z-index: 10;
        display: inline-block;
        margin-left: -.42rem;
        font-size: 0;
        width: 4rem;
        margin-top: .15rem;
 		background: #fff;
 		border-radius: .06rem;
 		color:#00bcd4;
 	}
    .header-city {
        text-align: center;
        display: inline-block;
        width: 1.96rem;
        height: .56rem;
        border: .02rem solid #fff;
        line-height: .54rem;
        font-size: .28rem;
    }
    .check{
        color:#fff;
        background: #00bcd4;
    }
</style>

