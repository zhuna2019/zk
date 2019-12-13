<template>
  <div class="role_content">
    <div class="top" :model="editRoleForm">
      <!-- <div class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      </div> -->
      <div class="RoleName">{{editRoleForm.RoleName}}</div>
      <div class="Description">{{editRoleForm.Description}}</div>
    </div>
    <div class="middle">
      <el-table
        :data="menuRoleData"
        row-key="MenuCode"
        default-expand-all
        height="350"
        border
        style="width: 100%"
        :tree-props="{children: 'Children', hasChildren: 'hasChildren'}"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column width="80">
          <template slot-scope="scope">
            <el-checkbox :checked="scope.row.IsVisible==='1'?true:false"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="MenuName" label="菜单" width="150">
          <template slot-scope="scope">
            <i :class="scope.row.IconClass"></i>
            <span style="margin-left: 10px">{{ scope.row.MenuName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="MenuCode" label="编码" width="100"></el-table-column>
        <el-table-column label="备注说明" width="200"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { getRole, getAllMenu } from '@/api/role.js'
export default {
  data() {
    return {
      editRoleForm: [],
      menuRoleData: []
    }
  },
  props: ['id'],
  created() {
    this.init()
  },
  methods: {
    init() {
      getRole(this.id).then(res => {
        console.log(res)
        if (res.data.code !== 0) {
          return this.$message.error('角色信息查询失败')
        }
        this.editRoleForm = res.data.data
      })
      getAllMenu(this.id).then(result => {
        if (result.data.code !== 0) {
          return this.$message.error('菜单列表查询失败')
        }
        this.menuRoleData = result.data.data
        console.log(result)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.role_content {
  height: 100%;
  border: 1px solid #eee;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .top {
    height: 5%;
    display: flex;
    line-height: 44px;
    .RoleName {
      margin: 0 20px;
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .middle {
    height: 80%;
  }
}
</style>
