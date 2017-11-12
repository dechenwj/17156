<template>
<div>
	<tour-Content></tour-Content>
</div>
</template>

<script>
	import ContentComponent from "./TourContent";
	export default {
		components:{
			"tour-Content": ContentComponent
		},
		mounted:function(){
			if(this.$store.getters.shouldGetTourDate){
				return this.$store.dispatch("getTourContentInfo");
			}
		}
	}
</script>

<style>
	
</style>

