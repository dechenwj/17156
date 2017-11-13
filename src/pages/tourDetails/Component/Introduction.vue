<template>
	<div class="introduction-wrapper">
		<div class="introduction-content"  v-for="item in introductions">
	  		<ul class="ul-title">
				<li class="li-item" :class="{active:item1}">行程介绍</li>
				<li class="li-item" :class="{active:item2}">费用说明</li>
				<li class="li-item" :class="{active:item3}">使用说明</li>
	  		</ul>
	  		<div class="basic">
	  			<div class="inner">
		  			<p><span class="iconfont icontraffic">&#xe605;</span><span class="mode">交通</span><span>汽车往返</span></p>
		  			<p><span class="icon-yongcanqu iconfont icontraffic"></span><span class="mode">用餐</span><span>包含餐食</span></p>
	  			</div>
	  		</div>
	  		<div class="stroke-highlights">
	  			<h2 class="highlights-title">行程亮点</h2>
	  			<p class="highlights-item">{{item.highlights1}}<br>{{item.highlights2}}
	           </p>
	  		</div>
	  		<div class="stroke-arrange">
				 <h2 class="arranges highlights-title">行程安排</h2>
				 <div class="arrange-content"  v-for="item in arrange" :key="item.id">
					<span class="time">{{item.time}}</span>
					<div class="arrange-item">
						<div><span class="iconfont  sign">&#xe603;</span><span class="arrange-title">{{item.title}}</span></div>
						<div class="arrange-explain">{{item.content}}</div>
					</div>
				 </div>
	  		</div>
	  		<div class="product">查看详细产品介绍<span class="moreProduct iconfont icon-dayuhao"></span></div>
  			<div class="map">
  				<div style="width:300px;height:170px;border:#ccc solid 1px;font-size:12px" id="map" v-on.native="map"></div>
  			</div>
  		</div>
  		<div class="cost samestyle" id="cost">
			<div class="cost-title sametitle"><span class="null"></span><span class="back">费用及退款说明</span></div>
			<table>
				<caption class="title-color">费用包含</caption>
				<tr  v-for="item in costinner" :key="item.id">
					<td class="td1">{{item.td1}}</td>
					<td class="td2">{{item.td2}}</td>
				</tr>
				<tr>
					<td class="td1">儿童价说明</td>
					<td class="td2">身高0.8m-1.4m需提交儿童价格：含半价门票+餐费+导服+车费（1.2以下免门票，导游现退半价门票<br>）身高1.4m以上（含1.4m)需提交成人价格，如有学生证件请出示给导游，现场退学生半价门票<br>身高0.8m以下儿童且不需要占座则无须按儿童价格提交</td>
				</tr>
			</table>
			<table>
				<caption class="title-color">费用不含</caption>
				<tr  v-for="item in costoutter" :key="item.id">
					<td class="td1">{{item.td1}}</td>
					<td class="td2">{{item.td2}}</td>
				</tr>
			</table>
  		</div>
  		<div class="useing samestyle">
			<div class="useing-title sametitle"><span class="null"></span><span class="back">使用说明</span></div>
  			<dl v-for="item in users" :key="item.id">
				<dt class="title-color">{{item.dt}}</dt>
				<dd class="use-dd">{{item.dd}}</dd>
  			</dl>
  		</div>
	</div>
