/**
 * Created by jimmy on 2017/5/1.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 路由视图
const router = new VueRouter({
    routes:[
        {
            path: '/home', name: 'home', component: require('../views/Home.vue')
        },{
            path: '/test', name: 'test', component: require('../views/Test.vue')
        },{
            path:'*',redirect:'/home'
        }
    ]
});


// 输出router
export default router;