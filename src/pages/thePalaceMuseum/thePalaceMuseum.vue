<template>
	<div>
		<thePlaceMuseum-header></thePlaceMuseum-header>
		<thePlaceMuseum-EvaluateAndNews></thePlaceMuseum-EvaluateAndNews>
		<thePlaceMuseum-Recommend></thePlaceMuseum-Recommend>
		<thePlaceMuseum-NowDayTicket></thePlaceMuseum-NowDayTicket>
	</div>
</template>

<script>
	
import Header from "./Component/Header";	
import EvaluateAndNews from "./Component/EvaluateAndNews";
import Recommend from "./Component/Recommend";
import NowDayTicket from "./Component/NowDayTicket";
	
export default {
	
	components: {
		"thePlaceMuseum-header": Header,
		"thePlaceMuseum-EvaluateAndNews":EvaluateAndNews,
		"thePlaceMuseum-Recommend": Recommend,
		"thePlaceMuseum-NowDayTicket":NowDayTicket
	}
}
</script>

<style>
</style>