<template>
    <div class="m_wordCloud">
        <v-chart :options="chartOptions" />
    </div>
</template>
<style lang="scss">
.m_wordCloud {
  height: 100%;
  widows: 100%;
  .echarts {
    height: 100%;
    width: 100%;
  }
}
</style>
<script>
import "echarts-wordcloud";
import commomData from "@/views/home/mixins/commonData";
export default {
  name: "WordCloud",
  mixins: [commomData],
  data() {
    return {
      chartOptions: null,
    };
  },
  watch: {
    wordCloud(n) {
      this.renderChart(n);
    },
  },
  methods: {
    formatterData(data) {
      return data.map((i) => {
        return {
          name: i.word,
          value: i.count,
        };
      });
    },
    renderChart(data) {
      const chartData = this.formatterData(data);
      this.chartOptions = {
        series: [
          {
            type: "wordCloud",
            data: chartData,
            // 设置为true可以使单词部分在画布之外绘制。
            //  允许绘制大于画布大小的单词
            drawOutOfBound: true,
            // 文字大小范围
            sizeRange: [6, 16],
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
          },
        ],
      };
    },
  },
};
</script>
