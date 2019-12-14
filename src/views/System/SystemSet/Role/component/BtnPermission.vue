<template>
  <div>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 100%"
      height="500px"
      default-expand-all
      border
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column fixed prop="MenuName" label="菜单" width="150">
        <template slot-scope="scope">
          <i :class="scope.row.IconClass"></i>
          <span style="margin-left: 10px">{{ scope.row.MenuName }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed prop="name" label="全选" width="70">
        <template slot="header">
          <el-checkbox>全选</el-checkbox>
        </template>
        <template slot-scope="scope">
          <el-checkbox :checked="scope.row.IsVisible==='1'?true:false"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column width="55" v-for="(item,i) in headData" :key="i">
        <template slot="header">
          <i class></i>
          <span>{{item}}</span>
        </template>
        <template slot-scope="scope">
          <el-checkbox :checked="scope.row.IsVisible==='1'?true:false"></el-checkbox>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      headData: [
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增',
        '新增'
      ]
    }
  }
}
</script>
