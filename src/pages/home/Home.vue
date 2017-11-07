<template>
	<div>
  		<home-header></home-header>
		<swiper-content></swiper-content>
		<swiper-category></swiper-category>
		<location-Activity></location-Activity>
		<hot-Recommend></hot-Recommend>
		<weekend-content></weekend-content>
	</div>
</template>

<script>

import HeaderComponent from "./Header";
import SwiperComponent from "./Swiper";
import CategoryCompontent from "./Category"
import HotRecommendComponent from "./HotRecommend";
import locaActivityComponent from "./locaActivity";
import WeekendComponent from "./Weekend";
import axios from 'axios';

export default {
	components: {
		"home-header": HeaderComponent,
		"swiper-content": SwiperComponent,
		"location-Activity":locaActivityComponent,
		"hot-Recommend":HotRecommendComponent,
		"swiper-category":CategoryCompontent,
		"hot-Recommend":HotRecommendComponent,
		'weekend-content':WeekendComponent
	}
}
</script>

<style>
 
</style>
