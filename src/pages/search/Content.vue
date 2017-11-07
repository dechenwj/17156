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


export default{

    data() {
        return {
            list: [{
                    "name": "宋城千古情",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=457622",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "故宫",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=38170",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "香山公园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=5451",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "天门狐仙",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=41110",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "张家界大峡谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=11559",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "颐和园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=10204",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "鼓浪屿往返轮渡",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=202032",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "鼓浪屿",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=16050",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "上海迪士尼乐园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=457472",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "北京欢乐谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=16172",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "婺源",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=7422",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "八达岭长城",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=2267",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "恭王府",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=14499",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "雍和宫",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=5971",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "天坛公园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=7698",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "西岭雪山滑雪场",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=187505",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "古北水镇",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=193953",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "玉龙雪山",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=15324",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "慈城古镇",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=5890",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "华山",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=14523",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "乌镇西栅",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=32522",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "都江堰",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=3076",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "圆明园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=3580",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "泰山",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=11414",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "成都欢乐谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=8508",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "武汉欢乐谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=41015",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "泸沽湖",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=22657",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "常州环球动漫嬉戏谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=33624",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "深圳欢乐谷",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=10462",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "凤凰山海港乐园",
                    "scheme": "http://piao.qunar.com/touch/detail.htm?id=6073",
                    "style": null,
                    "userConfig": false
                }],
            cityList: [{
                    "name": "广州",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%B9%BF%E5%B7%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "三亚",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E4%B8%89%E4%BA%9A&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "上海",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E4%B8%8A%E6%B5%B7&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "苏州",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E8%8B%8F%E5%B7%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "厦门",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%8E%A6%E9%97%A8&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "重庆",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E9%87%8D%E5%BA%86&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "成都",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%88%90%E9%83%BD&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "天津",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%A4%A9%E6%B4%A5&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "西安",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E8%A5%BF%E5%AE%89&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "南京",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%8D%97%E4%BA%AC&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "深圳",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%B7%B1%E5%9C%B3&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "宁波",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%AE%81%E6%B3%A2&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "昆明",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%98%86%E6%98%8E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "大连",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E5%A4%A7%E8%BF%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "桂林",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%A1%82%E6%9E%97&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "清远",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%B8%85%E8%BF%9C&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "杭州",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%9D%AD%E5%B7%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "惠州",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%83%A0%E5%B7%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "福州",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E7%A6%8F%E5%B7%9E&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }, {
                    "name": "武汉",
                    "scheme": "http://piao.qunar.com/touch/list.htm?&page=1&pageSize=20&keyword=%E6%AD%A6%E6%B1%89&region=北京&cityName=北京",
                    "style": null,
                    "userConfig": false
                }],

                changeNum : 0,
                cityNum : 0
        }
        
    } ,
    methods: {
        refreshClick() {
            this.changeNum += -1.72;
            this.cityNum += -0.86;
            this.$refs.change.style.top = this.changeNum + "rem";
            this.$refs.city.style.top = this.cityNum + "rem";
        }
    }
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
