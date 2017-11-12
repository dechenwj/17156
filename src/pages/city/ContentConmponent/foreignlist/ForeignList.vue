<template>
    <div>
		<foreign-search></foreign-search>
		<foreign-content :nowPosition = "nowPosition"></foreign-content>
		<foreign-sidebar @handleChooseLetter = "handleChooseLetter"></foreign-sidebar>
	</div>
</template>

<script>

import SearchComponent from "./ForeignSearch";
import ContentComponent from "./ForeignContent";
import SidebarComponent from "./ForeignSidebar";


export default {
	data() {
		return {
			nowPosition: ''
		}
	},
	 

	components: {
		"foreign-search": SearchComponent,
		"foreign-content": ContentComponent,
		"foreign-sidebar": SidebarComponent
	},

	methods: {
		handleChooseLetter(nowPosition) {
			this.nowPosition = nowPosition;
		}
	}
}
</script>

<style>

</style>

  
