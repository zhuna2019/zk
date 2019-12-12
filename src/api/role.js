// 引入axios
import Axios from '@/api/common.js'
// 查询所有查询角色信息
export function getRoles() {
  return Axios({
    url: '/api/Role/GetAll',
    method: 'get'
  })
}
// 根据用户编码查询查询角色信息
export function getRole(id) {
  return Axios({
    url: `/api/Role/Get/${id}`,
    method: 'get'
  })
}
// 查询菜单列表
export function getAllMenu() {
  return Axios({
    url: '/api/Menu/GetAllTree',
    method: 'get'
  })
}
