<template>
	<div>
  		<home-header></home-header>
		<swiper-content></swiper-content>
		<location-Activity></location-Activity>
		<hot-Recommend></hot-Recommend>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import HotRecommendComponent from "./HotRecommend";
import locaActivityComponent from "./locaActivity";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"location-Activity":locaActivityComponent,
		"hot-Recommend":HotRecommendComponent
	}
}
</script>

<style>
 
</style>
