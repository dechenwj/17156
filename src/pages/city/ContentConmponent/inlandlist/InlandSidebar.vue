<template>
    <div class="sidebar">
		<div v-for="item in letters" :key="item">{{item}}</div>
	</div>
</template>

<script>
export default {
     data() {
        return {
            letters: ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"]
        }
     }  
}
</script>

<style scoped>
.sidebar {
	position: fixed;
	top: 108px;
	right: 0;
	color: #00bcd4;
	font-size: .26rem;
	width: .32rem;
	line-height: .32rem;
	text-align: center;
}
</style>
