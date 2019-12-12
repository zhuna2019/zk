// 引入axios
import Axios from '@/api/common.js'
// get方式请求列表的数据
export const getNavLeftList = (i) => {
  return Axios({
    url: '/api/Menu/GetAllTree',
    method: 'get'
  })
}

export const getNavTopList = () => {
  return Axios({
    url: '',
    method: 'get'
  })
}
