<template>
	<div>
  		<home-header></home-header>
		<weekend-content></weekend-content>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import WeekendComponent from "./Weekend";

export default {
	components: {
		"home-header": HeaderComponent,
		'weekend-content':WeekendComponent
	}
}
</script>

<style>
 
</style>
