'<template>
	<div>
		<indent-header></indent-header>
		<indent-content></indent-content>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import ContentComponent from "./Content";

export default {
	components: {
		"indent-header": HeaderComponent,
		"indent-content": ContentComponent
	}
}
</script>

<style>
	
</style>'