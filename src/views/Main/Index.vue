<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <div class="header-top">
        <!-- <div class="logo">
          <img src="../../../static/grain2.jpg" alt />
        </div>-->
        <div class="header-title">甘州区鸿谷储备库信息化管理系统</div>
        <div class="header-top-menu">
          <div>
            <el-dropdown>
              <span class="el-dropdown-link el-icon-download">
                插件下载
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-video-play">视频插件</el-dropdown-item>
                <el-dropdown-item icon="el-icon-document">报表插件</el-dropdown-item>
                <el-dropdown-item icon="el-icon-money">三维插件</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            <div class="el-dropdown">
              <span class="el-dropdown-link el-icon-s-flag">当前粮库:甘州区鸿谷粮油储备中心储备库</span>
            </div>
          </div>
          <div>
            <el-dropdown>
              <span class="el-dropdown-link el-icon-user-solid">
                当前用户:超级管理员
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user">个人设置</el-dropdown-item>
                <el-dropdown-item icon="el-icon-edit">修改密码</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button">安全退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div>
            点击换肤
            <theme-picker />
          </div>
        </div>
      </div>
      <div class="header-nav">
        <!-- 顶部导航区 -->
        <el-menu
          :default-active="activeIndex"
          class="demo"
          mode="horizontal"
          text-color="#eee"
          active-text-color="#EABF0D"
        >
          <el-menu-item
            :index="item.id+''"
            v-for="item in topMenuList"
            :key="item.id"
            @click="changeLeftMenu(item.id)"
          >
            <!-- 图标 -->
            <i :class="item.IconClass"></i>
            <!-- 文本 -->
            <span>{{item.authName}}</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-header>
    <el-container class="middle">
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse?'64px':'200px'">
        <div class="toggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区 -->
        <el-menu
          background-color="#012044"
          text-color="#eee"
          active-text-color="#0DC6F5"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          unique-opened
          :default-active="activUrl"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="subItem.MenuCode+''"
            v-for="subItem in leftMenuList"
            :key="subItem.MenuCode"
          >
            <!-- 一级菜单的模板区 -->
            <template class="template" slot="title" fixed>
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>{{subItem.MenuName}}</span>
            </template>
            <div>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="sanItem.URL"
                v-for="sanItem in subItem.Children"
                :key="sanItem.MenuCode"
                @click="saveNavState(sanItem.MenuName,sanItem.URL)"
              >
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{sanItem.MenuName}}</span>
              </el-menu-item>
            </div>
          </el-submenu>
          <!-- 一级菜单 -->
          <el-submenu
            :index="subItem2.MenuCode+''"
            v-for="subItem2 in leftMenuList2"
            :key="subItem2.MenuCode"
          >
            <!-- 一级菜单的模板区 -->
            <template slot="title" fixed>
              <!-- 图标 -->
              <i class="el-icon-location"></i>
              <!-- 文本 -->
              <span>{{subItem2.MenuName}}</span>
            </template>
            <el-scrollbar>
              <!-- 二级菜单 -->
              <el-menu-item
                :index="sanItem2.URL"
                v-for="sanItem2 in subItem2.Children"
                :key="sanItem2.MenuCode"
                @click="saveNavState(sanItem2.MenuName,sanItem2.URL)"
              >
                <!-- 图标 -->
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{sanItem2.MenuName}}</span>
              </el-menu-item>
            </el-scrollbar>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="main">
        <!-- 右侧内容主体 -->
        <el-main>
          <div class="tab">
            <tab />
          </div>
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
    <el-footer class="footer">技术支持单位：浙江浙大中控信息技术有限公司</el-footer>
  </el-container>
