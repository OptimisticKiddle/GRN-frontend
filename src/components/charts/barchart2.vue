<template>
  <div class="echart" id="mychart2" :style="myChartStyle"></div>
</template>
  
<script>
import * as echarts from "echarts";

export default {
  name: "barchart2",
  props: {
    info: Object,

  },
  data() {
    return {

      myChartStyle: { width: "100%", height: "400px" } //图表样式
    };
  },
  computed: {
    xData() {
      return Object.keys(this.info)
    },
    yData() {
      return Object.values(this.info)
    }

  },
  mounted() {
    setTimeout(() => {
      this.initEcharts();
    }, 1000)

  },
  methods: {
    initEcharts() {
      // console.log(this.info);
      // console.log(this.xData);
      // console.log(this.yData);
      // 基本柱状图
      const option = {
        /* title: {
          text: 'Distribution of diff peaks on chromosomes'
        }, */
        xAxis: {
          axisLabel: {
            interval: 0,//代表显示所有x轴标签显示
            rotate: 60, // 角度值：Number
            fontSize: 11, // 顺便调小一点字体大小
          },
          data: this.xData
        },
        yAxis: {},
        series: [
          {
            type: "bar", //形状为柱状图
            data: this.yData,
            itemStyle: {
              normal: {
                // 设置bar颜色
                color: '#61a0a8',
              }
            }

          }
        ],
        tooltip: { // 鼠标悬浮提示框显示 X和Y 轴数据
          trigger: 'axis',
          backgroundColor: 'rgba(32, 33, 36,.7)',
          borderColor: 'rgba(32, 33, 36,0.20)',
          borderWidth: 1,
          textStyle: { // 文字提示样式
            color: '#fff',
            fontSize: '12'
          },

        }
      };
      const myChart = echarts.init(document.getElementById("mychart2"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>
  
  