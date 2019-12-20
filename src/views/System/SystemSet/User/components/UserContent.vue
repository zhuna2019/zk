<template>
  <div class="dictionary_content">
    <!-- 操作区 -->
    <div class="sort">
      <el-button size="mini" round type="success" class="iconfont icon-xinzeng">新增</el-button>
      <el-button size="mini" round type="warning" class="iconfont icon-bianji">编辑</el-button>
      <el-button size="mini" round type="danger" class="iconfont icon-shanchu">删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin">刷新</el-button>
    </div>
    <!-- 表格区域 -->
    <el-table :data="data" highlight-current-row border stripe height="90%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="OrganizeCode" label="用户编码" width="150" sortable></el-table-column>
      <el-table-column prop="StringValue" label="员工" width="150"></el-table-column>
      <el-table-column prop="Description" label="描述说明" width="100" sortable></el-table-column>
      <el-table-column prop="ParentID" label="排序码" width="180"></el-table-column>
      <el-table-column prop="Type" label="是否启用" width="180"></el-table-column>
      <el-table-column prop="Type" label="登陆次数" width="180"></el-table-column>
      <el-table-column prop="Type" label="最后登陆时间" width="280"></el-table-column>
      <el-table-column label="操作" width="280"></el-table-column>
    </el-table>
  </div>
</template>
<script>
// import { GetOrganize } from '@/api/system_basic.js'
export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.bus.$on('getID', row => {
        if (row.OrganizeCode) {
          console.log(row.OrganizeCode)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dictionary_content {
  width: 99%;
  height: 98%;
}
</style>
