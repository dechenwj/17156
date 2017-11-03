<template>
	<div>
  		<home-header></home-header>
		<swiper-content></swiper-content>
		<hot-Recommend></hot-Recommend>
		<weekend-content></weekend-content>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import HotRecommendComponent from "./HotRecommend";
import WeekendComponent from "./Weekend";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"hot-Recommend":HotRecommendComponent,
		'weekend-content':WeekendComponent
	}
}
</script>

<style>
 
</style>
