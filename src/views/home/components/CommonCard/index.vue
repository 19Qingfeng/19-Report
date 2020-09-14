<template>
  <div>
    <div class="title">{{title}}</div>
    <div class="description">{{description}}</div>
    <div class="chart">
      <slot />
    </div>
    <!-- 默认插槽 展示图表 -->
    <div class="line" />
    <div class="footer">
      <slot name="footer" /> 
    </div>
  </div>
</template>
<script>
export default {
  name: "CommonCard",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}
.description {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  // 文字间的间距
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}
.line{
  margin:10px 0;
  border-top:1px solid #eee;
}
.footer{
  font-size: 12px;
  color:gray;
}
</style>