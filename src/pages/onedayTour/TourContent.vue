<template>
  <div>
    <ul id="tourWrapper">
      <li class="tour-list" v-for="item in tourContent">
          <div class="tour-img">
               <img :src="item.img">
              <p class="tomorrow" v-if="item.show">可定明日</p> 
          </div>

          <div class="tour-cont">
            <h4 class="tour-cont-title">{{item.title}}{{item.con}}</h4>
              <ol>
                <li class="first-title"><a href="jacaScript:;">{{item.li1}}</a></li>
                <li><a href="jacaScript:;">{{item.li2}}</a></li>
                <li><a href="jacaScript:;">{{item.li3}}</a></li>
              </ol>
              <div class="present" v-if="item.present">赠券</div>
            <div class="sale icotitle"><i>￥</i><strong>{{item.price}}</strong>起</div>
            <p class="sold icotitle">已售<span>{{item.num}}</span></p>
          </div>          
      </li>
    </ul>
    <div class="footer">
      <div class="pagelist">
        <span class="pre-page pageN">上一页</span>
        <span class="page-num">1</span>
        <span class="next-page pageN">下一页</span>
      </div>
      <p class="toWhere"><a href="javaScript;">去哪门票</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       tourContent:[
        {show:true,img:"http://img1.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_110x110_532f0563.jpg",title:"[北京出发]",con:"天安门+故宫【赠送珍宝馆】+八达岭长城+鸟巢...",li1:"北京出发",li2:"无自费",li3:"无购物",price:24,num:931,present:false},
          {show:true,img:"http://img1.qunarzz.com/p/tts0/1511/7e/f82b6124019d78f7.jpg_110x110_f99e78f5.jpg",title:"【配备无线耳麦】",con:"故宫+珍宝馆深度纯玩半日游（含导游+门票）",li1:"北京出发",li2:"无自费",li3:"无购物",price:75,num:400,present:false},
          {show:false,img:"http://img1.qunarzz.com/p/tts1/1605/35/f267ae654a8511f7.jpg_110x110_33358754.jpg",title:"【休闲纯玩半日游】",con:"恭王府.含大戏楼+什刹海+黄包车半日游",li1:"北京出发",li2:"无自费",li3:"无购物",price:90,num:189,present:false},
           {show:true,img:"http://img1.qunarzz.com/p/tts3/1708/e0/9072ffc0ef322302.jpg_110x110_52fb9421.jpg",title:"[北京出发]",con:"天安门+故宫【赠送珍宝馆】+八达岭长城+鸟巢...",li1:"北京出发",li2:"无自费",li3:"无购物",price:24,num:931,present:false},
            {show:true,img:"http://img1.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_110x110_532f0563.jpg",title:"【7-12点天天发】",con:"八达岭长城+往返直通车+门票，自由可选！",li1:"北京出发",li2:"无自费",li3:"无购物",price:45,num:7379,present:true},
             {show:false,img:"http://img1.qunarzz.com/p/tts0/1707/e3/d77d245a07ca4102.jpg_110x110_b3252ca4.jpg",title:"【爆款】",con:"北京八达岭长城+十三陵定陵含地宫鸟巢纯玩一日游",li1:"北京出发",li2:"无自费",li3:"无购物",price:148,num:3457,present:false},
              {show:true,img:"http://img1.qunarzz.com/p/tts1/1611/34/ce613ef51240ad02.jpg_110x110_fb7e8f08.jpg",title:"【5大景点】",con:"广场+故宫+八达岭长城+鸟巢水立方，北京一日游",li1:"北京出发",li2:"无自费",li3:"无购物",price:204,num:254,present:false},
              {show:true,img:"http://img1.qunarzz.com/p/tts4/1511/bb/0e9192fe4e7fcef7.jpg_110x110_058b32ed.jpg",title:"【深度文化游】",con:"故宫+恭王府+颐和园+鸟巢水立方纯玩一日游",li1:"北京出发",li2:"无自费",li3:"无购物",price:208,num:2345,present:false},
              {show:true,img:"http://img1.qunarzz.com/p/tts1/1505/c9/4cdfc7d9932008.jpg_110x110_16d9c8ff.jpg",title:"",con:"北京八达岭长城＋庆丰包子铺+恭王府+鸟巢.水立方纯玩一日游",li1:"北京出发",li2:"无自费",li3:"无购物",price:198,num:343,present:true}
        ]
       }
    }
  }
</script>
<style>
body{
  background-color:#F5F5F5;
}
.tour-list{
  width: 100%;
  height: 1.48rem;
  padding: .2rem 0 .2rem .2rem;
  position: relative;
  background: #fff;
}
.tour-img{
  position: relative;
}
.tour-img img{
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width:1.6rem;
  height: 1.6rem;
}
.tour-img .tomorrow{
  position: absolute;
  width: 1rem;
  line-height: .24rem;
  left:-.04rem;
  top: -.04rem;
  background:#00BCD4; 
  font-size: .2rem;
  color: #fff;
  padding: .02rem;
}
.tour-img .tomorrow::after{
  position: absolute;
  content: "";
  height: 0rem;
  width: .02rem;
  border-top:.14rem solid #00BCD4 ;
  border-bottom:.14rem solid #00BCD4;
  border-right:.1rem solid transparent ; 
  right: -.1rem;
  top: -.01rem;
}
.tour-cont{
  position: relative;
  border-bottom: 1px solid #e4e6e6;
  left:1.8rem;
  padding-right:.1rem; 
}
.tour-cont-title{
  width: 70%; 
  height: .72rem;
  line-height: .36rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tour-cont ol{
  float: left;
  line-height: .4rem;
  margin-top: .1rem;
  overflow: hidden;
}
.tour-cont ol li{
  float: left;
  font-size: .24rem;
}
.tour-cont ol .first-title a{
  border-left: none;
  color: #00BCD4;
}
.tour-cont ol li a{
  border-left: 1px solid #F5F5F5;
  padding:0 .06rem;
  color: #616161;
}
.tour-cont .present{
  position: absolute;
  width: .48rem;
  height: .2rem;
  font-size: .16rem;
  padding: .02rem;
  color: #FF1200;
  border: 1px solid #FF1200;
  top: 0.6rem;
  right: 2.2rem;
}
.tour-cont .sale{
  position: absolute;
  width: 20%;
  height: .32rem;
  text-align: right;
  top:1rem;
  right: 2.2rem;
  padding: 0 .02rem;
  overflow: hidden;
}
.icotitle{
  font-size: .16rem;
  color: #9E9E9E;
}
.tour-cont .sale i,.tour-cont .sale strong{
  color: #FF8300;
  font-weight: bold;
}
.tour-cont .sale strong{
  font-size: .32rem;
}
.tour-cont .sold{
  width: 100%;
  overflow: hidden;
  padding:.1rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.footer{
  width: 100%;
  padding-top:.4rem; 
}
.pagelist{
  text-align: center;
}
.pagelist .pageN{
  padding: .1rem .16rem;
  background:#BDBDBD;
  border-radius: .04rem;
  text-align: center;
  color: #fff;
}
.pagelist .next-page{
  border: 1px solid #00AfC9;
  color: #00AfC9;
  background: none;
}
.pagelist .page-num{
  padding: .1rem .2rem;
}
.toWhere{
  text-align: center;
  padding: .4rem 0;
  font-size: .32rem;
}
</style>