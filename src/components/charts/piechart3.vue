<template>
    <div  style="width: auto;height: 400px" id="main3">
    </div>
</template>
  
<script>
import * as echarts from 'echarts';

export default {
    name: "piechart3",
    props: {
        info: Object,

    },
    data() {
        return {

        }
    },
    mounted() {
        
        setTimeout(() => {
            this.echartsInit()
        }, 1000)


    },
    methods: {
        echartsInit() {

            const option = {

                tooltip: {
                    trigger: 'item'
                },

                legend: {
                    top: '1%',
                    left: 'center'

                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        startAngle: 180,
                        avoidLabelOverlap: false,
                        top: '8%',
                        itemStyle: {
                            borderRadius: 5,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            "normal": {
                                show: false,
                                formatter: "{b}\n{c}",
                                position: 'center',
                                "textStyle": {
                                    "fontSize": 20
                                },

                            }
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: true
                        },
                        data: this.info
                    }
                ]
            }
            const myChart = echarts.init(document.getElementById('main3'))
            myChart.setOption(option);
        }
    }
}
</script>
  
<style scoped></style>
  