<template>
  <div class="user_manager">
    <div class="left">
      <!-- 字典类别子组件 -->
      <combination />
    </div>
    <div class="right">
      <!-- 右侧表格内容区子组件 -->
      <user-content />
    </div>
  </div>
</template>
<script>
import Combination from './components/Combination'
import UserContent from './components/UserContent'
export default {
  components: {
    Combination,
    UserContent
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.user_manager {
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  .left {
    width: 14%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #034b8c;
    padding: 5px;
  }
  .right {
    width: 85%;
    height: 100%;
    border: 1px solid #034b8c;
    padding: 5px;
  }
}
</style>
