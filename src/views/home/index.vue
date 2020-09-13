<template>
    <div class="home">
        <top-view />
        <Sales-view />
        <Bottom-view />
        <map-view />
    </div>
</template>
<script>
import TopView from "../../components/TopView";
import SalesView from "../../components/SalesView";
import BottomView from "../../components/BottomView";
import MapView from "../../components/MapView";
import { wordCloudApi, screenData, scatter } from "../../api";

export default {
  name: "Home",
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData,
    };
  },
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  data() {
    return {};
  },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapdata: null,
    };
  },
  methods: {
    getReportData() {
      return this.reportData;
    },
    getWordCloud() {
      return this.wordCloud;
    },
    getMapData() {
      return this.mapdata;
    },
  },
  created() {
    wordCloudApi().then((res) => {
      this.wordCloud = res;
    });
    screenData().then((res) => {
      this.reportData = res;
    });
    scatter().then((res) => {
      this.mapdata = res;
    });
  },
};
</script>
<style lang="scss">
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
