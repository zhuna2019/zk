// 引入axios
import Axios from '@/api/common.js'

// 获取轮换计划列表分页
export const getAnnualplanList = (params) => {
  return Axios({
      method: 'get',
      url: '/api/Management/GetAnnualplan',
      params
  })
}
