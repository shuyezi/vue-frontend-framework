## 框架结构
    root
        -app
            -common
                -images
                -scripts
                    *.js
                -styles
                    *.less
                layouts.html
            -configs
                -conf.build.js
                -conf.const.js
                -conf.routes.js
                -conf.user.js
            -views
                -components
                    *.vue
                *.vue
            index.js
        -node_modules
        -release*
            -images
                *.*
            app.**.css
            app.**.js
            vendor.**.css
            vendor.**.js
            index.html
        .babelrc
        DOC.md
        package.json
        README.md
        webpack.conf.base.js
        webpack.conf.dev.js
        webpack.conf.prod.js
        
## 全局API
    JR.Request.xx   |   数据请求    |   详细API：https://github.com/github/fetch
    JR.Utils.xx   |   工具类
    
## 全局配置 | 位于 ./app/configs文件夹下面
    conf.build.js   |   构建任务配置  
    conf.const.js   |   常量配置  
    conf.routes.js   |   路由和视图配置  
   
## 视图开发 | 位于 ./app/views文件夹下面
## 文档地址
    1）vue: https://cn.vuejs.org/v2/guide
    2) vue-router: https://github.com/vuejs/vue-router
    3）less: http://lesscss.cn/
## 每一个.vue即为一个视图，内容基本如下：
        <style rel="stylesheet/less" scoped>
            /* your less code here... */
        </style>
        
        <template>
            <div>/* your html code here ... */</div>
        </template>
        
        <script>
            /* your javascript code here ... */
            export default {
                name: "your component's name..."
            }
        </script>
     
    视图中的组件存放于components下
    