<template>
    <div class="m_map_scatter">
        <v-chart :options="chartOption" />
    </div>
</template>
<style lang="scss">
.m_map_scatter {
  height: 100%;
  width: 100%;
  .echarts {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
<script>
// 引入Bmap 这样才可以在echarts中去使用bmap
// 不要忘记引入百度地图api
// 百度地图配合echarts使用 echarts目前还不支持最近1.0的webgl
// 所以只能使用2。0的百度api配合echarts
import "echarts/extension/bmap/bmap";
import commomDataMixins from "@/components/mixins/commomData";

export default {
  name: "Bmap",
  mixins: [commomDataMixins],
  data() {
    return {
      chartOption: {},
    };
  },
  watch: {
    mapData(n) {
      // 初次并不会渲染 因为没有immediate 数据变化渲染刚好
      this.renderChart();
    },
  },
  methods: {
    renderChart() {
      const { data, geo } = this.mapData;
      const newData = this.converData(data, geo);
      this.chartOption = {
        title: {
          text: "19-Qingfeng",
          subtext: "Github",
          sublink: "https://github.com/19Qingfeng",
          left: "center",
        },
        tooltip: {},

        series: [
          {
            type: "scatter",
            name: "模拟销售额",
            // 使用Bmap不设置坐标系统会报错 显示设置散点图坐标系统
            coordinateSystem: "bmap",
            data: newData,
            itemStyle: {
              color: "purple",
            },
            symbolSize: (val) => {
              return val[2] / 10;
            },
            encode: {
              value: 2,
            },
            emphasis: {
              label: {
                position: "right",
                show: true,
                formatter: "{b}",
              },
            },
          },
          {
            name: "Top 2",
            type: "effectScatter", // 带有波纹的散点图
            coordinateSystem: "bmap",
            encode: {
              value: 2,
            },
            data: newData.sort((a, b) => b.value[2] - a.value[2]).slice(0, 5),
            symbolSize: (val) => {
              return val[2] / 10;
            },
            hoverAnimation: true,
            rippleEffect: {
              // 涟漪动画相关配置
              brushType: "stroke",
            },
            itemStyle: {
              color: "purple",
              shadowBlur: 10,
              shadowColor: "#333",
            },
            label: {
              show: true,
              position: "right",
              formatter: (v) => {
                return `${v.data.name} - ${v.data.value[2]}`;
              },
            },
          },
        ],
        bmap: {
          key: "1XjLLEhZhQNUzd93EjU5nOGQ",
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: false,
          mapStyle: {
            styleJson: [
              {
                featureType: "land",
                elementType: "geometry",
                stylers: {
                  color: "#242f3eff",
                },
              },
              {
                featureType: "manmade",
                elementType: "geometry",
                stylers: {
                  color: "#242f3eff",
                },
              },
              {
                featureType: "water",
                elementType: "geometry",
                stylers: {
                  color: "#17263cff",
                },
              },
              {
                featureType: "road",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff",
                },
              },
              {
                featureType: "districtlabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "districtlabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                  weight: 3,
                },
              },
              {
                featureType: "poilabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "poilabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                  weight: 3,
                },
              },
              {
                featureType: "subway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "railway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "poilabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "subwaylabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "subwaylabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "tertiarywaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "tertiarywaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "provincialwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "provincialwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "highwaysign",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "highwaysign",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "green",
                elementType: "geometry",
                stylers: {
                  color: "#263b3eff",
                },
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d0021bff",
                },
              },
              {
                featureType: "nationalwaysign",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#ffffffff",
                },
              },
              {
                featureType: "city",
                elementType: "labels",
                stylers: {
                  visibility: "on",
                },
              },
              {
                featureType: "city",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "city",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "city",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                },
              },
              {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#242f3eff",
                },
              },
              {
                featureType: "local",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff",
                },
              },
              {
                featureType: "local",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff00",
                },
              },
              {
                featureType: "fourlevelway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff",
                },
              },
              {
                featureType: "fourlevelway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff00",
                },
              },
              {
                featureType: "tertiaryway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#38414eff",
                },
              },
              {
                featureType: "tertiaryway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#ffffff00",
                },
              },
              {
                featureType: "tertiaryway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "fourlevelway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "highway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff",
                },
              },
              {
                featureType: "provincialway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "provincialway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff",
                },
              },
              {
                featureType: "tertiaryway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "fourlevelway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "highway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631ff",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#9e7d60ff",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#554631fa",
                },
              },
              {
                featureType: "medicallabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "medicallabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "entertainmentlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "entertainmentlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "estatelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "estatelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "businesstowerlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "businesstowerlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "companylabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "companylabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "governmentlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "governmentlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "restaurantlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "restaurantlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "hotellabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "hotellabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "shoppinglabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "shoppinglabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "lifeservicelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "lifeservicelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "carservicelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "carservicelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "financelabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "financelabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "otherlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "otherlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "airportlabel",
                elementType: "labels",
                stylers: {
                  visibility: "on",
                },
              },
              {
                featureType: "airportlabel",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "airportlabel",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                },
              },
              {
                featureType: "airportlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "highway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "nationalway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "nationalway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "nationalway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "provincialway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8",
                },
              },
              {
                featureType: "provincialway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9",
                },
              },
              {
                featureType: "provincialway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8",
                },
              },
              {
                featureType: "provincialway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9",
                },
              },
              {
                featureType: "provincialway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "8",
                },
              },
              {
                featureType: "provincialway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "8,9",
                  level: "9",
                },
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "cityhighway",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "6",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "7",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "8",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "9",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "6,10",
                  level: "10",
                },
              },
              {
                featureType: "arterial",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9",
                },
              },
              {
                featureType: "arterial",
                stylers: {
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "9",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                  curZoomRegionId: "0",
                  curZoomRegion: "9,10",
                  level: "10",
                },
              },
              {
                featureType: "building",
                elementType: "geometry.topfill",
                stylers: {
                  color: "#2a3341ff",
                },
              },
              {
                featureType: "building",
                elementType: "geometry.sidefill",
                stylers: {
                  color: "#313b4cff",
                },
              },
              {
                featureType: "building",
                elementType: "geometry.stroke",
                stylers: {
                  color: "#1a212eff",
                },
              },
              {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "road",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "provincialway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#759879ff",
                },
              },
              {
                featureType: "provincialway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "cityhighway",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#1a2e1cff",
                },
              },
              {
                featureType: "local",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "manmade",
                elementType: "labels.text.fill",
                stylers: {
                  color: "#d69563ff",
                },
              },
              {
                featureType: "manmade",
                elementType: "labels.text.stroke",
                stylers: {
                  color: "#17263cff",
                },
              },
              {
                featureType: "subwaystation",
                elementType: "geometry",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "transportationlabel",
                elementType: "labels.icon",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "transportationlabel",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "estate",
                elementType: "geometry",
                stylers: {
                  color: "#2a3341ff",
                },
              },
            ],
          },
        },
      };
    },
    converData(data, geo) {
      return data.map((i) => {
        const point = geo[i.name];
        return {
          name: i.name,
          value: [...point, i.value],
        };
      });
    },
  },
  mounted() {},
};
</script>