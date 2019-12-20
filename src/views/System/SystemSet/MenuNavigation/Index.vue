<template>
  <div class="menu_navigation">
    <!-- 操作区 -->
    <div class="sort">
      <el-button size="mini" round type="success" class="iconfont icon-xinzeng" @click="add">新增</el-button>
      <el-button
        size="mini"
        round
        type="warning"
        class="iconfont icon-bianji"
        @click="edit(addMenuForm.MenuCode)"
      >编辑</el-button>
      <el-button size="mini" round type="danger" class="iconfont icon-shanchu" @click="Delete">删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin" @click="refresh">刷新</el-button>
    </div>
    <!-- 表格区域 -->
    <div class="table">
      <el-table
        :data="menuList"
        highlight-current-row
        default-expand-all
        border
        stripe
        row-key="MenuCode"
        height="95%"
        @current-change="handleCurrentChange"
        :tree-props="{children: 'Children', hasChildren: 'hasChildren'}"
        @row-click="getMenuID"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="MenuName" label="菜单名称" width="150">
          <template slot-scope="scope">
            <i></i>
            <span>{{scope.row.MenuName}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="MenuCode" label="编码" width="150" sortable></el-table-column>
        <el-table-column prop="ParentCode" label="上级菜单" width="100" sortable></el-table-column>
        <el-table-column prop="IconClass" label="图标" width="180"></el-table-column>
        <el-table-column prop="URL" label="链接地址" width="180"></el-table-column>
        <el-table-column label="是否可见" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.IsVisible"
              @change="StateChanged(scope.row)"
              active-color="#13ce66"
              inactive-color="#aaa"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="是否启用" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.IsEnable"
              @change="StateChanged(scope.row)"
              active-color="#13ce66"
              inactive-color="#aaa"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="MenuSeq" label="排序" width="180"></el-table-column>
        <el-table-column prop="Module" label="模块" width="180"></el-table-column>
        <el-table-column label="页面按钮" width="180">
          <template slot-scope="scope">
            <el-button
              class="el-icon-s-tools"
              size="mini"
              @click="showMenuDialog(scope.row.MenuCode)"
            >设置按钮</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 菜单导航页信息新增编辑模态框 -->
    <el-dialog :title="title" :visible.sync="dialogAddMenuVisible" @close="closeAddMenuVisible">
      <el-form
        :model="addMenuForm"
        style="margin-right: 20px;"
        label-position="right"
        label-width="110px"
      >
        <el-form-item label="菜单名称：" prop="MenuName">
          <el-input v-model="addMenuForm.MenuName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="编码：" prop="MenuCode">
          <el-input v-model="addMenuForm.MenuCode"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单：" prop="ParentCode">
          <el-input v-model="addMenuForm.ParentCode"></el-input>
        </el-form-item>
        <el-form-item label="图标：" prop="IconClass">
          <el-input v-model="addMenuForm.IconClass"></el-input>
        </el-form-item>
        <el-form-item label="链接地址：" prop="URL">
          <el-input v-model="addMenuForm.URL"></el-input>
        </el-form-item>
        <el-form-item label="是否可见：" prop="IsVisible">
          <el-switch v-model="addMenuForm.IsVisible"></el-switch>
        </el-form-item>
        <el-form-item label="是否启用：" prop="IsEnable">
          <el-switch v-model="addMenuForm.IsEnable"></el-switch>
        </el-form-item>
        <el-form-item label="排序：" prop="MenuSeq">
          <el-input v-model="addMenuForm.MenuSeq"></el-input>
        </el-form-item>
        <el-form-item label="模块：" prop="Module">
          <el-input v-model="addMenuForm.Module"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary">保存</el-button>
      </div>
    </el-dialog>
    <!-- 设置按钮模态框区域 -->
    <el-dialog :title="title" :visible.sync="buttonDialogVisible" @close="closeDialogVisible">
      <div class="sub_title">
        <i class="el-icon-s-data"></i>
        <span>请选择页面按钮</span>
      </div>
      <div ref="buttonForm" class="buttonForm" label-width="110px">
        <div class="check">
          <el-checkbox v-model="checked" @change="allChecked">全选</el-checkbox>
          <el-button class="el-icon-menu" @click="manageButtons">管理按钮库</el-button>
        </div>
        <div class="button">
          <el-button
            size="mini"
            v-for="item in buttonList"
            :key="item.ButtonSeq"
            :class="{ selected:item.isActive}"
            class="el-icon-s-tools btn"
            @click="selectedButton(item)"
          >{{item.ButtonName}}</el-button>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveButtonsChanged(currentRow)">保存</el-button>
      </div>
    </el-dialog>
    <!-- 按钮管理库模态框 -->
    <el-dialog
      :title="title"
      :visible.sync="manageButtonDialogVisible"
      @close="closeManageDialogVisible"
    >
      <div class="sub_title">
        <el-button size="mini" type="primary" @click="addButton">新增</el-button>
        <el-button size="mini" type="success" @click="editButton(addButtonForm.ButtonCode)">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </div>
      <!-- 表格区域 -->
      <el-table
        :data="manageButtonList"
        highlight-current-row
        border
        stripe
        height="400px"
        @row-click="getID(addButtonForm.ButtonCode)"
      >
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="ButtonCode" label="编码" width="150" sortable></el-table-column>
        <el-table-column prop="ButtonName" label="名称" width="150"></el-table-column>
        <el-table-column prop="ButtonIcon" label="图标" width="100"></el-table-column>
        <el-table-column prop="ButtonSeq" label="排序" width="100" sortable></el-table-column>
        <el-table-column prop="Description" label="备注说明"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary">保存</el-button>
      </div>
    </el-dialog>
    <!-- 按钮管理库新增编辑模态框 -->
    <el-dialog :title="title" :visible.sync="dialogAddButtonVisible" @close="closeAddButtonVisible">
      <el-form
        :model="addButtonForm"
        ref="addButtonForm"
        style="margin-right: 20px;"
        label-position="right"
        label-width="110px"
      >
        <el-form-item label="编码：" prop="ButtonCode">
          <el-input v-model="addButtonForm.ButtonCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称：" prop="ButtonName">
          <el-input v-model="addButtonForm.ButtonCode"></el-input>
        </el-form-item>
        <el-form-item label="图标：" prop="ButtonIcon">
          <el-input v-model="addButtonForm.ButtonIcon"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="ButtonSeq">
          <el-input v-model="addButtonForm.ButtonSeq"></el-input>
        </el-form-item>
        <el-form-item label="备注说明：" prop="Description">
          <el-input v-model="addButtonForm.Description"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {
  getAllMenu,
  VisibleState,
  IsEnableState,
  getButtons,
  getSelectedButton,
  setSaveButton,
  getButton
} from '@/api/system_api.js'
export default {
  data() {
    return {
      menuList: [],
      buttonList: [],
      selectedButtonList: [],
      manageButtonList: [],
      // 保存修改菜单对应按钮 参数
      saveButtons: {
        MenuCode: '',
        ButtonCodes: ''
      },
      // 菜单可见参数
      queryInfoVisible: {
        MenuCode: '',
        IsVisible: ''
      },
      // 启用状态参数
      queryInfoEnable: {
        MenuCode: '',
        IsEnable: ''
      },
      title: '',
      buttonDialogVisible: false,
      manageButtonDialogVisible: false,
      dialogAddButtonVisible: false,
      dialogAddMenuVisible: false,
      checked: false,
      isActive: -1,
      currentRow: '',
      addButtonForm: {
        ButtonCode: '',
        ButtonName: '',
        ButtonSeq: 0,
        Description: '',
        ButtonIcon: '',
        CreatePerson: null,
        CreateDate: null,
        UpdatePerson: '',
        UpdateDate: ''
      },
      addMenuForm: {
        MenuCode: '',
        ParentCode: '',
        MenuName: '',
        URL: null,
        IconClass: '',
        IconURL: null,
        MenuSeq: '',
        Description: null,
        IsVisible: '',
        IsEnable: '',
        CreatePerson: '',
        CreateDate: '',
        UpdatePerson: '',
        UpdateDate: '',
        Module: ''
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 菜单导航页面
    add() {
      this.title = '新增菜单导航信息'
      this.dialogAddMenuVisible = true
    },
    getMenuID(row) {
      this.addMenuForm.MenuCode = row.MenuCode
    },
    edit(id) {
      if (id) {
        this.dialogAddMenuVisible = true
        this.title = '编辑菜单信息'
      } else {
        this.$message.error('请至少选择一条消息')
      }
    },
    refresh() {},
    Delete() {},
    closeAddMenuVisible() {
      this.dialogAddMenuVisible = false
    },
    // 管理按钮库页面
    // 4保存编辑和新增
    // 3获取某一行被点击时的id
    getID(row) {
      this.addButtonForm.ButtonCode = row
    },
    // 2 编辑按钮库
    editButton(id) {
      if (id) {
      }
    },
    // 1添加按钮库
    addButton() {
      this.dialogAddButtonVisible = true
      this.title = '新增按钮库'
    },
    closeAddButtonVisible() {
      this.dialogAddButtonVisible = false
    },
    // 设置按钮页面
    handleCurrentChange(val) {
      this.currentRow = val.MenuCode
    },
    // 管理按钮库
    async manageButtons() {
      this.manageButtonDialogVisible = true
      this.title = '管理按钮库'
      const { data: res } = await getButton()
      if (res.code === 0) {
        this.manageButtonList = res.data
      }
    },
    // 全选
    allChecked(check) {
      this.buttonList.forEach(item => {
        item.isActive = check
      })
    },
    closeDialogVisible() {
      this.buttonDialogVisible = false
    },
    // 选中button按钮
    selectedButton(item) {
      this.buttonList.forEach(element => {
        if (item === element) {
          element.isActive = !element.isActive
        }
      })
    },
    // 打开模态框
    async showMenuDialog(row) {
      this.title = '设置按钮'
      this.buttonDialogVisible = true
      // 调用方法获取所以按钮列表
      const { data: res } = await getButtons()
      let list = res.data
      list.forEach(item => {
        item.isActive = false
      })
      this.buttonList = list
      const { data: result } = await getSelectedButton(row)
      if (result.code !== 0) {
        this.$message.error('查询按钮失败')
        return
      }
      this.selectedButtonList = result.data
      for (var i = 0; i < this.buttonList.length; i++) {
        for (var j = 0; j < this.selectedButtonList.length; j++) {
          if (
            this.buttonList[i].ButtonCode ===
            this.selectedButtonList[j].ButtonCode
          ) {
            this.buttonList[i].isActive = true
          }
        }
      }
    },
    // 保存信息
    async saveButtonsChanged(MenuCode) {
      let btn = ''
      this.saveButtons.MenuCode = MenuCode
      this.buttonList.forEach(item => {
        if (item.isActive === true) {
          btn += ',' + item.ButtonCode
        }
      })
      this.saveButtons.ButtonCodes = btn.slice(1)
      // 调用编辑菜单对应按钮接口
      const { data: res } = await setSaveButton(this.saveButtons)
      if (res.code !== 0) {
        this.$message('保存失败')
        return
      }
      this.$message.success('保存成功')
      this.buttonDialogVisible = false
    },
    // 关闭模态框
    closeManageDialogVisible() {
      this.manageButtonDialogVisible = false
    },
    // 监听switch状态改变
    StateChanged(visibleinfo) {
      this.queryInfoVisible.MenuCode = visibleinfo.MenuCode
      this.queryInfoEnable.MenuCode = visibleinfo.MenuCode
      if (visibleinfo.IsVisible === false) {
        this.queryInfoVisible.IsVisible = '0'
      } else {
        this.queryInfoVisible.IsVisible = '1'
      }
      if (visibleinfo.IsEnable === false) {
        this.queryInfoEnable.IsEnable = '0'
      } else {
        this.queryInfoEnable.IsEnable = '1'
      }
      VisibleState(this.queryInfoVisible).then(res => {
        if (res.data.code !== 0) {
          this.$message.error('更新状态失败')
          visibleinfo.IsVisible = !visibleinfo.IsVisible
        }
      })
      IsEnableState(this.queryInfoEnable).then(res => {
        if (res.data.code !== 0) {
          this.$message.error('更新状态失败')
          visibleinfo.IsEnable = !visibleinfo.IsEnable
        }
      })
    },
    // 初始化数据
    init() {
      getAllMenu().then(res => {
        let list = res.data.data
        list.forEach(element => {
          if (element.IsVisible === '1') {
            element.IsVisible = true
          } else {
            element.IsVisible = false
          }
          if (element.IsEnable === '1') {
            element.IsEnable = true
          } else {
            element.IsEnable = false
          }
        })
        this.menuList = list
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu_navigation {
  width: 100%;
  height: 93%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
.sub_title {
  width: 100%;
  height: 5%;
  margin-bottom: 5px;
  padding-bottom: 5px;
  color: #eee;
  border-bottom: 1px solid #eee;
}
.buttonForm {
  width: 100%;
  height: 300px;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  background-color: #eee;
  overflow: scroll;
  .check {
    width: 100%;
    height: 15%;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
  }
  .button {
    width: 80%;
    height: 80%;
  }
  .btn {
    width: 100px;
    height: 50px;
    color: #000;
    margin-left: 10px !important;
    margin-bottom: 10px;
    background-color: rgba(31, 154, 211, 0.2);
  }
  .selected {
    border: 3px solid #034b8c;
    background: url(../../../../assets/right.png) no-repeat top right;
  }
  .btn:hover {
    border: 1px solid #000;
  }
}
</style>
