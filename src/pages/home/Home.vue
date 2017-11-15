<template>
	<div>
  	<index-home></index-home>
		<index-swipert ></index-swipert>
		<index-ico-swiper ></index-ico-swiper>
		<index-Activity></index-Activity>
		<index-hot ></index-hot>
		<index-weekend ></index-weekend>
	</div>
</template>

<script>

import Header from "./Component/Header";
import Swiper from "./Component/Swiper";
import Category from "./Component/Category";
import HotRecommend from "./Component/HotRecommend";
import locaActivity from "./Component/locaActivity";
import Weekend from "./Component/Weekend";

export default {

	components: {
		"index-home": Header,
		"index-swipert": Swiper,
		"index-ico-swiper":Category,
		"index-Activity":locaActivity,
		"index-hot":HotRecommend,
		'index-weekend':Weekend
	},

	mounted() {
		if (!this.$store.getters.shouldGetData) {
			this.$store.dispatch("getInfo");
		}
	}

}
</script>

<style>
 
</style>
