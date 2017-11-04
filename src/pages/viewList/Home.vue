<template>
<div>
	<view-header></view-header>
	<view-Content></view-Content>
</div>
</template>

<script>
	import HeaderComponent from "./Hander";
	import ContentComponent from "./viewContent";
	export default {
		components:{
			"view-header": HeaderComponent,
			"view-Content": ContentComponent
		}
	}
</script>

<style>
	
</style>