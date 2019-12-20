import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login.vue'
import Main from '../views/Main/Index.vue'
import Home from '../views/home/Index.vue'
import AnnualPlan from '../views/Manage/PlanManage/AnnualPlan/Index.vue'
import PurchasePlan from '../views/Manage/PlanManage/PurchasePlan/Index.vue'
import SalesPlan from '../views/Manage/PlanManage/SalesPlan/Index.vue'
import WeightDeduction from '../views/System/BasicSet/WeightDeduction/Index.vue'
import sysBarnInfo from '../views/System/BasicSet/sysBarnInfo/Index.vue'
import sysUser from '../views/System/SystemSet/User/Index.vue'
import sysRole from '../views/System/SystemSet/Role/Index.vue'
import menuNavigation from '../views/System/SystemSet/MenuNavigation/Index.vue'
import Dictionary from '../views/System/BasicSet/Dictionary/Index.vue'
import ModulePage from '../views/System/SystemSet/ModulePaged/Index.vue'
import BarnGrain from '../views/ReportForm/BarnGrain/Index.vue'
Vue.use(VueRouter)
const routes = [
  { path: '/' },
  { path: '/login', component: Login },
  {
    path: '/main',
    component: Main,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/Grain/grain_AnnualPlan/index', component: AnnualPlan, name: 'AnnualPlan' },
      { path: '/Grain/grain_PurchasePlan/index', component: PurchasePlan, name: 'PurchasePlan' },
      { path: '/Grain/grain_SalesPlan/index', component: SalesPlan, name: 'SalesPlan' },
      { path: '/grain/grain_DeductStandard/Index', component: WeightDeduction, name: 'WeightDeduction' },
      { path: '/sys/sys_BarnInfo/Index', component: sysBarnInfo, name: 'sysBarnInfo' },
      { path: '/sys/user', component: sysUser, name: 'sysUser' },
      { path: '/sys/role', component: sysRole, name: 'sysRole' },
      { path: '/sys/menu', component: menuNavigation, name: 'menuNavigation' },
      { path: '/sys/sys_Dictionary/Index', component: Dictionary, name: 'Dictionary' },
      { path: '/sys/module/index', component: ModulePage, name: 'ModulePage' },
      { path: '/Grain/ReportNew/BarnGrain', component: BarnGrain, name: 'BarnGrain' }
    ]
  }
]
const router = new VueRouter({
  routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数，表示放行
  // next放行 next('/login') 强制跳转
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token') || window.localStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
