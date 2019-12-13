<template>
  <div class="role">
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
    <el-table :data="roleList" border stripe height="90%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="RoleName" label="角色名称" width="150"></el-table-column>
      <el-table-column prop="RoleCode" label="角色编码" width="150" sortable></el-table-column>
      <el-table-column prop="RoleSeq" label="排序" width="100" sortable></el-table-column>
      <el-table-column prop="Description" label="描述" width="180"></el-table-column>
      <el-table-column label="操作" width="280">
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="编辑权限" placement="top" :enterable="false">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditRoleDialog(scope.row.RoleCode)"
            ></el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="管理成员" placement="top" :enterable="false">
            <el-button type="warning" icon="el-icon-setting" size="mini"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
    <!-- 编辑权限对话框 -->
    <el-dialog title="角色授限" :visible.sync="editRoleDialogVisible" width="50%">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">菜单权限</span>
          <div class="role_content">
            <div class="top" :model="editRoleForm">
              <div class="avatar">
                <img src="../../../../assets/avatar.png" alt />
              </div>
              <div class="RoleName">{{editRoleForm.RoleName}}</div>
              <div class="Description">{{editRoleForm.Description}}</div>
            </div>
            <div class="middle">
              <el-table
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
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">按钮权限</span>
          我的行程
        </el-tab-pane>
      </el-tabs>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoleDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRoleDialogVisible  = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getRoles, getRole, getAllMenu } from '@/api/role.js'
export default {
  data() {
    return {
      roleList: [],
      editRoleDialogVisible: false,
      editRoleForm: [],
      menuRoleData: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    async showEditRoleDialog(id) {
      this.editRoleDialogVisible = true
      const { data: res } = await getRole(id)
      if (res.code !== 0) {
        return this.$message.error('角色信息查询失败')
      }
      this.editRoleForm = res.data
      const { data: result } = await getAllMenu()
      if (result.code !== 0) {
        return this.$message.error('角色信息查询失败')
      }
      this.menuRoleData = result.data
      console.log(result)
    },
    init() {
      getRoles().then(res => {
        this.roleList = res.data.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.role {
  width: 100%;
  height: 93%;
  padding: 5px;
  .sort {
    width: 100%;
    height: 5%;
  }
}
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
.el-tabs{
  padding:5px;
}
</style>
