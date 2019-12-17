import axios from 'axios'
// import qs from 'qs'
import store from './store'

const Axios = axios.create({
  baseURL: '/api',
  withCredentials: true
})
Axios.interceptors.request.use(
  config => {
    // this.axios.post(
    // "user/signin",
    // {uname:dingding , upwd:123456}
    // )
    // if (config.method === 'post') {
    //   config.data = qs.stringify(config.data)
    // }
    if (localStorage.getItem('token')) {
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
Axios.interceptors.response.use(
  res => {
    if (res.data.status === 403) {
      localStorage.removeItem('token')
      sessionStorage.removeItem('token')
      store.commit('setUserName', '')
    } else if (res.data.code === -1) {
      store.commit('setUserName', '')
      // alert(res.data.msg+" 请先登录 !");
    } else if (res.data.token) {
      store.commit('setUserName', res.data.uname)
      if (res.remember === 'true') {
        localStorage.setItem('token', res.data.token)
      } else {
        sessionStorage.setItem('token', res.data.token)
      }
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default Axios
