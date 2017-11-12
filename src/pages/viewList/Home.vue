<template>
<div>
	<view-header></view-header>
	<!-- <view-iscroll></view-iscroll> -->
	<view-Content></view-Content>
</div>
</template>

<script>
	import HeaderComponent from "./Header";
	// import iscrollComponent from "./Iscroll";
	import ContentComponent from "./viewContent";
	export default {

		components:{
			"view-header": HeaderComponent,
			// "view-iscroll":iscrollComponent,
			"view-Content": ContentComponent
		},

		mounted() {
			if(this.$store.getters.GetViewListData) {
			 	this.$store.dispatch("getViewListInfo");
			}
		}
	}
</script>

<style>
	
</style>