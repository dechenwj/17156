<template>
<div>
	<tour-Content></tour-Content>
</div>
</template>

<script>
	import ContentComponent from "./TourContent";
	export default {
		components: {
			"tour-Content": ContentComponent
		},

		mounted() {
			if (this.$store.getters.GetOnedayData) {
				this.$store.dispatch("getOnedayInfo");
			}
		}
	}
</script>

<style>
	
</style>

