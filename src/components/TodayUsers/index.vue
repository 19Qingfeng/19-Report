<template>
  <div>
    <common-card title="今日交易用户数" description="81,014">
      <div class="chart">
        <!-- <div id="bar" style="height:100%;width:100%;"></div> -->
        <v-chart :options="getOptions()"/>
      </div>
      <template v-slot:footer>
        <span>退货率</span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>
<script>
  import CommonCardMixins from "../mixins/commomCard";

  export default {
    name: "TodayUser",
    mixins: [CommonCardMixins],
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
            data: [
              "00:00",
              "01:00",
              "02:00",
              "03:00",
              "04:00",
              "05:00",
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00"
            ]
          },
          tooltip: {},
          yAxis: {
            max: 130,
            min: 0,
            show: false
          },
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          series: {
            type: "bar",
            barWidth: "60%",
            data: [19, 78, 21, 107, 4, 99, 67, 55, 97, 32]
          }
        };
      }
    },
    mounted() {
    }
  };
</script>
