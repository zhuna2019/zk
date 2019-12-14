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
      <div class="top" :model="editRoleForm">
        <div class="avatar">
          <img src="../../../../assets/avatar.png" alt />
        </div>
        <div class="RoleName">{{editRoleForm.RoleName}}</div>
        <div class="Description">{{editRoleForm.Description}}</div>
      </div>
      <el-tabs type="border-card">
        <!-- 菜单权限 -->
        <el-tab-pane>
          <span slot="label">菜单权限</span>
          <!-- 菜单权限的子组件 -->
          <menu-limit ref="getCardId"/>
        </el-tab-pane>
        <!-- 按钮权限 -->
        <el-tab-pane>
          <span slot="label">按钮权限</span>
          <!-- 按钮权限的子组件 -->
          <btn-permission />
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
import { getRoles, getRole } from '@/api/role.js'
import MenuLimit from './component/MenuLimit'
import BtnPermission from './component/BtnPermission'
export default {
  components: {
    MenuLimit,
    BtnPermission
  },
  data() {
    return {
      roleList: [],
      editRoleDialogVisible: false,
      editRoleForm: []
    }
  },
  created() {
    this.init()
  },
  methods: {
    showEditRoleDialog(id) {
      this.editRoleDialogVisible = true
      getRole(id).then(res => {
        if (res.data.code !== 0) {
          return this.$message.error('角色信息查询失败')
        }
        this.editRoleForm = res.data.data
      })
      // 在这里做初始化后就立马执行了下一句调用子组件的方法,可能他还没有初始化完成,所以出现了undefined的异常,稍作了一下延时处理
      setTimeout(() => {
        this.$refs.getCardId.accept(id)
      }, 0)
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
.el-tabs {
  padding: 5px;
}
</style>
