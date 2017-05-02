<style rel="stylesheet/less" scoped>
    body{
        background-color: #00ffff;
    }
    .wrapper{
        background-color: #ff00ff;
    }
</style>

<template>
    <div id="wrapper">
        我是公共的INDEX.APP
        <ul class="">
            <li><router-link to="home">Home</router-link></li>
            <li><router-link to="test?a=1">Test</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    console.log("JRAPP", window.JRAPP);
    JR.Request
        .POST('http://m.ly.com/flightnew/json/pcalender.html', {
            autoPrefix: false,
            data: {
                bc:'PEK',
                ac:'SHA'
            }
        })
        .then(function(response) {
            return response.text()
        })
        .then(function(body) {
            console.log('fetch', body);
        })
        .catch(err => console.log('fetch', err));

    import Home from './Home.vue';

    export default {
        name: "Index"
    }
</script>