</template>
<script>
import { getNavLeftList } from '@/api/admin_nav.js'
import themePicker from '@/components/ThemePicker/Index.vue'
import tab from '@/components/tabs/Index.vue'
export default {
  created() {
    this.init()
    this.activUrl = window.sessionStorage.getItem('activUrl')
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 但是tab标签页因为刷新而被重构了，tab没有了
    // 因此需要将router回到index
  },
  data() {
    return {
      openedTab: [],
      activeIndex: '1',
      isCollapse: false,
      topMenuList: [
        {
          id: 1,
          authName: '经营管理',
          path: null,
          IconClass: 'iconfont icon-jingyingguanli'
        },
        {
          id: 2,
          authName: '出入库管理',
          path: null,
          IconClass: 'iconfont icon-RectangleCopy'
        },
        {
          id: 3,
          authName: '仓储管理',
          path: null,
          IconClass: 'iconfont icon-cangku_cangchuguanli_o'
        },
        {
          id: 4,
          authName: '多功能粮情',
          path: null,
          IconClass: 'iconfont icon-fenxi'
        },
        {
          id: 5,
          authName: '智能通风',
          path: null,
          IconClass: 'iconfont icon-tuibukongjiantongfeng'
        },
        {
          id: 6,
          authName: '智能安防',
          path: null,
          IconClass: 'iconfont icon-anfangguanli'
        },
        {
          id: 7,
          authName: '办公OA',
          path: null,
          IconClass: 'iconfont icon-OA'
        },
        {
          id: 8,
          authName: '报表统计',
          path: null,
          IconClass: 'iconfont icon-baobiao'
        },
        {
          id: 99,
          authName: '系统管理',
          path: null,
          IconClass: 'iconfont icon-huabanfuben'
        }
      ],
      leftMenuList: [],
      leftMenuList2: [],
      // 被激活的url地址
      activUrl: ''
    }
  },
  components: {
    themePicker,
    tab
  },
  methods: {
    // 点击头部导航切换侧边栏导航信息
    changeLeftMenu(Module) {
      this.leftMenuList = []
      this.leftMenuList2 = []
      getNavLeftList(Module)
        .then(res => {
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].Module === Module + '') {
              if (res.data.data[i].Children.length < 10) {
                this.leftMenuList.push(res.data.data[i])
              } else {
                this.leftMenuList2.push(res.data.data[i])
              }
            }
          }
        })
        .catch(err => {
          // console.log(err)
        })
    },
    // 点击按钮切换菜单的折叠与展开
    toggleCollpase() {
      this.isCollapse = !this.isCollapse
    },
    // 保存链接的激活状态
    saveNavState(MenuName, activUrl) {
      window.sessionStorage.setItem('activUrl', activUrl)
      this.activUrl = activUrl
      this.openedTab = this.$store.state.openedTab
      for (var i = 0; i < this.openedTab.length; i++) {
        if (this.openedTab[i].title === MenuName) {
          this.$store.commit('changeTab', activUrl)
          return
        }
      }
      // this.openedTab.forEach((item, index) => {
      //   // 该标签是已经打开过的，需要激活此标签页
      //   if (item.title === MenuName) {
      //     this.$store.commit('changeTab', MenuName)
      //     return
      //   }
      // })
      // 标签未打开的，添加
      let tabnum = { title: '', name: '', content: '', labelContent: '' }
      tabnum.title = MenuName
      tabnum.name = activUrl
      tabnum.content = MenuName
      this.$store.commit('addTab', tabnum)
    },
    // 数据初始
    init() {
      // getNavTopList()
      //   .then(res => {
      //     this.topMenuList = res.data.data
      //   })
      //   .catch(err => {})
      getNavLeftList('1')
        .then(res => {
          for (var i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].Module === '1') {
              this.leftMenuList.push(res.data.data[i])
            }
          }
        })
        .catch(err => {})
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../styles/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home-container {
  height: 100vh;
}
.el-header {
  width: 100%;
  height: 13% !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  .header-top {
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-between;
    background-color: $blue;
    padding: 0 20px;
    color: #fff;
    .header-title {
      width: 60%;
      line-height: 50px;
      font-size: 25px;
    }
    .header-top-menu {
      width: 40%;
      display: flex;
      line-height: 50px;
      justify-content: space-around;
      font-size: 12px;
      overflow: hidden;
      .el-dropdown {
        height: 50px;
        font-size: 12px;
        .el-dropdown-link {
          cursor: pointer;
          color: #fff;
        }
      }
      .el-dropdown span:hover {
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        background-color: #eee;
        color: #000 !important;
        border-radius: 10px;
        font-size: 12px;
      }
      .el-dropdown-item {
        font-size: 10px;
      }
    }
  }
  .header-nav {
    height: 45%;
    overflow: hidden;
    .demo {
      // width: 100%;
      background-color: $light-blue !important;
      .el-menu-item {
        line-height: 40px;
        background-color: $light-blue !important;
      }
      .el-menu-item:hover {
        background-color: rgb(2, 60, 132) !important;
        color: #0dc6f5 !important;
      }
    }
  }
}
.middle {
  height: 84vh;
  .main {
    height: 100%;
    display: flex;
    flex-direction: column;
    .el-main {
      width: 100%;
      height: 100%;
      background-color: #eee;
      padding: 2px;
      .tab {
        width: 100%;
        height: 7%;
      }
    }
  }
}
.el-aside {
  background-color: #012044!important;
  color: #f5f7f9;
  .toggle-button {
    background-color: #b8babd;
    font: 10px '微软雅黑';
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  .el-menu {
    border-right: none;
    background-color: #012044!important;
    .el-submenu>{
      background-color: #012044!important;
      .el-menu-item {
        background-color: #012044!important;
      }
    }
  }
}

.footer {
  width: 100%;
  height: 3% !important;
  line-height: 20px;
  background-color: #012044;
  text-align: center;
  font: 12px '微软雅黑';
  color: #eee;
}
.iconfont {
  margin-right: 5px;
  color: #eee;
}
.iconfont:hover {
  color: #0dc6f5;
}
.el-scrollbar {
  height: 50vh;
}
</style>
