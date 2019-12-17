<template>
  <div class="menu_navigation">
    <!-- 操作区 -->
    <div class="sort">
      <el-button size="mini" round type="success" class="iconfont icon-xinzeng">新增</el-button>
      <el-button size="mini" round type="warning" class="iconfont icon-bianji">编辑</el-button>
      <el-button size="mini" round type="danger" class="iconfont icon-shanchu">删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin">刷新</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin">折叠全部</el-button>
    </div>
    <!-- 表格区域 -->
    <el-table
      :data="menuList"
      highlight-current-row
      border
      stripe
      height="90%"
      row-key="MenuCode"
      :tree-props="{children: 'Children', hasChildren: 'hasChildren'}"
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
            v-for="(item,i) in buttonList"
            :key="item.ButtonSeq"
            :class="{selected:i==isActive,selecte:allActive}"
            class="el-icon-s-tools btn"
            @click="selectedButton(i)"
          >{{item.ButtonName}}</el-button>
        </div>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveAddForm">保存</el-button>
      </div>
    </el-dialog>
    <!-- 按钮管理库模态框 -->
    <el-dialog :title="title" :visible.sync="manageButtonDialogVisible" @close="closeDialogVisible">
      <div class="sub_title">
        <el-button size="mini" type="primary">新增</el-button>
        <el-button size="mini" type="success">编辑</el-button>
        <el-button size="mini" type="danger">删除</el-button>
      </div>
      <!-- 表格区域 -->
      <el-table :data="manageButtonList" highlight-current-row border stripe height="90%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop label="编码" width="150"></el-table-column>
        <el-table-column prop label="名称" width="150" sortable></el-table-column>
        <el-table-column prop label="图标" width="100" sortable></el-table-column>
        <el-table-column prop label="排序" width="100" sortable></el-table-column>
        <el-table-column prop label="备注说明"></el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveAddForm">保存</el-button>
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
  getSelectedButton
} from '@/api/system_api.js'
export default {
  data() {
    return {
      menuList: [],
      selectedButtonList: [],
      manageButtonList: [],
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
      buttonList: [],
      checked: false,
      isActive: -1,
      allActive: false
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 管理按钮库
    manageButtons(row) {
      this.manageButtonDialogVisible = true
    },
    // 全选
    allChecked() {
      this.checked = !this.checked
      if (this.checked) {
        this.allActive = true
      } else {
        this.allActive = false
      }
    },
    // 选中button按钮
    selectedButton(i) {
      console.log(i)
      this.isActive = i
    },
    // 打开模态框
    async showMenuDialog(row) {
      console.log(row)
      this.title = '设置按钮'
      this.buttonDialogVisible = true
      // 调用方法获取所以按钮列表
      const { data: res } = await getButtons()
      this.buttonList = res.data
      const { data: result } = await getSelectedButton(row)
      console.log(result.data)
      if (result.code !== 0) {
        this.$message.error('查询按钮失败')
      }
      this.selectedButtonList = result.data
    },
    // 保存信息
    saveAddForm() {},
    // 关闭模态框
    closeDialogVisible() {
      this.buttonDialogVisible = false
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
  padding: 5px;
  .sort {
    width: 100%;
    height: 5%;
  }
  .el-table {
    width: 100%;
    height: 90%;
  }
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
  .selecte {
    border: 3px solid #034b8c;
    background: url(../../../../assets/right.png) no-repeat top right;
  }
  .btn:hover {
    border: 1px solid #000;
  }
}
</style>
