<template>
    <header class="header">
        <div class="header-left iconfont icon-fanhui"></div>
        <h1 class="header-title">
            <input type="text" id="search-input-bind" placeholder="输入城市或景点名" class="header-input" />
        </h1>
        <span class="header-right">
            <button class="header-search" id="search-form-submit">搜索</button>
        </span>
    </header>
</template>

<script>

export default {

}

</script>


<style scoped>
.header {
    height: .88rem;
    background: #00bcd4;
}

.header-left {
    float: left;
    width: .4rem;
    padding: 0 .2rem;
    line-height: .88rem;
    font-size: .4rem;
    color: #fff;
}

.header-title {
    position: absolute;
    left: .8rem;
    right: 1.22rem;
    top: .14rem;
    line-height: .6rem;
    background: #fff;
    border-radius: .06rem;
    text-indent: .2rem;
    color: #ccc;
}

.header-input {
    border: none;
    line-height: .44rem;
    width: 94%;
}

.header-right {
    float: right;
    width: 1rem;
    line-height: .88rem;
    color: #fff;
    margin-left: 0.1rem;
}
.header-search {
    display: inline-block;
    border: none;
    background: #00bcd4;
    color: #fff;
    line-height: .44rem;
}
</style>
