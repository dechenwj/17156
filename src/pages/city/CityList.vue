<template>
	<div>
  		<city-header></city-header>
		<city-content></city-content>
	</div>
</template>

<script>
import HeaderComponent from "./Header";
import ContentComponent from "./Content";
export default {
	components: {
		"city-header": HeaderComponent,
		"city-content": ContentComponent,
	}
}
</script>

<style>
 
</style>
