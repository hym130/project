<template>
    <div class="canvas_map">
        地图坐标
        <div id='map_canvas'>
        </div>
    </div>
</template>

<script>
import china from "../../static/china.js";
export default {
  name: "map",
  data() {
    return {};
  },
  mounted() {
    this.initEchart();
  },
  methods: {
    initEchart() {
      let mychartMap = this.$echarts.init(
        document.getElementById("map_canvas")
      );
      var myData = [
        { name: "江苏分店", value: [121.15, 31.89, 90] },
        { name: "内蒙古分店", value: [109.781327, 39.608266, 120] },
        { name: "山东分店", value: [120.38, 37.35, 142] },
        { name: "湖北分店", value: [122.207216, 29.985295, 123] },
        { name: "浙江分店", value: [110.245672, 30.7787677, 566] },
        { name: "馆陶", value: [115.30014627249147, 36.54051948188943] }
          
      ];
      mychartMap.setOption({
        // 新建一个地理坐标系 geo ，
        geo: {
          map: "china", //地图类型为中国地图,要是世界那就是world,要是省市区：例如beijing、shanghai
          itemStyle: {
            // 定义样式
            normal: {
              // 普通状态下的样式
              areaColor: "#CCC",
              borderColor: "#fff"
            },
            emphasis: {
              // 高亮状态下的样式
              areaColor: "#cfc"
            }
          }
        },
        // hover显示目标数据
        tooltip: {
          trigger: "item",
          // tooltip的trigger的值可以有'item'、'axis'。
          //'item':数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
          //'axis':坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
          textStyle: {
            align: "left"
          }
        },
        // 图表背景色
        backgroundColor: "#ddd",
        // 标志颜色
        color: "red",
        // 新建散点图series
        series: [
          {
            name: "", //series名称
            type: "scatter", //为散点类型
            coordinateSystem: "geo", // series坐标系类型
            data: myData,
            symbol: "pin",
            symbolSize: [20, 20]
          }
        ],

        // 添加视觉映射组件
        visualMap: {
          type: "continuous", // 连续型
          min: 0, // 值域最小值，必须参数
          max: 600, // 值域最大值，必须参数
          calculable: true, // 是否启用值域漫游
          inRange: {
            color: ["red"]
            // 指定数值从低到高时的颜色变化
          },
          textStyle: {
            color: "#fff" // 值域控件的文本颜色
          }
        }
      });
    }
  }
};
</script>

<style>
.canvas_map {
  width: 100%;
  height: 100%;
}
#map_canvas {
  width: 1240px;
  height: 400px;
  background: #cfc;
}
#map_canvas>canvas{
    width:100%;
}
</style>
