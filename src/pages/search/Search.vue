<template>
	<div>
  		<search-header :city="city"></search-header>
		<search-content @city="setcity"></search-content>
	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ContentComponent from "./Content";

export default {
	
	data() {
		return {
			city:"北京"
		}
	},

	components: {
		"search-header": HeaderComponent,
		"search-content": ContentComponent
	},

	methods: {
		setcity(city) {
			this.city = city;
		}
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
