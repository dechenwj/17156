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
                <div v-for="city in foreignHotInfo" :key="city.name">
					<div class="cityitem-group  special-group hotcity-group">
                    <div class="hotcity-name cityitem-name">{{city.name}}</div>
					</div>
                </div>
            </div>
		</div>

			<div class="city-group">
				<div v-for="(item,key) in foreignInfo" :key="key">
					<div class="city-title" :ref="key">{{key}}</div>
					<div class="cityitem-group" v-for="innerItem in item" :key="innerItem">
						<div class="city-cityitem">	
							<div class="cityitem-list-name">{{innerItem}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>

// import { mapState } from "vuex"

export default {
	props : ['nowPosition'],
    computed: {
		
		foreignInfo() {
			return this.$store.state.city.foreignInfo;
		},
		foreignHotInfo() {
			return this.$store.state.city.foreignHotInfo;
		}

	},
	
	data() {
			return {
				alphabet: [],
				letter: []
			} 
		}, 

	updated() {
		for(var i in this.foreignInfo) {
			this.alphabet[i] = this.$refs[i][0].offsetTop;
		}
		//this.$store.commit("changeSidebarInfo",this.alphabet);

        for(var key in this.foreignInfo) {
            this.key = key;
            this.letter.push(this.key);
        }
		
	},

	watch: {
		nowPosition() {
			var index = this.letter[this.nowPosition];
			var scrollTop = this.alphabet[index];
			if(document.body.scrollTop == 0) {
				document.documentElement.scrollTop = scrollTop;
			}else{
				document.body.scrollTop = scrollTop;
			}
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