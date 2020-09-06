<template>
  <div>
    <common-card title="累计订单量" description="2,127,420">
      <div class="line-wapper">
        <div id="line-charts" style="width:100%;height:50px" />
      </div>
      <template v-slot:footer>
        <span>昨日订单量</span>
        <span class="emphasis">20,000,000</span>
      </template>
    </common-card>
  </div>
</template>
<script>
import CommonCardMinxins from "../mixins/commomCard";
export default {
  name: "TotalOrders",
  mixins: [CommonCardMinxins],
  data() {
    return {};
  },
  mounted() {
    const line = document.getElementById("line-charts");
    const chart = this.$echarts.init(line);
    chart.setOption({
      xAxis: {
        // 明确指定x轴类型 否则默认是value
        type: "category",
        show: false,
        // 默认折线图即使配置了grid两边也会留白
        // 配置boundaryGap进行处理
        // 类目轴中表示为第一个点和最后一个点距离grid两边的距离 
        // 配置false表示无距离紧挨
        boundaryGap:false
      },
      yAxis: {
        type: "value",
        show: false,
        max: 400
      },
      grid: {
          // 四个距离都为0让整个图表内容区域撑满
          top:0,
          left:0,
          bottom:0,
          right:0
      },
      series: {
        type: "line",
        smooth:0,
        lineStyle:{
            width:0
        },
        data: [100, 220, 320, 290, 287, 199],
        itemStyle:{
            opacity:0
        },
        areaStyle:{
            color:"purple"
        }
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.line-wapper {
  height: 100%;
}
</style>