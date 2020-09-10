<template>
    <div>
        <common-card
            title="累计销售额"
            :description="`${salesToday}`"
        >
            <div class="compare-wapper">
                <div class="compare">
                    <span>日同比</span>
                    <span class="emphasis">{{salesGrowthLastDay}}</span>
                    <div class="increase" />
                </div>
                <div class="compare">
                    <span>月同比</span>
                    <span class="emphasis">{{salesGrowthLastMonth}}</span>
                    <div class="decrease" />
                </div>
            </div>

            <template v-slot:footer>
                <span>昨日销售额</span>
                <span class="emphasis">{{salesLastData}}</span>
            </template>
        </common-card>
    </div>
</template>
<script>
import commoncardMixins from "../mixins/commomCard.js";
import commonDataMixins from "../mixins/commomData.js";
export default {
  name: "TotalSales",
  mixins: [commoncardMixins, commonDataMixins],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.compare-wapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

span {
  font-size: 12px;
}
</style>
<style lang="scss">
// 三角形服用样式 其他页面很多部分也用到了
.increase {
  width: 0;
  height: 0;
  border-width: 3px;
  border-style: solid;
  border-color: transparent transparent #ff0000 transparent;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 3px;
  border-style: solid;
  border-color: green transparent transparent transparent;
  margin: 0 0 -3px 5px;
}
// 服用标题样式
.compare {
  color: #666;
  margin-top: 3px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 800;
}
</style>
