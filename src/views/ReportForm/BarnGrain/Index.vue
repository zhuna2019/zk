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
        <table
          width="560"
          height="320"
        >
          <tr>
            <td width="100%" height="240">
              <p align="center">
                <font face="隶书" size="5" style="letter-spacing: 10px">郭德强</font>
              </p>
              <p align="center">
                <font face="宋体" size="3">科学家</font>
              </p>
              <p align="left">
                <font face="宋体" size="3">地址：中国北京社会科学院附近东大街西胡同</font>
              </p>
              <p align="left">
                <font face="宋体" size="3">电话：010-88811888</font>
              </p>
              <p>
                <br />
              </p>
            </td>
          </tr>
        </table>
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
      isshow: true
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
}
.content {
  width: 100%;
  height: 91%;
  background-color: #eee;
}
.top {
  width: 100%;
  height: 5%;
  background-color: #034b8c;
  display: flex;
  padding: 3px;
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
