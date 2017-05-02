import Vue from 'vue';
import Index from './views/Index.vue';

//路由视图
import router from './configs/conf.routes';

console.log('router', router);

router.beforeEach((to, from, next) => {
    console.log('to, from, nextto, from, nextto, from, nextto, from, nextto, from, next', to, from, next);
})

window.JRAPP = new Vue({
    router,
    render: h => h(Index)
}).$mount('#wrapper');
