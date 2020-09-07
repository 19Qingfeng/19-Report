<template>
    <div class="m_liquidfill">
        <v-chart :options="options" />
    </div>
</template>
<style lang="scss">
.m_liquidfill {
  height: 100% !important;
  width: 100% !important;
  .echarts {
    height: 100% !important;
    width: 100% !important;
  }
}
</style>
<script>
import "echarts-liquidfill";
export default {
  name: "LiquidFill",
  data() {
    function getColor(value) {
      return value > 0 && value <= 0.5
        ? "rgba(97,216,0,.7)"
        : value > 0.5 && value <= 0.8
        ? "rgba(204,178,26,.7)"
        : value > 0.8
        ? "rgba(241,47,28,.7)"
        : "#c7c7cb";
    }
    return {
      options: {
        series: [
          {
            type: "liquidFill",
            data: [0.38],
            radius: "80%",
            // 波纹的震荡幅度
            amplitude: 8,
            color: [getColor(0.38)],
            backgroundStyle: {
              color: "#fff",
            },
            itemStyle: {
              showBlur: 0,
              shadowColor: "#fff",
            },
            outline: {
              borderDistance: 0,
              itemStyle: {
                color: "none",
                borderWidth: 1,
                showdowColor: "#fff",
                borderColor: "aaa4a4",
                shadowBlur: 0,
              },
            },
            label: {
              // label和波纹重叠时
              insideColor: "red",
              textStyle: {
                fontSize: 36,
                color: "#999",
                fontWeight: "normal",
              },
              formatter: (v) => {
                return v.value;
              },
            },
          },
        ],
      },
    };
  },
};
</script>