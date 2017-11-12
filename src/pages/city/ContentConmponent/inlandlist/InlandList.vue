<template>
    <div>
		<inland-search></inland-search>
		<inland-content></inland-content>
		<inland-sidebar></inland-sidebar>
	</div>
</template>

<script>

import SearchComponent from "./InlandSearch";
import ContentComponent from "./InlandContent";
import SidebarComponent from "./InlandSidebar";

export default {
	components: {
		"inland-search": SearchComponent,
		"inland-content": ContentComponent,
		"inland-sidebar": SidebarComponent
	}
}
</script>

<style>


</style>

  
