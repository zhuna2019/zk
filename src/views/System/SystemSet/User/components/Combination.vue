<template>
  <div class="category">
    <div class="title category_bg">
      <span>组织架构</span>
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
import { GetAllOrganize } from '@/api/system_api.js'
export default {
  data() {
    return {
      Data: [
        {
          ID: '1000',
          label: '甘州区鸿谷粮油储备中心储备库',
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
      const { data: res } = await GetAllOrganize()
      if (res.code === 0) {
        let list = res.data[0].Children
        list.forEach(element => {
          element.label = element.OrganizeName
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
    span {
      margin-left: 30px;
    }
  }
  .tree {
    width: 100%;
    height: 95%;
    overflow: hidden;
  }
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}
.category_bg {
  background: url(../../../../../assets/category.png) no-repeat;
}
img {
  vertical-align: middle;
}
</style>
