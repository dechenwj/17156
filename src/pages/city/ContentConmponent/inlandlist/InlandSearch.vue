<template>
    <div class="header-search">
        <input class="header-search-input" type="text" placeholder="输入城市名或拼音"/>
    </div> 
</template>

<script>
export default {
  
}
</script>

<style scoped>
.header-search{
    height: 0.72rem;
    background: #00bcd4;
}
.header-search-input{
    display: block;
    position: absolute;
    top: .88rem;
    left: 0.2rem;
    width: 94%;
    border: none;
    border-radius: 0.06rem;
    text-align: center;
    font-size: .26rem;
    padding:.12rem 0 .12rem .1rem;
    line-height: .36rem;
}
</style>