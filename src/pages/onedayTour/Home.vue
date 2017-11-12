<template>
<div>
	<tour-content></tour-content>
</div>
</template>

<script>
	import ContentComponent from "./TourContent";
	export default {
		components: {
			"tour-content": ContentComponent
		},
		mounted:function(){
			if(this.$store.getters.shouldGetTourDate){
				this.$store.dispatch("getTourContentInfo");
			}
		}
	}	
</script>

<style>
	
</style>

