<template>
    <div>
		<foreign-search></foreign-search>
		<foreign-content></foreign-content>
		<foreign-sidebar></foreign-sidebar>
	</div>
</template>

<script>

import SearchComponent from "./ForeignSearch";
import ContentComponent from "./ForeignContent";
import SidebarComponent from "./ForeignSidebar";


export default {

	components: {
		"foreign-search": SearchComponent,
		"foreign-content": ContentComponent,
		"foreign-sidebar": SidebarComponent
	},

	methods: {

	}
}
</script>

<style>

</style>

  
