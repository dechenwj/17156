<template>
    <header class="header">
        <div class="header-return iconfont icon-fanhui"></div>
        <h1 class="header-title">
            <div class="header-country">
                <span class="header-city inland " :class="ischeck" @click="inlandClick">国内</span>
                <span class="header-city foreign" :class="ischecked" @click="foreignClick">海外</span>
            </div>
        </h1>
    </header>
</template>

<script>
export default {
	data(){
        return{
            ischeck: "check",
            ischecked: ""
        }
    },
    methods: {
        inlandClick() {
            this.ischecked = "";
            this.ischeck = "check";
        },
        foreignClick(){
            this.ischeck = "";
            this.ischecked = "check";
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

