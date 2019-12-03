// 引入axios
import axios from 'axios'
import qs from 'qs'
// import store from './store'
// 设置基础路径
// axios.defaults.baseURL = ''
// 添加请求拦截器 --服务器需要token值才可以获取数据，所以设置拦截器，每个路由跳转都附带token值访问服务器
axios.interceptors.request.use(
  config => {
    // this.axios.post(
    // "user/signin",
    // {uname:dingding , upwd:123456}
    // )
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    if (localStorage.getItem('token')) {
      // 必须在请求头中使用token 字段提供的token令牌
      config.headers.token = localStorage.getItem('token')
    }
    if (sessionStorage.getItem('token')) {
      config.headers.token = sessionStorage.getItem('token')
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)
// axios.interceptors.response.use(
//   res => {
//     if (res.data.status === 403) {
//       localStorage.removeItem('token')
//       sessionStorage.removeItem('token')
//       store.commit('setUserName', '')
//     } else if (res.data.code === -1) {
//       store.commit('setUserName', '')
//       // alert(res.data.msg+" 请先登录 !");
//     } else if (res.data.token) {
//       store.commit('setUserName', res.data.uname)
//       if (res.remember === 'true') {
//         localStorage.setItem('token', res.data.token)
//       } else {
//         sessionStorage.setItem('token', res.data.token)
//       }
//     }
//     return res
//   },
//   error => {
//   }
// )
// 处理post请求发送，实现用户登录验证
export const login = (data) => {
  return axios({
    method: 'get',
    url: 'login.json',
    data
  })
}
// get方式请求列表的数据
export const getNavLeftList = (i) => {
  return axios({
    url: '/api/Menu/GetAllTree',
    method: 'get'
  })
}

export const getNavTopList = () => {
  return axios({
    url: '',
    method: 'get'
  })
}
