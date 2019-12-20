<template>
  <div class="model">
    <!-- 操作区 -->
    <div class="sort">
      <el-button size="mini" round type="success" class="iconfont icon-xinzeng">新增</el-button>
      <el-button size="mini" round type="warning" class="iconfont icon-bianji">编辑</el-button>
      <el-button size="mini" round type="danger" class="iconfont icon-shanchu">删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin">刷新</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table :data="data" highlight-current-row border stripe height="90%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="ModuleCode" label="模块编码" width="150" sortable></el-table-column>
        <el-table-column prop="ModuleName" label="模块名称" width="150"></el-table-column>
        <el-table-column label="是否启用" width="100" sortable>
          <template slot-scope="scope">
            <el-switch v-model="scope.row.IsEnable" active-color="#13ce66" inactive-color="#aaa"></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="Seq" label="排序码" width="180"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { GetModulePaged } from '@/api/system_api.js'
export default {
  data() {
    return {
      data: [],
      queryModule: {
        pageIndex: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 初始化页面数据
    async init() {
      const { data: res } = await GetModulePaged(this.queryModule)
      console.log(res)
      if (res.code === 0) {
        let list = res.data
        list.forEach(element => {
          if (element.IsVisible === '1') {
            element.IsVisible = true
          } else {
            element.IsVisible = false
          }
          if (element.IsEnable === '1') {
            element.IsEnable = true
          } else {
            element.IsEnable = false
          }
        })
        this.data = list
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.model {
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
