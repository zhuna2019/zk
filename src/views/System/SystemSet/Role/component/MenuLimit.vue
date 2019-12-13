<template>
  <div class="role_content">
    <div class="top" :model="editRoleForm">
      <div class="avatar">
        <img src="../../../../../assets/avatar.png" alt />
      </div>
      <div class="RoleName">{{editRoleForm.RoleName}}</div>
      <div class="Description">{{editRoleForm.Description}}</div>
    </div>
    <div class="middle">
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="menuRoleData"
        row-key="MenuCode"
        default-expand-all
        height="500px"
        border
        style="width: 100%"
        :tree-props="{children: 'Children', hasChildren: 'hasChildren'}"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column width="80">
          <template slot="header">
            <el-checkbox></el-checkbox>
          </template>
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
      menuRoleData: [],
      loading: true
    }
  },
  methods: {
    accept(id) {
      getRole(id).then(res => {
        if (res.data.code !== 0) {
          return this.$message.error('角色信息查询失败')
        }
        this.editRoleForm = res.data.data
        this.loading = false
      })
      getAllMenu(id).then(result => {
        if (result.data.code !== 0) {
          return this.$message.error('菜单列表查询失败')
        }
        this.menuRoleData = result.data.data
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.role_content {
  height: 460px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top {
  height: 50px;
  display: flex;
  line-height: 50px;
  .avatar {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .RoleName {
    margin: 0 20px;
    font-size: 20px;
    font-weight: bolder;
  }
}
.middle {
  height: 410px;
}
.el-tabs {
  padding: 5px;
}
</style>
