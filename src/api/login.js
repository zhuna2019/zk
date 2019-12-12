// 引入axios
import Axios from '@/api/common2.js'
// 处理post请求发送，实现用户登录验证
export const login = (data) => {
  return Axios({
    method: 'get',
    url: 'login.json',
    data
  })
}
