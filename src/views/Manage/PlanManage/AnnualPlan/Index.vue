<template>
  <div>
    <!-- 面包屑导航 -->
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/main'}">综合看板</el-breadcrumb-item>
        <el-breadcrumb-item>经营管理</el-breadcrumb-item>
        <el-breadcrumb-item>计划管理</el-breadcrumb-item>
        <el-breadcrumb-item>轮换计划</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 标签区域 -->
    <div class="tag">
      <el-tag
        size="medium"
        v-for="tag in tags"
        :color="color"
        :key="tag.name"
        :type="tag.type"
      >
        <i :class="tag.iconClass"></i>
        {{tag.name}}
      </el-tag>
    </div>
    <!-- 查询区域 -->
    <div class="planInput">
      <div class="plan">
        <div>计划编号</div>
        <div>
          <el-input v-model="input" clearable></el-input>
        </div>
        <div>轮换年度</div>
        <div>
          <el-date-picker v-model="value" type="year" placeholder="选择年"></el-date-picker>
        </div>
      </div>
      <div class="planBtn">
        <el-button type="primary" plain>查询</el-button>
        <el-button type="primary" plain>清空</el-button>
      </div>
    </div>
    <!-- 表格区域 -->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      border
      :default-sort="{prop: 'yearChange', order: 'descending'}"
    >
      <el-table-column prop="planId" label="计划编号" width="180" sortable></el-table-column>
      <el-table-column prop="planName" label="计划名称" width="180"></el-table-column>
      <el-table-column prop="yearChange" label="轮换年度" width="180" sortable></el-table-column>
      <el-table-column prop="statusCheck" label="审核状态" width="180"></el-table-column>
      <el-table-column prop="pepleCheck" label="审核人" width="180"></el-table-column>
      <el-table-column prop="timeCheck" label="审核时间" width="180" sortable></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      value: '',
      color: '',
      tableData: [
        {
          planId: 'LH201505120001',
          planName: '5月入库计划',
          yearChange: '2015',
          statusCheck: '审核通过',
          pepleCheck: '管理员',
          timeCheck: '2012-05-12 08:43:43',
          remark: ''
        },
        {
          planId: 'LH201905120001',
          planName: '5月入库计划',
          yearChange: '2016',
          statusCheck: '审核通过',
          pepleCheck: '管理员',
          timeCheck: '2014-05-12 08:43:43',
          remark: ''
        },
        {
          planId: 'LH201605120001',
          planName: '5月入库计划',
          yearChange: '2012',
          statusCheck: '审核通过',
          pepleCheck: '管理员',
          timeCheck: '2019-05-12 08:43:43',
          remark: ''
        },
        {
          planId: 'LH201705120001',
          planName: '5月入库计划',
          yearChange: '2019',
          statusCheck: '审核通过',
          pepleCheck: '管理员',
          timeCheck: '2015-05-12 08:43:43',
          remark: ''
        }
      ],
      tags: [
        { name: '新增', type: '', iconClass: 'el-icon-plus' },
        { name: '编辑', type: 'success', iconClass: 'el-icon-edit-outline' },
        { name: '删除', type: 'info', iconClass: 'el-icon-delete' },
        { name: '刷新', type: 'warning', iconClass: 'el-icon-refresh' },
        { name: '审核', type: 'danger', iconClass: 'el-icon-place' }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '../css/planManage.scss'
</style>
