<template>
    <div class="content">
        <div class="hotlist">
            <div class="hotlist-header">
                <span class="hotlist-search">热门搜索</span>
                <span class="hotlist-refresh" @click="refreshClick">换一换</span>
            </div>

            <div class="hotlist-main">

                <div class="hotlist-group">
                    <div class="hotlist-ico">
                        <div class="hotlist-con">
                            <img src="http://img1.qunarzz.com/piao/fusion/1511/da/8c3405b0e7d493f7.png"/>
                        </div>
                    </div>

                    <div class="hotlist-item fir">
                        <div  ref="change" class="hotlist-iteminner">
                            <span class="hotlist-each" v-for="item in list">
                                {{item.name}}
                            </span>
                        </div>
                    </div>
                </div>
                
                <div class="hotlist-group">
                    <div class="hotlist-ico">
                        <div class="hotlist-con">
                            <img src="http://img1.qunarzz.com/piao/fusion/1511/e8/d46972e07444bbf7.png"/>
                        </div>
                    </div>
                    <div class="hotlist-item sec">
                        <div class="hotlist-iteminner" ref="city">
                            <span class="hotlist-each sec-each" v-for="item in cityList">
                                {{item.name}}
                            </span>
                        </div>
                    </div>
                </div>      
            </div>


        <div class="search-nearby">
            <div class="search-nearbybtn">搜索身边的景点</div>
        </div>

        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default{
    data() {
        return {
            changeNum : 0,
            cityNum : 0
        }  
    },

    methods: {
        refreshClick() {
            this.changeNum += -1.72;
            this.cityNum += -0.86;
            this.$refs.change.style.top = this.changeNum + "rem";
            this.$refs.city.style.top = this.cityNum + "rem";
        }
    },

    computed: mapState({
        list(state) {
            return state.search.list
        },
        cityList(state) {
            return state.search.cityList
        }
    })
}

</script>


<style>
.content{
    width:100%;
    box-shadow: 0 1px 3px 1px #c7ced4;
    background: #fff;
}
.hotlist-header{
    height: .64rem;
    line-height: .64rem;
    padding: 0 .2rem;
    background-color: #f0f5f6;
}
.hotlist-search{
    font-size: .26rem;
    color: #888;
}
.hotlist-refresh{
    color: #00afc7;
    font-size: .26rem;
    float: right;
}
.search-nearby{
    padding: 0.2rem;
}
.search-nearbybtn{
    height: 0.72rem;
    border: 1px solid #dde1e3;
    border-radius: 2px;
    color: #333;
    font-size: .26rem;
    text-align: center;
    line-height: 0.72rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.hotlist-group{
    position: relative;
    padding-left: .74rem;
    border-top: 1px solid #dce5e7;
    overflow: hidden;
}
.hotlist-ico{
    position: absolute;
    left: 0;
    top: 0;
    width: 0.74rem;
    height: 100%;
    overflow:hidden;
    line-height: 100%;
    text-align: center;
}
.hotlist-con{
    position: absolute;
    width: 0.72rem;
    height: 70%;
    top: 15%;
    border-right: 1px solid #dce5e7;
}
.hotlist-con img{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    position: absolute;
    top: 35%;
    left: 30%;
}
.fir{
    height: 1.8rem;
    width: 100%;
}
.sec{
    height: 0.92rem;
    width: 100%;
}
.hotlist-iteminner{
    position: absolute;
}
.hotlist-each{
    display: inline-block;
    line-height: .36rem;
    border-right: 1px dashed #c9cccd;
    font-size: .3rem;
    padding: 0 .3rem;
    margin: 0.25rem 0;
}
.sec-each{
    width: 0.9rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
