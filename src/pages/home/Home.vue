<template>
	<div>
  		<home-header></home-header>
		<swiper-content></swiper-content>
		<hot-Recommend></hot-Recommend>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import HotRecommendComponent from "./HotRecommend";

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"hot-Recommend":HotRecommendComponent
	}
}
</script>

<style>
 
</style>
