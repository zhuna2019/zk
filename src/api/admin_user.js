// 引入axios
import axios from '@/api/common.js'
// 处理post请求发送,实现用户登录验证
export const login = (data) => {
  return axios({
    method: 'post',
    url: 'api/Account/Login',
    data
  })
}
// get方式请求用户列表的数据
export const getUserList = (pa) => {
  return axios({
    url: 'users',
    params: pa
  })
}
// 删除表格单个用户--
export const delUser = (id) => {
  return axios({
    url: `users/${id}`,
    method: 'delete'
  })
}
// 分配角色--put请求
export const grantUserRole = (id, rid) => {
  return axios({
    url: `users/${id}/role`,
    method: 'put',
    data: {
      rid
    }
  })
}
