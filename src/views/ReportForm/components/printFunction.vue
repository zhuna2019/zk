<template>
  <div class="topTip">
    <el-tooltip class="item" effect="light" content="直接打印" placement="top" :enterable="false">
      <div @click="print">
        <img src="@/assets/print.png" alt />
      </div>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="预览打印" placement="top" :enterable="false">
      <div @click="reprint">
        <img src="@/assets/reprint.png" alt />
      </div>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="打印模板设计" placement="top" :enterable="false">
      <div @click="printset">
        <img src="@/assets/reset.png" alt />
      </div>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="导出为excel文件" placement="top" :enterable="false">
      <div @click="exportExcel">
        <img src="@/assets/excel.png" alt />
      </div>
    </el-tooltip>
    <el-tooltip class="item" effect="light" content="导出为PDF文件" placement="top" :enterable="false">
      <div>
        <img src="@/assets/Pdf.png" alt />
      </div>
    </el-tooltip>
  </div>
</template>
<script>
import { getLodop } from '../../../tool/lodop'
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data() {
    return {}
  },
  methods: {
    // 直接打印功能
    print() {
      let LODOP = getLodop()
      LODOP.ADD_PRINT_HTM(
        10,
        55,
        '100%',
        '100%',
        document.getElementById('form1').innerHTML
      )
      LODOP.SET_PRINT_STYLE('FontSize', 11)
      LODOP.PRINT()
    },
    // 预览
    reprint() {
      let LODOP = getLodop()
      LODOP.ADD_PRINT_HTM(
        10,
        55,
        '100%',
        '100%',
        document.getElementById('form1').innerHTML
      )
      LODOP.SET_PRINT_STYLE('FontSize', 11)
      LODOP.PREVIEW()
    },
    // 打印机维护
    printset() {
      let LODOP = getLodop()
      LODOP.ADD_PRINT_HTM(
        10,
        55,
        '100%',
        '100%',
        document.getElementById('form1').innerHTML
      )
      LODOP.SET_PRINT_STYLE('FontSize', 11)
      LODOP.PRINT_DESIGN()
    },
    // 导出excel
    exportExcel() {
      // 设置当前日期
      let time = new Date()
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let name = year + '' + month + '' + day
      // console.log(name)
      /* generate workbook object from table */
      //  .table要导出的是哪一个表格
      var wb = XLSX.utils.table_to_book(document.querySelector('.table'))
      /* get binary string as output */
      var wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: true,
        type: 'array'
      })
      try {
        //  name+'.xlsx'表示导出的excel表格名字
        FileSaver.saveAs(
          new Blob([wbout], { type: 'application/octet-stream' }),
          name + '.xlsx'
        )
      } catch (e) {
        if (typeof console !== 'undefined') console.log(e, wbout)
      }
      return wbout
    }
  }
}
</script>
<style lang="scss" scoped>
.topTip {
  width: 100%;
  display: flex;
  .item {
    margin-left: 6px;
  }
}
img {
  cursor: pointer;
  cursor: hand;
  vertical-align: middle;
}
</style>
