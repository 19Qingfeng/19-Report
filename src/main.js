import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// 引入Echarts挂在在vue原型上 
// 这样就不用每次蠢的再去import了 直接调用vue实例也就是this就OK

// 先全部引入 后续再改吧
import echarts from "echarts";
// 使用vue-echarts


import "./plugins/vue-echarts"
import "./assets/index.css"


Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')