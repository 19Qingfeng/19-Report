<template>
  <div class="sales-view">
    <el-card :body-style="{'padding':'0 0 20px 0'}">
      <template v-slot:header>
        <div class="sales-view-top">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            class="sales-view-menu"
            @select="menuSelect"
          >
            <el-menu-item index="sales">销售额</el-menu-item>
            <el-menu-item index="visit">访问量</el-menu-item>
          </el-menu>

          <div class="menu-right">
            <el-radio-group
              v-model="currentToday"
              size="small"
            >
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
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
          <v-chart :options="chartOptions" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div :class="['item-wapper']">
              <div
                v-for="(item,idx) in rankData"
                :key="idx"
                class="item-wapper-inner"
              >
                <div :class="['item-number',idx < 3 ? 'item-number-hover' : '']">{{ item.no }}</div>
                <div class="item-name">{{ item.name }}</div>
                <div class="item-money">{{ item.money }}</div>
              </div>
            </div>

          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>
<script>
import CommonDataMixins from '@/views/home/mixins/commonData'
export default {
  name: 'SalesView',
  mixins: [CommonDataMixins],
  data() {
    return {
      activeIndex: 'sales',
      currentToday: '今日',
      chartOptions: {},
      date: null
    }
  },
  computed: {
    rankData() {
      return this.activeIndex === 'sales' ? this.orderRank : this.userRank
    }
  },
  watch: {
    orderFullYear(n) {
      this.render(n, this.orderFullYearAxis, '年度销售额')
    }
  },
  methods: {
    render(data, axis, title) {
      this.chartOptions = {
        title: {
          text: title,
          left: 25,
          top: 20,
          textStyle: {
            fontSize: 12,
            color: '#666'
          }
        },
        xAxis: {
          type: 'category',
          // axisTick:false,
          axisTick: {
            // 类目轴有效果 x刻度线和类目轴对齐
            // 同时也会解决X轴开头显示的刻度
            alignWithLabel: true,
            lineStyle: {
              color: '#999'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          },
          data: axis
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
              color: '#eee',
              type: 'dashed'
            }
          }
        },
        series: [
          {
            color: '#3398BD',
            type: 'bar',
            barWidth: '35%',
            data
          }
        ]
      }
    },
    menuSelect(index) {
      this.activeIndex = index
      if (index === 'sales') {
        this.render(this.orderFullYear, this.orderFullYearAxis, '年度销售额')
      } else {
        this.render(this.userFullYear, this.userFillYearAxis, '年度用户访问量')
      }
    }
  }
}
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
