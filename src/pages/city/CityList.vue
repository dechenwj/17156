<template>
	<div>
  		<city-header @change="handleTypeChange"></city-header>
		<city-foreign v-if="isInland"></city-foreign>
		<city-inland v-else></city-inland>
	</div>
</template>

<script>
import HeaderComponent from "./ContentConmponent/Header";
import ForeignComponent from "./ContentConmponent/foreignlist/ForeignList" ;
import InlandComponent from "./ContentConmponent/inlandlist/InlandList" ;


export default {

	components: {
		"city-header": HeaderComponent,
		"city-foreign": ForeignComponent,
		"city-inland": InlandComponent
	},

	data() {
		return {
			isInland: true
		}
	},

	methods: {
		handleTypeChange(isInland) {
			this.isInland = isInland;
		}
	},

	mounted() {
		if(this.$store.getters.shouldGetCityData) {
			this.$store.dispatch("getCityInfo");
			alert()
		}
	}

}
</script>

<style>
 
</style>
