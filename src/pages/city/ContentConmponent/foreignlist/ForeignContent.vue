<template>
    <div class="city-main">
	    <div class="city-group">
            <div class="city-title">您的位置</div>
            <div class="native-cityitem city-cityitem">
                <div class="cityitem-group special-group">
                    <div class="native-cityitem-name cityitem-name">北京</div>
                </div>
            </div>
        </div>

        <div class="city-group">
            <div class="city-title">热门城市</div>
			<div class="native-cityitem city-cityitem">
                <div>
					<div class="cityitem-group  special-group hotcity-group">
                    <div class="hotcity-name cityitem-name" v-for="city in foreignHotInfo" :key="city.name">{{city.name}}</div>
					</div>
                </div>
            </div>
		</div>

			<div class="city-group" ref="top">
				<div v-for="letter in letters" :key="letter">
					<div class="city-title" ref="letter">{{letter}}</div>
					<div v-for="item in foreignInfo" :key="item.name">
						<div class="cityitem-group" v-if="item.pinyin.substr(0,1) == letter">
							<div class="city-cityitem">	
								<div class="cityitem-list-name">{{item.name}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {

	computed: {
		foreignInfo() {
			return this.$store.state.city.foreignInfo;
		},
		foreignHotInfo() {
			return this.$store.state.city.foreignHotInfo;
		},
	},


    data() {
        return {
            letters: ["A","B","C","D","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"],
			hotcities: [{
				"name": "普吉岛"
			},{
				"name": "清迈"
			},{
				"name": "香港"
			},{
				"name": "东京"
			},{
				"name": "台北"
			},{
				"name": "澳门"
			},{
				"name": "巴厘岛"
			},{
				"name": "曼谷"
			},{
				"name": "芭提雅"
			},{
				"name": "凯恩斯"
			},{
				"name": "首尔"
			},{
				"name": "新加坡"
			},{
				"name": "济州岛"
			},{
				"name": "迪拜"
			},{
				"name": "沙巴"
			},{
				"name": "苏梅岛"
			}],
            cities: [{
                "pinyin": "AR",
				"name": "阿根廷"
			}, {
				"pinyin": "AM",
				"name": "亚美尼亚"
			}, {
				"pinyin": "AU",
				"name": "澳大利亚"
			}, {
				"pinyin": "AT",
				"name": "奥地利"
			}, {
				"pinyin": "AZ",
				"name": "阿塞拜疆"
			}, {
				"pinyin": "BS",
				"name": "巴哈马"
			}, {
				"pinyin": "BH",
				"name": "巴林"
			},{
                "pinyin": "ODS",
				"name": "欧登塞"
            },{
                "pinyin": "XLS",
				"name": "下龙市"
            },{
                "pinyin": "YLSD",
				"name": "亚历山大"
            },{
                "pinyin": "WGH",
				"name": "温哥华"
            },{
				"pinyin": "BD",
				"name": "孟加拉国"
			}, {
				"pinyin": "BB",
				"name": "巴巴多斯"
			}, {
				"pinyin": "BY",
				"name": "白俄罗斯"
			}, {
				"pinyin": "BE",
				"name": "比利时"
			}, {
				"pinyin": "BZ",
				"name": "伯利兹"
			}, {
				"pinyin": "BJ",
				"name": "贝宁"
			}, {
				"pinyin": "BM",
				"name": "百慕大群岛"
			}, {
				"pinyin": "BO",
				"name": "玻利维亚"
			}, {
				"pinyin": "BW",
				"name": "博茨瓦纳"
			}, {
				"pinyin": "BR",
				"name": "巴西"
			}, {
				"pinyin": "BN",
				"name": "文莱"
			}, {
				"pinyin": "BG",
				"name": "保加利亚"
			}, {
				"pinyin": "BF",
				"name": "布基纳法索"
			}, {
				"pinyin": "MM",
				"name": "缅甸"
			}, {
				"pinyin": "BI",
				"name": "布隆迪"
			}, {
				"pinyin": "CM",
				"name": "喀麦隆"
			}, {
				"pinyin": "CA",
				"name": "加拿大"
			}, {
				"pinyin": "CF",
				"name": "中非共和国"
			}, {
				"pinyin": "TD",
				"name": "乍得"
			}, {
				"pinyin": "CL",
				"name": "智利"
			}, {
				"pinyin": "CO",
				"name": "哥伦比亚"
			}, {
				"pinyin": "CG",
				"name": "刚果"
			}, {
				"pinyin": "CK",
				"name": "库克群岛"
			}, {
				"pinyin": "CR",
				"name": "哥斯达黎加"
			}, {
				"pinyin": "CU",
				"name": "古巴"
			}, {
				"pinyin": "CY",
				"name": "塞浦路斯"
			}, {
				"pinyin": "CZ",
				"name": "捷克"
			}, {
				"pinyin": "DK",
				"name": "丹麦"
			}, {
				"pinyin": "DJ",
				"name": "吉布提"
			}, {
				"pinyin": "DO",
				"name": "多米尼加共和国"
			}, {
				"pinyin": "EC",
				"name": "厄瓜多尔"
			}, {
				"pinyin": "EG",
				"name": "埃及"
			}, {
				"pinyin": "SV",
				"name": "萨尔瓦多"
			}, {
				"pinyin": "EE",
				"name": "爱沙尼亚"
			}, {
				"pinyin": "ET",
				"name": "埃塞俄比亚"
			}, {
				"pinyin": "FJ",
				"name": "斐济"
			}, {
				"pinyin": "FI",
				"name": "芬兰"
			}, {
				"pinyin": "FR",
				"name": "法国"
			}, {
				"pinyin": "GF",
				"name": "法属圭亚那"
			}, {
				"pinyin": "GA",
				"name": "加蓬"
			}, {
				"pinyin": "GM",
				"name": "冈比亚"
			}, {
				"pinyin": "GE",
				"name": "格鲁吉亚"
			}, {
				"pinyin": "DE",
				"name": "德国"
			}, {
				"pinyin": "GH",
				"name": "加纳"
			}, {
				"pinyin": "GI",
				"name": "直布罗陀"
			}, {
				"pinyin": "GR",
				"name": "希腊"
			}, {
				"pinyin": "GD",
				"name": "格林纳达"
			}, {
				"pinyin": "GU",
				"name": "关岛"
			}, {
				"pinyin": "GT",
				"name": "危地马拉"
			}, {
				"pinyin": "GN",
				"name": "几内亚"
			}, {
				"pinyin": "GY",
				"name": "圭亚那"
			}, {
				"pinyin": "HT",
				"name": "海地"
			}, {
				"pinyin": "HN",
				"name": "洪都拉斯"
			}, {
				"pinyin": "HK",
				"name": "香港"
			}, {
				"pinyin": "HU",
				"name": "匈牙利"
			}, {
				"pinyin": "IS",
				"name": "冰岛"
			}, {
				"pinyin": "IN",
				"name": "印度"
			}, {
				"pinyin": "ID",
				"name": "印度尼西亚"
			}, {
				"pinyin": "IR",
				"name": "伊朗"
			}, {
				"pinyin": "IQ",
				"name": "伊拉克"
			}, {
				"pinyin": "IE",
				"name": "爱尔兰"
			}, {
				"pinyin": "IL",
				"name": "以色列"
			}, {
				"pinyin": "IT",
				"name": "意大利"
			}, {
				"pinyin": "JM",
				"name": "牙买加"
			}, {
				"pinyin": "MG",
				"name": "马达加斯加"
			}, {
				"pinyin": "MW",
				"name": "马拉维"
			}, {
				"pinyin": "MY",
				"name": "马来西亚"
			}, {
				"pinyin": "MV",
				"name": "马尔代夫"
			}, {
				"pinyin": "ML",
				"name": "马里"
			}, {
				"pinyin": "MT",
				"name": "马耳他"
			}, {
				"pinyin": "MU",
				"name": "毛里求斯"
			}, {
				"pinyin": "MX",
				"name": "墨西哥"
			}, {
				"pinyin": "MD",
				"name": "摩尔多瓦"
			}, {
				"pinyin": "MC",
				"name": "摩纳哥"
			}, {
				"pinyin": "MN",
				"name": "蒙古"
			}, {
				"pinyin": "MS",
				"name": "蒙特塞拉特岛"
			}, {
				"pinyin": "MA",
				"name": "摩洛哥"
			}, {
				"pinyin": "MZ",
				"name": "莫桑比克"
			}, {
				"pinyin": "NA",
				"name": "纳米比亚"
			}, {
				"pinyin": "NR",
				"name": "瑙鲁"
			}, {
				"pinyin": "NP",
				"name": "尼泊尔"
			}, {
				"pinyin": "NL",
				"name": "荷兰"
			}, {
				"pinyin": "NZ",
				"name": "新西兰"
			}, {
				"pinyin": "NI",
				"name": "尼加拉瓜"
			}, {
				"pinyin": "NE",
				"name": "尼日尔"
			}, {
				"pinyin": "NG",
				"name": "尼日利亚"
			}, {
				"pinyin": "KP",
				"name": "朝鲜"
			}, {
				"pinyin": "NO",
				"name": "挪威"
			}, {
				"pinyin": "PT",
				"name": "葡萄牙"
			}, {
				"pinyin": "PR",
				"name": "波多黎各"
			}, {
				"pinyin": "QA",
				"name": "卡塔尔"
			}, {
				"pinyin": "RO",
				"name": "罗马尼亚"
			}, {
				"pinyin": "RU",
				"name": "俄罗斯"
			}, {
				"pinyin": "LC",
				"name": "圣卢西亚"
			}, {
				"pinyin": "VC",
				"name": "圣文森特岛"
			}, {
				"pinyin": "SM",
				"name": "圣马力诺"
			}, {
				"pinyin": "SB",
				"name": "所罗门群岛"
			}, {
				"pinyin": "SO",
				"name": "索马里"
			}, {
				"pinyin": "ZA",
				"name": "南非"
			}, {
				"pinyin": "ES",
				"name": "西班牙"
			}, {
				"pinyin": "LK",
				"name": "斯里兰卡"
			}, {
				"pinyin": "SD",
				"name": "苏丹"
			}, {
				"pinyin": "SR",
				"name": "苏里南"
			}, {
				"pinyin": "SZ",
				"name": "斯威士兰"
			}, {
				"pinyin": "SE",
				"name": "瑞典"
			}, {
				"pinyin": "CH",
				"name": "瑞士"
			}, {
				"pinyin": "SY",
				"name": "叙利亚"
			}, {
				"pinyin": "TJ",
				"name": "塔吉克斯坦"
			}, {
				"pinyin": "TZ",
				"name": "坦桑尼亚"
			}, {
				"pinyin": "TH",
				"name": "泰国"
			}, {
				"pinyin": "TG",
				"name": "多哥"
			}, {
				"pinyin": "TO",
				"name": "汤加"
			}, {
				"pinyin": "TT",
				"name": "特立尼达和多巴哥"
			}, {
				"pinyin": "TN",
				"name": "突尼斯"
			}, {
				"pinyin": "TR",
				"name": "土耳其"
			}, {
				"pinyin": "TM",
				"name": "土库曼斯坦"
			}, {
				"pinyin": "UG",
				"name": "乌干达"
			}, {
				"pinyin": "UA",
				"name": "乌克兰"
			}, {
				"pinyin": "AE",
				"name": "阿拉伯联合酋长国"
			}, {
				"pinyin": "GB",
				"name": "英国"
			}, {
				"pinyin": "US",
				"name": "美国"
			}, {
				"pinyin": "UY",
				"name": "乌拉圭"
			}, {
				"pinyin": "UZ",
				"name": "乌兹别克斯坦"
			}, {
				"pinyin": "VE",
				"name": "委内瑞拉"
			}, {
				"pinyin": "VN",
				"name": "越南"
			}, {
				"pinyin": "YE",
				"name": "也门"
			}, {
				"pinyin": "YU",
				"name": "南斯拉夫"
			}, {
				"pinyin": "ZW",
				"name": "津巴布韦"
			}, {
				"pinyin": "ZR",
				"name": "扎伊尔"
			}, {
				"pinyin": "ZM",
				"name": "赞比亚"
            }]
        }
     },                   
}
</script>

<style scoped>
.city-main {
    background: #f5f5f5;
}
.city-title {
    background: #f5f5f5;
    color: #616161;
    font-size: .26rem;
    padding-left: .3rem;
    line-height: .54rem;
	display: block;
	border-bottom: .02rem solid #c9cccd;
}
.city-cityitem {
    background: #fff;
    overflow: hidden;
}
.cityitem-group {
    box-sizing: border-box;
}
.cityitem-name {
    display: inline-block;
    border: .02rem solid #c9cccd;
    line-height: .6rem;
    border-radius: .06rem;
    height: .6rem;
    width: 100%;    
}
.special-group {
	padding: .2rem .14rem 0 .1rem;
	width: 33.33%;	
}
.native-cityitem{
    padding-left: .2rem;
    padding-right: .5rem;
    text-align: center;	
    padding-top: .04rem;
    padding-bottom: .26rem;
    border-bottom: .02rem solid #c9cccd;
}
.native-cityitem-name {
    border-color: #00afc7;
    color: #00afc7; 
}

.hotcity-name {
	display: inline-block;
	width: 100%;
}
.hotcity-group {
   	float: left;
}
.cityitem-list-name {
	display: block;
    border-bottom: .02rem solid #c9cccd;
    line-height: .76rem;
    height: .76rem;
    width: 100%; 
	font-size: .28rem;
	padding-left: .2rem;
	color: #212121;
}

</style>