<template>
  <div class="sales-view">
    <el-card :body-style="{'padding':'0 0 20px 0'}">
      <template v-slot:header>
        <div class="sales-view-top">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="menuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="sales">销售额</el-menu-item>
            <el-menu-item index="visit">访问量</el-menu-item>
          </el-menu>

          <div class="menu-right">
            <el-radio-group
              v-model="currentToday"
              size="small"
            >
              <el-radio-button label="今日"/>
              <el-radio-button label="本周"/>
              <el-radio-button label="本月"/>
              <el-radio-button label="今年"/>
            </el-radio-group>
            <el-date-picker
              v-model="date"
              type="daterange"
              size="small"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="date"
              range-separator="至"
              class="sales-view-date-picker"
            />
          </div>

        </div>
      </template>
      <template>
        <div class="sales-view-chart-wapper">
          <v-chart :options="options"/>
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div :class="['item-wapper']">
              <div class="item-wapper-inner" v-for="(item,idx) in rankData" :key="idx">
                <div :class="['item-number',idx < 3 ? 'item-number-hover' : '']">{{item.no}}</div>
                <div class="item-name">{{item.name}}</div>
                <div class="item-money">{{item.money}}</div>
              </div>
            </div>

          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: "SalesView",
    data() {
      return {
        activeIndex: "sales",
        currentToday: "今日",
        date: null,
        options: {
          title: {
            text: "年度销售额",
            left: 25,
            top: 20,
            textStyle: {
              fontSize: 12,
              color: "#666"
            }
          },
          xAxis: {
            type: "category",
            // axisTick:false,
            axisTick: {
              // 类目轴有效果 x刻度线和类目轴对齐
              // 同时也会解决X轴开头显示的刻度
              alignWithLabel: true,
              lineStyle:{
                color:"#999"
              }
            },
            axisLine:{
              lineStyle:{
                color:"#999"
              }
            },
            axisLabel:{
              color:"#333"
            },
            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十一月"]
          },
          grid: {
            top: 70,
            left: 60,
            right: 60,
            bottom: 50
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#eee",
                type: "dashed"
              }
            }
          },
          series: [
            {
              color: "#3398BD",
              type: "bar",
              barWidth: "35%",
              data: [200, 210, 190, 290, 220, 210, 180, 310, 210, 300, 170, 120]
            }
          ]
        },
        rankData: [
          {
            name: "麦当劳",
            money: "321,000",
            no: 1
          },
          {
            name: "肯德基",
            money: " 621,000",
            no: 2
          },
          {
            name: "海底捞",
            money: "12,991,000",
            no: 3
          },
          {
            name: "三只小熊",
            money: "1,2000",
            no: 4
          },
          {
            name: "德克士",
            money: "12,000",
            no: 5
          },
          {
            name: "汉堡王",
            money: "9,000",
            no: 6
          }
        ]
      };
    },
    methods: {
      menuSelect() {
      }
    }
  };
</script>

<style lang="scss">
  .sales-view {
    margin-top: 10px;
    position: relative;

    .sales-view-menu {
      width: 100%;
      padding-left: 20px;

      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }

    .sales-view-date-picker {
      margin-left: 20px;
    }

    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .sales-view-chart-wapper {
      width: 100%;
      height: 270px;
      display: flex;

      .echarts {
        flex: 0 0 70%;
        width: 70%;
      }
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;

      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }

      .item-wapper {
        /*display: flex;*/
        margin-top: 15px;
      }

      .item-wapper-inner {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0px;
      }

      .item-number {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;

        &.item-number-hover {
          background: #000;
          border-radius: 50%;
          color: #fff;
          font-weight: 500;
        }
      }

      .item-name {
        margin-left: 10px;
        height: 20px;

        color: #333;
      }

      .item-money {
        flex: 1;
        text-align: right;
        height: 20px;

      }

    }

  }

  .sales-view-top {
    display: flex;
    align-items: center;
  }
</style>
