<template>
  <div class="role_content">
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
        <el-table-column type="selection" width="55"></el-table-column>
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
import { getAllMenu } from '@/api/role.js'
export default {
  data() {
    return {
      menuRoleData: [],
      loading: true,
      checkedRows: []
    }
  },
  methods: {
    toggleSelection(rows) {
      this.$nextTick(function() {
        if (rows) {
          rows.forEach(row => {
            console.log(row)
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      })
    },
    accept(id) {
      getAllMenu(id).then(result => {
        if (result.data.code !== 0) {
          return this.$message.error('菜单列表查询失败')
        }
        this.menuRoleData = result.data.data
        this.loading = false
        this.menuRoleData.forEach(item => {
          if (item.IsVisible === '1') {
            this.checkedRows.push(item)
          }
        })
      })
    }
  },
  watch: {
    huxing() {
      // 接收父组件传来的参数名
      this.toggleSelection(this.checkedRows)
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
