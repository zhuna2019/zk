<template>
  <div>
    <!-- 标签区域 -->
    <div class="tag">
      <el-tag size="medium" v-for="tag in tags" :color="color" :key="tag.name" :type="tag.type">
        <i :class="tag.iconClass"></i>
        {{tag.name}}
      </el-tag>
    </div>
    <!-- 查询区域 -->
    <div class="planInput">
      <div class="plan">
        <div class="span">计划编号</div>
        <div class="input">
          <el-input v-model="input" clearable></el-input>
        </div>
        <div class="span">轮换年度</div>
        <div class="input">
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
import { getAnnualplanList } from '@/api/manage.js'
export default {
  data() {
    return {
      // 获取参数对象
      queryInfo: {
        pageIndex: 1,
        pageSize: 10
      },
      input: '',
      value: '',
      color: '',
      tableData: [],
      tags: [
        { name: '新增', type: '', iconClass: 'el-icon-plus' },
        { name: '编辑', type: 'success', iconClass: 'el-icon-edit-outline' },
        { name: '删除', type: 'info', iconClass: 'el-icon-delete' },
        { name: '刷新', type: 'warning', iconClass: 'el-icon-refresh' },
        { name: '审核', type: 'danger', iconClass: 'el-icon-place' }
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      const { data: res } = await getAnnualplanList(this.queryInfo)
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../css/planManage.scss';
</style>
