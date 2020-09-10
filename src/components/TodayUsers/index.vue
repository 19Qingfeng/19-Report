<template>
    <div>
        <common-card
            title="今日交易用户数"
            :description="orderUser"
        >
            <div class="chart">
                <!-- <div id="bar" style="height:100%;width:100%;"></div> -->
                <v-chart :options="getOptions()" />
            </div>
            <template v-slot:footer>
                <span>退货率</span>
                <span class="emphasis">{{returnRate}}</span>
            </template>
        </common-card>
    </div>
</template>
<script>
import CommonCardMixins from "../mixins/commomCard";
import CommomDataMixins from "../mixins/commomData";

export default {
  name: "TodayUser",
  mixins: [CommonCardMixins, CommomDataMixins],
  data() {
    return {};
  },
  methods: {
    getOptions() {
      return {
        color: "#3398DB",
        xAxis: {
          type: "category",
          show: false,
          data: this.orderUserTrendAxis,
        },
        tooltip: {},
        yAxis: {
          min: 0,
          show: false,
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
        series: {
          name: "实时交易量",
          type: "bar",
          barWidth: "60%",
          data: this.orderUserTrend,
        },
      };
    },
  },
  mounted() {},
};
</script>
