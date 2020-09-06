<template>
  <div>
    <common-card title="累计用户数" description="1,087,503">
      <!-- <div id="chart" style="width:100%;height:100%"></div> -->
      <v-chart :options="getOption()" />
      <template v-slot:footer>
        <div class="wapper">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <span class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <span class="decrease" />
        </div>
      </template>
    </common-card>
  </div>
</template>
<script>
import CommonCardMixins from "../mixins/commomCard";
export default {
  name: "TotalUsers",
  mixins: [CommonCardMixins],
  methods: {
    getOption() {
      return {
        xAxis: {
          type: "value",
          show: false
        },
        yAxis: {
          type: "category",
          show: false
        },
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        },
        tooltip: {},
        series: [
          {
            name: "test1",
            type: "bar",
            data: [100],
            barWidth: 15,
            stack: "bar",
            itemStyle: {
              color: "#45c946"
            }
          },
          {
            name: "test2",
            type: "bar",
            data: [120],
            stack: "bar",
            itemStyle: {
              color: "#eee"
            }
          },
          {
            type: "custom",
            stack: "bar",
            data: [100],
            renderItem: (params, api) => {
              const value = api.value(0); // 注意获取的是第一个纬度
              const endPoint = api.coord([value, 0]); //获取对应位置
              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path", // 使用svg矢量图标
                    shape: {
                      d:
                        "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z", // svg中的path
                      x: -5, // 相对x轴偏移坐标
                      y: -20, // 相对y轴偏移坐标
                      width: 10, // 图形宽
                      height: 10, // 图形高
                      layout: "cover" // 图形比 center保持图形宽高比放大4
                      // cover 不保持宽高比放大
                    },
                    // style样式配置
                    style: {
                      fill: "#45c946"
                    }
                  },
                  {
                    type: "path", // 使用svg矢量图标
                    shape: {
                      d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z", // svg中的path
                      x: -5, // 相对x轴偏移坐标
                      y: 10, // 相对y轴偏移坐标
                      width: 10, // 图形宽
                      height: 10, // 图形高
                      layout: "cover" // 图形比 center保持图形宽高比放大9
                    },
                    // style样式配置
                    style: {
                      fill: "#45c946"
                    }
                  }
                ]
              };
            }
          }
        ]
      };
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wapper {
  display: flex;
  align-items: center;
  .item {
    display: flex;
    align-items: center;
  }
  .month {
    margin-left: 5px;
  }
}
</style>
