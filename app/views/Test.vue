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
        <h1>我是页面test</h1>
        <Demo />
    </div>
</template>

<script>
    import Demo from './components/Demo.vue';

    export default {
        name: 'test',
        components: {
            Demo
        }
    }
</script>