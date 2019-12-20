// 引入axios
import Axios from './common'
export const GetAllTree = () => {
  return Axios({
    methods: 'get',
    url: '/api/Dictionary/GetAllTree'
  })
}
export const GetByParentID = (id) => {
  return Axios({
    methods: 'get',
    url: `/api/Dictionary/GetByParentID/${id}`
  })
}