</template>
</head>
<script>
import {MP} from './map.js' 
import {mapState} from "vuex"
export default {
	data(){
		return{
			item1:true,
			item2:false,
			item3:false			
		}
	},
	computed:mapState({
		introductions(state){
			return state.tourDetails.introductions;
		},
		arrange(state){
			return state.tourDetails.arrange;
		},
		costinner(state){
			return state.tourDetails.costinner;
		},
		costoutter(state){
			return state.tourDetails.costoutter;
		},
		users(state){
			return state.tourDetails.users;
		}
		
	}),
	mounted(){
		this.$nextTick(function(){  
            var _this = this;  
            MP(_this.ak).then(BMap => { 
              	function initMap(){
				    createMap();//创建地图
				    setMapEvent();//设置地图事件
				    addMapControl();//向地图添加控件
				    addMapOverlay();//向地图添加覆盖物
				}
			    function createMap(){ 
			      map = new BMap.Map("map"); 
			      map.centerAndZoom(new BMap.Point(116.256956,40.123649),15);
			    }
			    function setMapEvent(){
			      map.enableScrollWheelZoom();
			      map.enableKeyboard();
			      map.enableDragging();
			      map.enableDoubleClickZoom()
			    }
			    function addClickHandler(target,window){
			      target.addEventListener("click",function(){
			        target.openInfoWindow(window);
			      });
			    }
			    function addMapOverlay(){
			      var markers = [
			        {content:"代码写完，就睡觉",title:"17156",imageOffset: {width:0,height:3},position:{lat:40.123539,lng:116.257891}}
			      ];
			      for(var index = 0; index < markers.length; index++ ){
			        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
			        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
			          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
			        })});
			        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
			        var opts = {
			          width: 200,
			          title: markers[index].title,
			          enableMessage: false
			        };
			        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
			        marker.setLabel(label);
			        addClickHandler(marker,infoWindow);
			        map.addOverlay(marker);
			      };
			    }
			    function addMapControl(){
			      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
			      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
			      map.addControl(scaleControl);
			      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
			      map.addControl(navControl);
			      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
			      map.addControl(overviewControl);
			    }
			    var map;
			      initMap();
              }) 
                           
  
 		})
	}
}	
</script>

<style scoped>
.introduction-content{
	background: #fff;
	padding: 0 .2rem;
}
.ul-title{
	width: 100%;	
	height: .8rem;
}
.li-item{
	width: 33.3%;
	line-height: .8rem;
	background: #fff;
	float: left;
	text-align: center;
	border-bottom:.02rem solid #EEEEEE;
}
.active{
	border-bottom:.04rem solid #00AFC7;
}
.basic{
	padding: .2rem 0;
	background: #fff;
}
.inner{
	padding:0 .2rem;
	line-height: .66rem;
	background: #F5F5F5;
	border-radius: .14rem;
}
.icontraffic{
	color:#11B4CA;
}
.mode{
	margin:0 .2rem 0 .4rem;
	color: #212121;
}
.stroke-highlights{
	padding-bottom:.4rem;
	background: #fff;
	color: #616161;
	border-bottom: .02rem dashed #DADADA;
}
.highlights-title{
	font-size: .4rem;
}
.highlights-item{
	padding:.2rem 0;
	max-height: 1.02rem;
	line-height: .44rem;
	overflow: hidden;
}
.arranges{
	margin:.2rem 0 .3rem; 
}
.time{
	width: .72rem;
	height: .44rem;
	padding-right: .24rem;
	text-align: center;
	line-height: .44rem;
}
.arrange-item{
	margin-top: -.3rem;
	margin-left: 0.96rem;
}
.sign{
	color:#11B4CA;
	margin-right: .2rem;
}
.arrange-explain{
	padding:.1rem 0 .2rem .37rem;
	border-left:0.02rem solid  #E4E4E4;
	line-height: .4rem;
	margin-left: .14rem;
}
.product{
	line-height: .8rem;
	border-top:0.02rem dashed  #DADADA;
	border-bottom: 0.02rem solid #EEEEEE;
	text-align: center;
	color: #616161;
}
.moreProduct{
	margin-left: .04rem;
}
.map{
	margin-top: .2rem;
}
.samestyle{
	background: #fff;
	padding: 0 .2rem;
	margin-top: .2rem;
}
.sametitle{
	line-height: .84rem;
	border-bottom: 0.02rem solid #F0F0F0;
}
.null{
	display: inline-block;
	width: .08rem;
	height: .28rem;
	background: #00BCD4;
}
.back{
	font-size: .32rem;
}
.title-color{
	color: #FF8300;
	padding: .3rem 0 .2rem; 
}
table{
	border: 0.036rem solid #F0F0F0;
}
td{
	border: 0.036rem solid #F0F0F0;
}
.td1{
	width:1.8rem;
	background: #F5F5F5;
	text-align: center;
}
.td2{
	padding: .2rem;
	line-height: .32rem;
	color: #616161;
}
.use-dd{
	line-height: .36rem;
	color: #616161;
}
</style>
