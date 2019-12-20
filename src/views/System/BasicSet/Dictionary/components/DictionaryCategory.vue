<template>
  <div class="category">
    <div class="title">
      <img src="@/assets/dictionary.png" alt /> 字典类别
    </div>
    <div class="tree">
      <el-tree
        node-key="ID"
        :expand-on-click-node="false"
        :data="Data"
        default-expand-all
        @node-click="getID"
        ref="getForm"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span :dataType="data.Type">
            <img
              v-if="data.children&&data.children.length>0"
              src="../../../../../assets/forder.png"
              alt
            />
            <img v-else src="../../../../../assets/layer.png" alt />
            {{ node.label }}
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>
<script>
import { GetAllTree } from '@/api/system_basic.js'
export default {
  data() {
    return {
      Data: [
        {
          ID: '1000',
          label: '所有类别',
          children: []
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    getID(row) {
      this.bus.$emit('getID', row)
    },
    async init() {
      const { data: res } = await GetAllTree()
      if (res.code === 0) {
        let list = res.data
        list.forEach(element => {
          element.label = element.StringValue
        })
        this.Data[0].children = list
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.category {
  width: 100%;
  height: 100%;
  font-size: 12px;
  .title {
    width: 100%;
    height: 5%;
    line-height: 26px;
    color: #eee;
    background-color: #034b8c;
    padding: 3px;
    img {
      vertical-align: middle;
    }
  }
  .tree {
    width: 100%;
    height: 95%;
    overflow: scroll;
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}
img {
  vertical-align: middle;
}
</style>
