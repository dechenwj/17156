<template>
	<div>
  		<tour-header ></tour-header>
  		<tour-comments></tour-comments>
  		<tour-introduction></tour-introduction>
	</div>
</template>

<script>
import Header from "./Component/Header.vue"
import Comments from "./Component/Comments"
import Introduction from "./Component/Introduction"

export default {
	components:{
		"tour-header":Header,
		"tour-comments":Comments,
		"tour-introduction":Introduction
	},
	mounted:function(){
		if(this.$store.getters.shouldGetDate){
			this.$store.dispatch("getHeaderInfo");
		}
	}
}
</script>

<style>
 
</style>
