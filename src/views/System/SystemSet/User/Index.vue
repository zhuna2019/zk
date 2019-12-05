<template>
  <div class="sysUser">
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/main'}">综合看板</el-breadcrumb-item>
        <el-breadcrumb-item>系统管理</el-breadcrumb-item>
        <el-breadcrumb-item>基础系统设置</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="organization">
        <div class="dropdown-menu">
          <el-dropdown split-button trigger="click" :hide-on-click="false">
            <i></i>
            <span>组织架构</span>
            <el-dropdown-menu slot="dropdown" style="background-color:#034b8c">
              <el-dropdown-item>副主任</el-dropdown-item>
              <el-dropdown-item>综合组长</el-dropdown-item>
              <el-dropdown-item>保管组长</el-dropdown-item>
              <el-dropdown-item>保管员</el-dropdown-item>
              <el-dropdown-item>主任</el-dropdown-item>
              <el-dropdown-item>司磅员</el-dropdown-item>
              <el-dropdown-item>机电员</el-dropdown-item>
              <el-dropdown-item>后勤</el-dropdown-item>
              <el-dropdown-item>信息管理员</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="content">
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
        <el-table  stripe border highlight-current-row >
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="planId" label="用户编码" sortable></el-table-column>
          <el-table-column prop="ProjectCode" label="员工"></el-table-column>
          <el-table-column prop="Cfmc" label="描述说明"></el-table-column>
          <el-table-column prop="Cflx" label="排序码" sortable></el-table-column>
          <el-table-column prop="Cfjg" label="是否启用"></el-table-column>
          <el-table-column prop="Jzlx" label="登陆次数"></el-table-column>
          <el-table-column prop="Cfcd" label="最后登陆时间"></el-table-column>
          <el-table-column prop="Cfkd" label="操作"></el-table-column>
        </el-table>
        <!-- 分页区域 -->
        <el-pagination
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.sysUser {
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.breadcrumb > .el-breadcrumb {
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.container {
  width: 100%;
  height: 75vh;
  display: flex;
  padding: 2px;
}
.organization {
  width: 170px;
  height: 95%;
  border: 1px solid #034b8c;
}
.content {
  flex: 1;
  height: 100%;
  padding: 3px;
  border: 1px solid #034b8c;
  margin-left: 5px;
  .sort {
    margin: 5px 0 0 5px;
  }
}
.el-table {
  width: 100%;
  height: 85%;
}
.pagination {
  width: 100%;
  height: 5%;
}
.el-dropdown-menu {
  width: 150px;
  background-color: #eee;
}
</style>
