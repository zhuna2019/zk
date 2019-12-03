import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './api/store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './styles/global.scss'
import axios from 'axios'
Vue.prototype.axios = axios
// 设置基础路径
// axios.defaults.baseURL = ''
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
