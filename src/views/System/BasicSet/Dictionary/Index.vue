<template>
  <div class="dictionary">
    <div class="dictionary_category">
      <!-- 字典类别子组件 -->
      <dictionary-category />
    </div>
    <div class="operation">
      <!-- 右侧表格内容区子组件 -->
      <dictionary-content />
    </div>
  </div>
</template>
<script>
import DictionaryCategory from './components/DictionaryCategory'
import DictionaryContent from './components/DictionaryContent.vue'
export default {
  components: {
    DictionaryCategory,
    DictionaryContent
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.dictionary {
  width: 100%;
  height: 93%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  .dictionary_category {
    width: 14%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #034b8c;
    padding: 5px;
  }
  .operation {
    width: 85%;
    height: 100%;
    border: 1px solid #034b8c;
    padding: 5px;
  }
}
</style>
