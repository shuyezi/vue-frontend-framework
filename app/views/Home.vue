<style scoped>
    .img{
        background-image: url("../common/images/test.png");
        background-size: 100%;
        background-repeat:no-repeat;
        background-position: 0 0;
        width: 200px;
        height: 200px;
    }
</style>
<template>
    <div>
        <h1>我是页面home</h1>
        <p>{{text}}</p>
        <br /><br />
        <div class="img"></div>
        <br /><br />
        <img src="../common/images/test.png" />
    </div>
</template>

<script>
    export default {
    name: 'home',
        props: ['text'],
    }
</script>