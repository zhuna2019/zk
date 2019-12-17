<template>
  <div class="sysBarnInfo">
    <!-- 操作区 -->
    <div class="sort">
      <el-button
        size="mini"
        round
        type="success"
        class="iconfont icon-xinzeng"
        @click="addgsForm"
      >新增</el-button>
      <el-button
        size="mini"
        round
        type="warning"
        class="iconfont icon-bianji"
        @click="bjGsForm(addForm.ID)"
      >编辑</el-button>
      <el-button
        size="mini"
        round
        type="danger"
        class="iconfont icon-shanchu"
        @click="deleteForm(addForm.ID)"
      >删除</el-button>
      <el-button size="mini" round type="info" class="iconfont icon-shuaxin" @click="freshForm">刷新</el-button>
      <el-button size="mini" round type="primary" plain class="iconfont icon-daochu">导出</el-button>
      <el-button size="mini" round type="primary" plain class="iconfont icon-daoru">导入</el-button>
    </div>
    <el-dialog
      :title="title"
      width="800px"
      :visible.sync="dialogAddgsVisible"
      @close="closeDialogAddgsVisible"
    >
      <el-form
        :model="addForm"
        ref="addForm"
        class="dialogAdd"
        style="margin-right: 20px;"
        label-position="right"
        label-width="110px"
      >
        <el-form-item label="仓房编号：" prop="Cfbh">
          <el-input v-model="addForm.Cfbh" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="仓房名称：" prop="Cfmc">
          <el-input v-model="addForm.Cfmc"></el-input>
        </el-form-item>
        <el-form-item label="仓房类型：" prop="Cflx">
          <el-input v-model="addForm.Cflx"></el-input>
        </el-form-item>
        <el-form-item label="仓房结构：" prop="Cfjg">
          <el-input v-model="addForm.Cfjg"></el-input>
        </el-form-item>
        <el-form-item label="建筑类型：" prop="Jzlx">
          <el-input v-model="addForm.Jzlx"></el-input>
        </el-form-item>
        <el-form-item label="仓房长度：" prop="Cfcd">
          <el-input v-model="addForm.Cfcd"></el-input>
        </el-form-item>
        <el-form-item label="仓房宽度：" prop="Cfkd">
          <el-input v-model="addForm.Cfkd"></el-input>
        </el-form-item>
        <el-form-item label="仓房高度：" prop="Cfgd">
          <el-input v-model="addForm.Cfgd"></el-input>
        </el-form-item>
        <el-form-item label="设计仓容：" prop="Capacity">
          <el-input v-model="addForm.Capacity"></el-input>
        </el-form-item>
        <el-form-item label="实际仓容：" prop="RealCapacity">
          <el-input v-model="addForm.RealCapacity"></el-input>
        </el-form-item>
        <el-form-item label="经度：" prop="Longitude">
          <el-input v-model="addForm.Longitude"></el-input>
        </el-form-item>
        <el-form-item label="纬度：" prop="Latitude">
          <el-input v-model="addForm.Latitude"></el-input>
        </el-form-item>
        <el-form-item label="启用日期：" prop="Qyrq">
          <el-input v-model="addForm.Qyrq"></el-input>
        </el-form-item>
        <el-form-item label="电话：" prop="Phone">
          <el-input v-model="addForm.Phone"></el-input>
        </el-form-item>
        <el-form-item label="排序：" prop="Sort">
          <el-input v-model="addForm.Sort"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveAddForm">保存</el-button>
      </div>
    </el-dialog>
    <!-- 表格区域 -->
    <el-table
      :data="storehouselist"
      stripe
      border
      highlight-current-row
      height="550px"
      @row-click="getID"
    >
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="planId" label="所属粮库" show-overflow-tooltip></el-table-column>
      <el-table-column prop="ProjectCode" label="库房编码" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Cfmc" label="库房名称" show-overflow-tooltip sortable></el-table-column>
      <el-table-column prop="Cflx" label="库房类型"></el-table-column>
      <el-table-column prop="Cfjg" label="库房结构"></el-table-column>
      <el-table-column prop="Jzlx" label="建筑类型"></el-table-column>
      <el-table-column prop="Cfcd" label="库房长度(m)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Cfkd" label="库房宽度(m)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Cfgd" label="库房高度(m)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Capacity" label="设计仓容(kg)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="RealCapacity" label="实际仓容(kg)" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Phone" label="联系电话" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Longitude" label="经度" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Latitude" label="纬度" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Qyrq" label="启用日期" show-overflow-tooltip></el-table-column>
      <el-table-column prop="Sort" label="排序" show-overflow-tooltip></el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageIndex"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pageSize"
      layout="total, sizes, prev, pager, next"
      :total="total"
      class="pagination"
    ></el-pagination>
  </div>
