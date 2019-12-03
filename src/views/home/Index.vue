<template>
  <div class="control-cabin">
    <div class="capsule">
      <div class="content">
        <div class="row">
          <div class="col-lg-3 col-md-3 left flex-column">
            <div class="svg-xbg">
              <div class="subtit font-20">
                <i class="iconfont icon-xinhao"></i> 库区基本信息
              </div>
              <table class="border left_table">
                <tr>
                  <td class="border">统一社会信用代码</td>
                  <td class="border">9153333325420332w</td>
                </tr>
                <tr>
                  <td class="border">库区名称</td>
                  <td
                    class="border"
                    style="white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"
                  >甘肃省陈官营粮油储备库有限公司</td>
                </tr>
                <tr>
                  <td class="border">企业性质</td>
                  <td class="border">国有企业</td>
                </tr>
                <tr>
                  <td class="border">法人代表</td>
                  <td class="border">刘建军</td>
                </tr>
                <tr>
                  <td class="border">联系人</td>
                  <td class="border">郭勋</td>
                </tr>
                <tr>
                  <td class="border">联系电话</td>
                  <td class="border">7545067</td>
                </tr>
                <tr>
                  <td class="border">库区地址</td>
                  <td
                    class="border"
                    style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"
                  >甘肃省兰州市西固区福利东路228号</td>
                </tr>
                <tr>
                  <td class="border">设计仓容(吨)</td>
                  <td class="border">126200</td>
                </tr>
                <tr>
                  <td class="border">占地面积(㎡))</td>
                  <td class="border">86916</td>
                </tr>
                <tr>
                  <td class="border">有无铁路专用线</td>
                  <td class="border">有</td>
                </tr>
                <tr>
                  <td class="border">有无检化验室</td>
                  <td class="border">有</td>
                </tr>
              </table>
            </div>
            <div class="flex-row">
              <div class="svg-sm">
                <div class="subtit font-20">
                  <i class="iconfont icon-xinhao"></i> 品种情况
                </div>
                <div id="breedMonitor" style="width:100%;height:85%;"></div>
              </div>
              <div class="svg-sm">
                <div class="subtit font-20">
                  <i class="iconfont icon-xinhao"></i> 储粮情况
                </div>
                <div id="designStorage" style="width:100%;height:85%;"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 middle flex-column">
            <div class="md-top">
              <div class="svg-xsm" id="jsonTal">
                <div class="font-20">总库存</div>
                <div class="font-number">
                  21331190
                  <i>KG</i>
                </div>
              </div>
              <div class="svg-xsm">
                <div class="font-20">当日入库</div>
                <div class="font-number">
                  190
                  <i>KG</i>
                </div>
              </div>
              <div class="svg-xsm">
                <div class="font-20">当日出库</div>
                <div class="font-number">
                  190
                  <i>KG</i>
                </div>
              </div>
            </div>
            <div class="video">
              <div class="v-top">
                <div class="v-title font-20">重点区域监控视频</div>
              </div>
              <div class="v-picture">
                <div class="modle">
                  <div class="pic"></div>
                  <div class="font-20">1号位置监控</div>
                </div>
                <div class="modle">
                  <div class="pic"></div>
                  <div class="font-20">2号位置监控</div>
                </div>
              </div>
            </div>
            <div class="md-floor svg-md">
              <div id="grainTemperature" style="width:100%;height:100%;"></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 right flex-column">
            <div class="svg-md onlineMonitor">
              <div class="font-20 subtit">
                <div>
                  <i class="iconfont icon-xinhao"></i> 监控在线情况
                </div>
                <div class="font-16 mb-1 mt-2">
                  检测总数
                  <span style="color:cyan">685</span>
                </div>
                <div class="font-16 mb-1 mt-2">
                  在线总数
                  <span style="color:cyan">631</span>
                </div>
                <div class="font-16 mb-1">
                  离线总数
                  <span>54</span>
                </div>
              </div>
              <div id="onlineMonitor" style="width:50%;height:100%;"></div>
            </div>
            <div class="svg-md position">
              <div class="font-20 subtit">
                <i class="iconfont icon-xinhao"></i> 监控位置情况
              </div>
              <div id="positionMonitor" style="width:100%;height:100%;"></div>
            </div>
            <div class="svg-bg">
              <div class="subtit font-20">
                <i class="iconfont icon-xinhao"></i> 气象信息
              </div>
              <table class="temperature">
                <tr>
                  <td class="border">降水量(mm)</td>
                  <td class="border">0</td>
                </tr>
                <tr>
                  <td class="border">风速</td>
                  <td class="border">0.5</td>
                </tr>
                <tr>
                  <td class="border">风向</td>
                  <td class="border">西北</td>
                </tr>
                <tr>
                  <td class="border">温度(℃)</td>
                  <td class="border">16.2</td>
                </tr>
                <tr>
                  <td class="border">湿度(%RH)</td>
                  <td class="border">66.9</td>
                </tr>
                <tr>
                  <td class="border">气压(Pa)</td>
                  <td class="border">84.9</td>
                </tr>
                <tr>
                  <td class="border">检测时间</td>
                  <td class="border">2019-06-05 09:00:01</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang='scss' scoped>
