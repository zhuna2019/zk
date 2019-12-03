<template>
  <div class="tag">
    <!-- <el-tag
      size="medium"
      v-for="tag in tags"
      :color="color"
      :key="tag.name"
      :type="tag.type"
      @click="changeTag(tag)"
    >
      <i :class="tag.iconClass"></i>
      {{tag.name}}
    </el-tag> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // color: '',
      // tags: [
      //   { name: '新增', type: '', iconClass: 'el-icon-plus' },
      //   { name: '编辑', type: 'success', iconClass: 'el-icon-edit-outline' },
      //   { name: '删除', type: '', iconClass: 'el-icon-delete' },
      //   { name: '刷新', type: 'info', iconClass: 'el-icon-refresh' },
      //   { name: '审核', type: 'warning', iconClass: 'el-icon-place' }
      // ]
    }
  },
  methods: {
    // changeTag(tag) {
    //   console.log(tag)
    // }
  }
}
</script>
<style lang="scss" scoped>
// .el-tag:hover {
//   background-color: rgba(49, 189, 214, 0.5);
// }
</style>
