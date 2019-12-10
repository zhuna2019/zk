<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    @tab-remove="removeTab"
    @tab-click="handleClickTab($event)"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    ></el-tab-pane>
  </el-tabs>
</template>
<script>
import variables from '@/styles/variables.scss'
export default {
  data() {
    return {
      editableTabsValue: '/home',
      editableTabs: [
        {
          title: '粮情综合看版',
          name: '/home',
          content: '粮情综合看版'
        }
      ],
      tabIndex: 1,
      openedTab: [
        {
          title: '粮情综合看版',
          name: '/home',
          content: '粮情综合看版'
        }
      ]
    }
  },
  methods: {
    handleClickTab(route) {
      this.$store.commit('changeTab', route.label)
      this.$router.push(route.name)
    },
    removeTab(targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      this.$store.commit('deductTab', targetName)
      let deductIndex = this.openedTab.indexOf(targetName)
      this.openedTab.splice(deductIndex, 1)
      // this.$router.push(activeName)
      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
      if (this.openedTab.length === 0) {
        this.$store.commit('addTab', {
          title: '粮情综合看版',
          name: '/home',
          content: '粮情综合看版'
        })
        this.$router.push('/home')
      }
    }
  },
  computed: {
    variables() {
      return variables
    },
    getOpenedTab() {
      return this.$store.state.openedTab
    },
    changeTab() {
      return this.$store.state.activeTab
    }
  },
  watch: {
    getOpenedTab(val) {
      if (val.length > this.openedTab.length) {
        // 添加了新的tab页
        // 导致$store.state中的openedTab长度
        // 大于
        // 标签页中的openedTab长度
        // 因此需要新增标签页
        let newTab = val[val.length - 1] // 新增的肯定在数组最后一个
        ++this.tabIndex
        this.editableTabs.push({
          title: newTab.title,
          name: newTab.name,
          content: newTab.content
        })
        this.editableTabsValue = newTab.name
        this.openedTab.push(newTab)
      }
    },
    changeTab(val) {
      // 监听activetab以实现点击左侧栏时激活已存在的标签
      if (val !== this.editableTabsValue) {
        this.editableTabsValue = val
      }
    }
  },
  created() {
    // 刷新页面时（F11)
    // 因为<router-view>的<keep-alive>，会保留刷新时所在的router
    // 但是tab标签页因为刷新而被重构了，tab没有了
    // 因此需要将router回到index
    this.$router.push('/home')
    this.activUrl = window.sessionStorage.getItem('activUrl')
  }
}
</script>
<style lang="scss" scoped>
</style>
