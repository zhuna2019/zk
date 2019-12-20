// 引入axios
import Axios from '@/api/common.js'
// 查询仓房列表分页
export const getStoreHouseList = (pa) => {
    return Axios({
        method: 'get',
        url: `api/Barn/GetBarnPaged`,
        params: pa
    })
}
// post新增仓房信息
export const addPostBarn = (data) => {
    return Axios({
        method: 'post',
        url: '/api/Barn/PostBarn',
        data
    })
}
// post修改仓房信息
// export const updatePostBarn = (data) => {
//     return axios({
//         method: 'post',
//         url: '/api/Barn/PostBarn',
//         data
//     })
// }
// 查询仓房信息
export const getBarnMessage = (id) => {
    return Axios({
        method: 'get',
        url: `/api/Barn/GetBarn/${id}`
    })
}
// 删除仓房
export const DeleteBarn = (id) => {
    return Axios({
        method: 'delete',
        url: `/api/Barn/DeleteBarn/${id}`
    })
}
// 查询菜单列表
export function getAllMenu() {
    return Axios({
        url: '/api/Menu/GetAllTree',
        method: 'get'
    })
}
// 更改菜单可见状态
export function VisibleState(data) {
    return Axios({
        url: '/api/Menu/PostIsVisible',
        method: 'post',
        data
    })
}
// 更改菜单可见状态
export function IsEnableState(data) {
    return Axios({
        url: '/api/Menu/PostIsEnable',
        method: 'post',
        data
    })
}
// 获取按钮列表
export function getButtons() {
    return Axios({
        url: '/api/Menu/GetButton',
        method: 'get'
    })
}
// 根据菜单获取对应按钮
export function getSelectedButton(id) {
    return Axios({
        url: `api/Menu/GetButtonByMenuCode/${id}`,
        method: 'get'
    })
}
// 菜单导航设置按钮后保存
export function setSaveButton(data) {
    return Axios({
        url: '/api/Menu/PostMenuButton',
        method: 'post',
        data
    })
}
// 获取按钮列表
export function getButton() {
    return Axios({
        url: '/api/Menu/GetButton',
        method: 'get'
    })
}
// 新增和修改菜单信息
export function changeMenuData(data) {
    return Axios({
        url: '/api/Menu/Post',
        method: 'post',
        data
    })
}
// 查询组织机构/部门列表
export function GetAllOrganize() {
    return Axios({
        url: '/api/Organize/GetAllTree',
        method: 'get'
    })
}
// 查询组织机构/部门信息
export function GetOrganize(id) {
    return Axios({
        url: `/api/Organize/Get/${id}`,
        method: 'get'
    })
}
// 查询用户列表分页
// export function GetUserListPaged(data) {
//     return Axios({
//         url: '/api/Account/GetPaged',
//         method: 'get',
//         data
//     })
// }
// 查询模块列表分页
export function GetModulePaged(data) {
    return Axios({
        url: '/api/Menu/GetModulePaged',
        method: 'get',
        data
    })
}
