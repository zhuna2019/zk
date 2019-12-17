<template>
  <div class="role">
    <!-- 操作区 -->
    <div class="sort">
      <el-button
        size="mini"
        round
        type="success"
        class="iconfont icon-xinzeng"
        @click="addRoleForm"
      >新增</el-button>
      <el-button
        size="mini"
        round
        type="warning"
        class="iconfont icon-bianji"
        @click="edit(currentRow)"
      >编辑</el-button>
      <el-button
        size="mini"
        round
        type="danger"
        class="iconfont icon-shanchu"
        @click="DeleteRole(currentRow)"
      >删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin" @click="freshForm">刷新</el-button>
    </div>
    <!-- 模态框区域 -->
    <el-dialog
      :title="title"
      width="800px"
      :visible.sync="dialogAddgsVisible"
      @close="closeDialogAddgsVisible"
    >
      <el-form
        :model="RoleForm"
        ref="RoleForm"
        class="dialogAdd"
        style="margin-right: 20px;"
        label-position="right"
        label-width="110px"
      >
        <el-form-item label="角色名称：" prop="RoleName">
          <el-input v-model="RoleForm.RoleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色编码：" prop="RoleCode">
          <el-input v-model="RoleForm.RoleCode"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="RoleSeq">
          <el-input v-model="RoleForm.RoleSeq"></el-input>
        </el-form-item>
        <el-form-item label="描述：" prop="Description">
          <el-input v-model="RoleForm.Description"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveAddForm">保存</el-button>
      </div>
    </el-dialog>
    <!-- 表格区域 -->
    <el-table
      :data="roleList"
      highlight-current-row
      border
      stripe
      height="90%"
      @current-change="handleCurrentChange"
      ref="demoTable"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="RoleName" label="角色名称" width="150">
        <template slot-scope="scope">
          <span>{{scope.row.RoleName}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="RoleCode" label="角色编码" width="150" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.RoleCode}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="RoleSeq" label="排序" width="100" sortable>
        <template slot-scope="scope">
          <span>{{scope.row.RoleSeq}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Description" label="描述" width="180">
        <template slot-scope="scope">
          <span>{{scope.row.Description}}</span>
        </template>
      </el-table-column>
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
          <menu-limit ref="getCardId" />
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
import { getRoles, getRole, deleteRole } from '@/api/role.js'
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
      editRoleForm: [],
      dialogAddgsVisible: false,
      title: '',
      RoleForm: {
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        RoleCode: '',
        RoleName: '',
        RoleSeq: '',
        UpdateDate: '',
        UpdatePerson: '',
        show: false
      },
      currentRow: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 删除角色信息
    DeleteRole(row) {
      if (row) {
        this.$confirm(`确定删除选择角色？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            deleteRole(row).then(res => {
              if (res.data.code !== 0) {
                this.$message({
                  type: 'info',
                  message: '删除失败！'
                })
              }
              this.$message({
                type: 'success',
                message: '删除成功！'
              })
              this.init()
            })
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
      } else {
        this.$message('请选择一条角色信息')
      }
    },
    // 点击编辑按钮
    edit(row) {
      if (row) {
        getRole(row).then(res => {
          if (res.data.code === 0) {
            let value = res.data.data
            this.dialogAddgsVisible = true
            this.title = '编辑角色信息'
            this.RoleForm.RoleName = value.RoleName
            this.RoleForm.RoleCode = value.RoleCode
            this.RoleForm.RoleSeq = value.RoleSeq
            this.RoleForm.Description = value.Description
          }
        })
      } else {
        this.$message('请选择一条信息')
      }
    },
    handleCurrentChange(val) {
      if (val) {
        this.currentRow = val.RoleCode
      }
    },
    addRoleForm() {
      this.dialogAddgsVisible = true
      this.title = '新增角色信息'
    },
    // 点击刷新按钮
    freshForm() {
      self.location.reload()
    },
    /**
     *关闭或取消模态框，清空值
     * @param
     */
    closeDialogAddgsVisible() {
      this.$refs.RoleForm.resetFields() // element封装的方法,清空模态框的值
      this.title = '' // 初始化title的值
      this.RoleForm = {
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        RoleCode: '',
        RoleName: '',
        RoleSeq: '',
        UpdateDate: '',
        UpdatePerson: '',
        show: false
      }
    },
    /**
     *确定新增数据
     * @param
     */
    saveAddForm() {
      let data = this.RoleForm
      console.log(data)
      // 当没有传过来id的时候,说明是添加,所以发送添加请求
    },
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
.dialogAdd {
  display: flex;
  flex-wrap: wrap;
}
</style>