</template>
<script>
import {
  getStoreHouseList,
  addPostBarn,
  DeleteBarn,
  getBarnMessage
} from '@/api/system_api.js'
export default {
  data() {
    return {
      // 获取参数对象
      queryInfo: {
        pageIndex: 1,
        pageSize: 3
      },
      storehouselist: [],
      total: 0,
      dialogAddgsVisible: false,
      title: '',
      addForm: {
        ID: '',
        ProjectCode: '',
        Sort: '',
        UpdateDate: '',
        Cfbh: '',
        Cfmc: '',
        Cflx: '',
        Cfjg: '',
        Jzlx: '',
        Cfcd: 0,
        Cfkd: 0,
        Cfgd: 0,
        RealCapacity: 0,
        Capacity: 0,
        Phone: null,
        Longitude: null,
        Latitude: null,
        Qyrq: '',
        Storeman: null,
        Blstatus: null,
        Deleted: null,
        FoodTraceabilityCode: null,
        DJ: null,
        RCDateTime: null,
        ItemCode: null,
        GrainStorageProperties: null,
        State: null,
        UseState: null,
        Year: null,
        AddressCode: null,
        Memo: null
      }
    }
  },
  created() {
    this.init()
  },
  methods: {
    // 获取每一行数据的id
    getID(row) {
      this.addForm.ID = row.ID
    },
    // 点击删除按钮
    deleteForm(id) {
      if (id) {
        this.$confirm(`确定删除选中信息?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            DeleteBarn(id).then(res => {
              if (res.data.code !== 0) {
                this.$message({
                  type: 'info',
                  message: '删除失败!'
                })
              }
              this.$message({
                type: 'success',
                message: '删除成功!'
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
        this.$message('请选择一条信息')
      }
    },
    // 点击编辑按钮
    bjGsForm(id) {
      if (id) {
        getBarnMessage(id).then(res => {
          if (res.data.code === 0) {
            let value = res.data.data
            this.dialogAddgsVisible = true
            this.title = '编辑'
            this.addForm.Cfbh = value.Cfbh
            this.addForm.Cfmc = value.Cfmc
            this.addForm.Cflx = value.Cflx
            this.addForm.Cfjg = value.Cfjg
            this.addForm.Jzlx = value.Jzlx
            this.addForm.Cfcd = value.Cfcd
            this.addForm.Cfkd = value.Cfkd
            this.addForm.Cfgd = value.Cfgd
            this.addForm.Capacity = value.Capacity
            this.addForm.RealCapacity = value.RealCapacity
            this.addForm.Longitude = value.Longitude
            this.addForm.Latitude = value.Latitude
            this.addForm.Qyrq = value.Qyrq
            this.addForm.Phone = value.Phone
            this.addForm.Sort = value.Sort
            this.addForm.ID = value.ID
          } else {
            this.$message('请求数据失败')
          }
        })
      } else {
        this.$message({
          message: '请先选择要编辑的数据',
          type: 'warning'
        })
      }
    },
    /**
     *点击新增按钮，弹出新增模态框
     * @param
     */
    addgsForm() {
      this.dialogAddgsVisible = true
      this.title = '新增仓房信息'
    },
    /**
     *关闭或取消模态框，清空值
     * @param
     */
    closeDialogAddgsVisible() {
      this.$refs.addForm.resetFields() // element封装的方法,清空模态框的值
      this.title = '' // 初始化title的值
      this.addForm = {
        // 初始化addForm中的值
        Cfbh: '',
        Cfmc: '',
        Cfjg: '',
        Cflx: '',
        Jzlx: '',
        Cfcd: '',
        Cfkd: '',
        Cfgd: '',
        Capacity: '',
        RealCapacity: '',
        Longitude: '',
        Latitude: '',
        Qyrq: '',
        Phone: '',
        Sort: ''
      }
    },
    /**
     *确定新增数据
     * @param
     */
    saveAddForm() {
      let data = this.addForm
      // console.log(data)
      // 当没有传过来id的时候,说明是添加,所以发送添加请求
      addPostBarn(data).then(res => {
        console.log(res)
        if (res.data.code !== 0) {
          return this.$message('请求失败')
        }
        this.dialogAddgsVisible = false
        this.init()
      })
    },
    // 点击刷新按钮
    freshForm() {
      self.location.reload()
    },
    // 初始化页面
    init() {
      getStoreHouseList(this.queryInfo).then(res => {
        if (res.status !== 200) {
          return this.$message.error('获取库房列表信息失败')
        }
        this.storehouselist = res.data.data
        this.total = res.data.totalcount
      })
    },
    // 监听pagesize 改变事件
    handleSizeChange(newSize) {
      this.queryInfo.pageSize = newSize
      this.init()
    },
    // 监听页码值，改变时间
    handleCurrentChange(newPage) {
      this.queryInfo.pageIndex = newPage
      this.init()
    }
  }
}
</script>
<style lang="scss" scoped>
.sysBarnInfo {
  height: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sort {
    width: 100%;
    height: 5%;
    padding: 10px;
    .el-button {
      font-size: 12px !important;
      border: none;
    }
    .el-button:hover {
      background-color: #0dc6f5;
      color: #000;
    }
  }
}
.el-table {
  width: 100%;
  height: 90%;
}
.pagination {
  width: 100%;
  height: 5%;
}
.dialogAdd {
  display: flex;
  flex-wrap: wrap;
}
</style>
