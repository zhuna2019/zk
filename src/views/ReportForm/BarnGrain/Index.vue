<template>
  <div class="container">
    <!-- 查询区域 -->
    <div class="top">
      <div class="plan">
        <div class="input">
          <span>开始时间</span>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <div class="input">
          <span>至</span>
          <el-date-picker class="input_inner" v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
      <div class="planBtn">
        <el-button type="primary" plain @click="printBtn">查询</el-button>
        <el-button type="primary" plain>清空</el-button>
      </div>
    </div>
    <div class="top_menu">
      <functional-domaind />
    </div>
    <div class="content">
      <form id="form1" v-show="isshow">
       <el-table
            class="table"
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>
      </form>
    </div>
  </div>
</template>
<script>
// 引入子组件
import FunctionalDomaind from '../components/FunctionalDomain'
export default {
  components: {
    FunctionalDomaind
  },
  data() {
    return {
      value1: '',
      value2: '',
      isshow: true,
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  methods: {
    printBtn() {
      window.print()
    }
  }
}
</script>
<style lang="scss" scoped>
.top_menu {
  width: 100%;
  height: 5%;
  background-color: #aaa;
  line-height: 25px;
}
.content {
  width: 100%;
  height: 91%;
  background-color: #eee;
}
.top {
  width: 100%;
  height: 6%;
  background-color: #034b8c;
  display: flex;
  padding: 3px;
  line-height: 28px;
}
.plan {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  .input {
    width: 70%;
    height: 100%;
    display: flex;
    span {
      width: 20%;
      color: red;
      overflow: hidden;
    }
    .input_inner {
      height: 20px !important;
    }
  }
}
.planBtn {
  display: flex;
  justify-content: center;
  align-items: cneter;
  font-size: 14px;
  width: 30%;
  .el-button {
    width: 20%;
    overflow: hidden;
  }
}
</style>
