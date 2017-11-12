<template>
	<div>
  		<search-header></search-header>
		<search-content></search-content>
	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ContentComponent from "./Content";

export default {
	components: {
		"search-header": HeaderComponent,
		"search-content": ContentComponent
	},

	mounted() {
		if(this.$store.getters.GetSearchData) {
			this.$store.dispatch("getSearchInfo");
		}
	}
}
</script>

<style>
 
</style>
