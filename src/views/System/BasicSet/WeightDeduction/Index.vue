<template>
  <div class="weight_deduction">
    <!-- 操作区 -->
    <div class="sort">
      <el-button size="mini" round type="success" class="iconfont icon-xinzeng">新增</el-button>
      <el-button size="mini" round type="warning" class="iconfont icon-bianji">编辑</el-button>
      <el-button size="mini" round type="danger" class="iconfont icon-shanchu">删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin">刷新</el-button>
      <el-button size="mini" round type="primary" plain class="iconfont icon-daochu">保存</el-button>
      <el-button size="mini" round type="primary" plain class="iconfont icon-daoru">重置密码</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table stripe border highlight-current-row height="90%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="planId" label="用户编码" sortable></el-table-column>
        <el-table-column prop="ProjectCode" label="员工"></el-table-column>
        <el-table-column prop="Cfmc" label="描述说明"></el-table-column>
        <el-table-column prop="Cflx" label="排序码" sortable></el-table-column>
        <el-table-column prop="Cfjg" label="是否启用"></el-table-column>
        <el-table-column prop="Jzlx" label="登陆次数"></el-table-column>
        <el-table-column prop="Cfcd" label="最后登陆时间"></el-table-column>
        <el-table-column prop="Cfkd" label="操作"></el-table-column>
        <!-- 分页区域 -->
      </el-table>
      <el-pagination
        height="5%"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageIndex"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next"
        :total="total"
        class="pagination"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 获取参数对象
      queryInfo: {
        pageIndex: 1,
        pageSize: 3
      },
      total: 0
    }
  },
  methods: {
    // 监听pagesize 改变事件
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize
      this.init()
    },
    // 监听页码值，改变时间
    handleCurrentChange(newPage) {
      this.queryInfo.pageIndex = newPage
      this.init()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/variables.scss';
.weight_deduction {
  width: 100%;
  height: 93%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
