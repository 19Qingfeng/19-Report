<template>
    <div class="m_wordCloud">
        <v-chart :options="chartOptions"></v-chart>
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
import "../../../node_modules/echarts-wordcloud";
import commomData from "@/components/mixins/commomData";
export default {
  name: "WordCloud",
  mixins: [commomData],
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
  data() {
    const data = [
      { name: "数据可视化", value: 50 },
      { name: "19-Qingfeng", value: 20 },
      { name: "wanghaoyu", value: 70 },
      { name: "webpack", value: 70 },
      { name: "typescript", value: 67 },
      { name: "vue-sourcecode", value: 73 },
      { name: "react", value: 22 },
      { name: "ecmascript6", value: 122 },
      { name: "ecmascript7", value: 72 },
      { name: "ecmascript8", value: 22 },
      { name: "ecmascript9", value: 82 },
      { name: "ecmascript10", value: 62 },
      { name: "ecmascript11", value: 42 },
      { name: "ecmascript12", value: 18 },
      { name: "rollup", value: 68 },
      { name: "java", value: 38 },
      { name: "py", value: 48 },
      { name: "go", value: 78 },
      { name: "设计模式", value: 68 },
      { name: "算法", value: 38 },
      { name: "jest", value: 118 },
    ];
    return {
      chartOptions: null,
    };
  },
};
</script>