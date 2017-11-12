<template>
    <div class="sidebar">
        <div v-for="(item,key) in foreignInfo" :key="key" @touchstart="HandleSidebarTouchstart" :ref="key">
            {{key}}
        </div>
	</div>

</template>

<script>

import alphabet from "./ForeignContent"
export default {
    data() {
        return {
           
        }
    },

    computed: {

		foreignInfo() {
			return this.$store.state.city.foreignInfo;
		}
	},
    mounted() {

    },
    methods: {
        HandleSidebarTouchstart: function(e) {
            //console.log(e.path[1].offsetTop)  108
            //console.log(this.$refs.A[0].clientHeight) 16

            var nowPosition = parseInt((e.touches[0].clientY - 108)/16);
            this.$emit("handleChooseLetter", nowPosition);
            document.addEventListener("touchmove",this.handleMoveTouch, false);
        	document.addEventListener("touchend",this.handleMoveEnd, false)
        },
        handleMoveTouch: function(e) {
            
        }
    }
}
</script>

<style scoped>

.sidebar {
	position: fixed;
	top: 108px;
	right: 0;
	color: #00bcd4;
	font-size: .26rem;
	width: .32rem;
	line-height: .32rem;
	text-align: center;
}

</style>