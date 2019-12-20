import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/fonts/iconfont.css'
import Router from 'vue-router'
// 导入全局样式表
import './styles/global.scss'
import './styles/element-variables.scss'
import axios from 'axios'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 建立中转站，实现组件与组件之间的传值
let bus = new Vue()
Vue.prototype.bus = bus
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
