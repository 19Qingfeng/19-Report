<template>
    <div class="map-view">
        <div class="left">
            <Bmap-scatter />
        </div>
        <div class="right">

            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title">用户月同比增长</div>
                    <div class="chart-wapper">
                      <liquid-fill />
                    </div>
                </template>
            </el-card>
            <el-card shadow="hover">
                <template v-slot:header>
                    <div class="title">用户月同比增长</div>
                    <div class="chart-wapper"></div>
                </template>
            </el-card>

        </div>
    </div>
</template>
<script>
import BmapScatter from "../BmapScatter";
import liquidFill from "../liquidFill"
export default {
  components: {
    BmapScatter,
    liquidFill
  },
};
</script>
<style lang="scss" scoped>
.map-view {
  margin-top: 20px;
  display: flex;
  height: 650px;
}
.left {
  height: 100%;
  flex: 0 0 80%;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  .title {
    display: flex;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    font-weight: 500;
    padding: 0 0 0 20px;
  }
  .chart-wapper {
      width:100%;
      height:190px;
  }
}
</style>