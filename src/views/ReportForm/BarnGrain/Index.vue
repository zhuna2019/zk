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
          <el-date-picker v-model="value2" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
      <div class="planBtn">
        <el-button type="primary" plain>查询</el-button>
        <el-button type="primary" plain>清空</el-button>
      </div>
    </div>
    <div class="top_menu">
      <functional-domaind />
    </div>
    <div class="content"></div>
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
      value2: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 5%;
  background-color: #034b8c;
}
.top_menu {
  width: 100%;
  height: 3%;
  background-color: #7ab6eb;
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
