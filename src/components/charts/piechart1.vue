<template>
    <div  style="width: auto;height: 400px" id="main1">
    </div>
</template>
  
<script>
import echarts from 'echarts'

export default {
    name: "piechart1",
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
                        avoidLabelOverlap: false,
                        top: '8%',
                        itemStyle: {
                            borderRadius: 10,
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
            const myChart = echarts.init(document.getElementById('main1'))
            myChart.setOption(option);
        }
    }
}
</script>
  
<style scoped></style>
  