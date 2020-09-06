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
import MapView from "../../components/MapView"
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  },
  data() {
    return {};
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
