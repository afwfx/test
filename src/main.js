import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import http from "./plugins/Axios";   // 引用axios全局配置
import './plugins/element.js'

import axios from 'axios'

axios.defaults.timeout = 5000 // 请求超时
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c0ab0783aa0111c1655db2e/example/' // api 即上面 vue.config.js 中配置的地址

Vue.config.productionTip = false;
// Vue.prototype.$http = http;   // 添加原型方法，这样创建的对象就自带该方法了。
Vue.prototype.$axios = axios;   // 添加原型方法，这样创建的对象就自带该方法了。

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