// @import '../../styles/css/iconfont.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.font-20 {
  font-size: 16px;
  font-weight: bolder;
  color: rgb(81, 175, 237);
  font-family: '微软雅黑';
}
.font-16 {
  font-size: 12px;
  color: rgb(167, 178, 189);
  font-family: '微软雅黑';
}
.font-number {
  font-size: 20px;
  color: rgb(231, 237, 243);
  font-weight: bolder;
  text-align: center;
}
i {
  font-size: 12px;
  color: red;
}
.control-cabin {
  width: 100%;
  height:79vh;
  background: url(img/bg.jpg) no-repeat;
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  /* 设置背景颜色，背景图加载过程中会显示背景色 */
  background-color: rgba(39, 7, 129, 0.1);
  padding: 1%;
}
.capsule {
  width: 100%;
  height: 100%;
  background: url(img/body_bg.svg) no-repeat;
  /* 背景图垂直、水平均居中 */
  background-position: center center;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.capsule > .top {
  width: 100%;
  height: 5%;
}
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sink {
  font-size: 20px;
  color: #fff;
  margin-left: 2rem;
}
.capsule > .content {
  width: 100%;
  height: 90%;
}
.content > .row {
  width: 100%;
  height: 100%;
  display: flex;
}
.left {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding:1rem; */
}
.middle {
  width: 50%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.svg-xbg {
  width: 100%;
  height: 68%;
  background: url(img/border_bg.svg);
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flex-row {
  width: 100%;
  height: 28%;
}
.svg-xbg > .subtit {
  width: 100%;
  height: 5%;
}
.left_table {
  width: 100%;
  height: 90%;
  border-collapse: collapse;
  border: 1px solid #fff;
  color: rgb(231, 237, 243);
  text-align: center;
  font: 12px '微软雅黑';
  table-layout: fixed;
  word-break: break-all;
}
.left_table td {
  border: 1px solid #fff;
}
td:nth-child(2) {
  text-align: left;
  padding-left: 2%;
}
.flex-row {
  display: flex;
  justify-content: space-between;
}
.svg-sm {
  width: 48%;
  height: 100%;
  background: url(img/border_bg.svg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.svg-sm > .subtit {
  width: 100%;
  height: 10%;
}
.md-top {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
}
.svg-xsm {
  width: 30%;
  height: 100%;
  background: url(img/body_bg.svg);
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.video {
  width: 100%;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.v-top {
  width: 100%;
  height: 8%;
}
.v-picture {
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: space-between;
}
.modle {
  width: 48%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pic {
  width: 100%;
  height: 90%;
  background-color: #eee;
}
.modle > .font-20 {
  width: 100%;
  height: 8%;
}
.md-floor {
  width: 100%;
  height: 30%;
  background: url(img/border_bg.svg);
  background-size: cover;
  background-position: center center;
  padding: 2%;
}
.onlineMonitor {
  width: 100%;
  height: 28%;
  display: flex;
  justify-content: space-between;
  background: url(img/border_bg.svg);
  background-size: cover;
  padding: 1rem;
}
.onlineMonitor > .subtit {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.position {
  width: 100%;
  height: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(img/border_bg.svg);
  background-size: cover;
  padding: 1rem;
}
.svg-bg {
  width: 100%;
  height: 38%;
  background: url(img/border_bg.svg);
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.svg-bg > .subtit {
  width: 100%;
  height: 10%;
}
.temperature {
  width: 100%;
  height: 85%;
  border-collapse: collapse;
  border: 1px solid #fff;
  color: rgb(231, 237, 243);
  text-align: center;
  font: 12px '微软雅黑';
  table-layout: fixed;
  word-break: break-all;
}
.temperature td {
  border: 1px solid #fff;
}
</style>
