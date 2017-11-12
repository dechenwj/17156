<template>
<div>
	<view-header></view-header>
	<view-iscroll></view-iscroll>
	<view-content></view-content>
</div>
</template>

<script>
	import HeaderComponent from "./Hander";
	import iscrollComponent from "./Iscroll";
	import ContentComponent from "./viewContent";
	export default {
		components:{
			"view-header": HeaderComponent,
			"view-iscroll":iscrollComponent,
			"view-content": ContentComponent
		}
	}
</script>

<style>
	
</style>