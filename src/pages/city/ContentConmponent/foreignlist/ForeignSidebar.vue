<template>
    <div class="sidebar">
		<div v-for="item in letters" :key="item">
            <div @click="sidebarClick">
                {{item}}
            </div>
        </div>
	</div>

</template>

<script>
export default {
    data() {
        return {
            letters: ["A","B","C","D","F","G","H","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"]
        }
    },
    methods: {
        sidebarClick: function(e) {
            let value = e.target.innerText;
        },
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