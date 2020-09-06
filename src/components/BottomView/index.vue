<template>
  <div class="m-botton-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wapper">
            关键词搜索
          </div>
        </template>
        <template>
          <div class="wapper">
            <div class="chart-wapper">
              <div class="chart-inner" v-for="(item,idx) in chartList" :key="idx">
                <div class="chart-title">{{item.title}}</div>
                <div class="chart-data">{{item.data}}</div>
                <v-chart :options="getChartInfo(item.chartData)"/>
              </div>
            </div>
            <div class="table-wapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" width="120"/>
                <el-table-column prop="keyword" label="关键字" width="120"/>
                <el-table-column prop="count" label="总搜索量"/>
                <el-table-column prop="user" label="搜索用户数"/>
              </el-table>
              <el-pagination layout="total, sizes, prev, pager, next"
                             :total="100"
                             :page-size="6"
                             background
                             @current-change="handlerPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wapper">
              <el-radio-group v-model="radioSelect" size="mini">
                <el-radio-button label="商品"></el-radio-button>
                <el-radio-button label="品类"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="wapper">
            <v-chart :options="renderOptions()"/>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomView",
    data() {
      return {
        radioSelect: "商品",
        chartList: [
          {
            title: "搜索用户数",
            data: "93,634",
            chartData: [10, 20, 10, 12, 19, 30]
          },
          {
            title: "搜索量",
            data: "198,782",
            chartData: [30, 40, 9, 40, 66, 10]
          }
        ],
        tableData: [
          {id: 1, rank: 1, keyword: "北京", count: 100, user: "90%"},
          {id: 2, rank: 2, keyword: "北京", count: 100, user: "90%"},
          {id: 3, rank: 3, keyword: "北京", count: 100, user: "90%"},
          {id: 4, rank: 4, keyword: "北京", count: 100, user: "90%"},
          {id: 5, rank: 5, keyword: "北京", count: 100, user: "90%"}
        ]
      }
    },
    methods: {
      renderOptions() {
        const mockData = [
          {
            name: "粉面粥店",
            legendName: "粉面粥店", value: 97, percent: "15.40%",
            itemStyle: {
              color: "#8D7fec"
            }
          },
          {
            name: "简餐",
            legendName: "简餐", value: 97, percent: "22.30%",
            itemStyle: {
              color: "#5085f2"
            }
          },
          {
            name: "汉堡披萨",
            legendName: "汉堡披萨", value: 92, percent: "21.15%",
            itemStyle: {
              color: "#e7e702"
            }
          },
          {
            name: "粉面粥店2",
            legendName: "粉面粥店2", value: 97, percent: "15.40%",
            itemStyle: {
              color: "green"
            }
          },
        ]
        const options = {
          legend: {
            // 需要注意的是legend属性需要在data中定义每个item的name
            // 否则是不会进行显示的
            type: "scroll",
            height: 250,
            left: "70%",
            top: "middle",
            orient: "vertical",
            textStyle: {
              color: "#8c8c8c"
            }
          },
          title: [
            {
              text: "品类分布",
              textStyle: {
                fontSize: 12,
                color: "#666"
              },
              left: 20,
              top: 20
            }, {
              text: "累计订单量",
              subtext: "390",
              left: "34.5%",
              top: "42.5%",
              textAlign: "center",
              textStyle: {
                fontSize: 14,
                color: "#999"
              },
              subtextStyle: {
                fontSize: 28,
                color: "#333"
              }
            }
          ],
          series: [
            {
              type: "pie",
              data: mockData,
              // radius百分比的意思是取宽高中最小的
              // 百分比作为饼图的直径
              radius: ["45%", "60%"],
              center: ["35%", "50%"],
              clockwise: false, // 默认true顺时针 false表示逆时针
              labelLine: {
                normal: {
                  length: 5,
                  length2: 3,
                  smooth: true
                }
              },
              label: {
                show: true,
                position: "outter",
                formatter: (params) => {
                  return params.data.legendName
                }
              }
            }
          ]
        }
        return options
      },
      getChartInfo(data) {
        return {
          tooltip: {},
          xAxis: {
            type: "category",
            data: ["test", "test1", "test3", "test4", "test5", "test6"],
            boundaryGap: false,
            axisLine: {
              show: false
            }
          },
          grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          yAxis: {
            max: 70,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            }
            // show: false
          },
          series: [
            {
              type: "line",
              data: data,
              areaStyle: {
                color: "rgba(95,187,255,.5)"
              },
              lineStyle: {
                color: "rgba(95,187,255)"
              },
              itemStyle: {
                opacity: 0
              }
            }
          ]
        }
      },
      handlerPageChange(currentPage) {
        console.log(currentPage, 'currentPage')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m-botton-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;

      &:first-child {
        padding-right: 10px;
      }

      &:last-child {
        padding-left: 10px;
      }

      .title-wapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;

        .radio-wapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .wapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .el-pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }
      }

      .chart-wapper {
        display: flex;

        .chart-inner {
          flex: 1;
          width: 50%;
          margin-top: 20px;
          padding: 0 10px;

          .chart-title {
            color: #999;
            font-size: 14px;
          }

          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }

          .echarts {
            height: 50px;
          }
        }
      }
    }
  }
</style>
