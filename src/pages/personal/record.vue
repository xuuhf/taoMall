<template>
    <div class="record">
        <com-header class="comheader">
            <div class="user-header" slot="left">我的消费记录</div>
        </com-header>
        <div class="line-echarts-box">
            <div class="line-title">2019消费记录</div>
            <div class="lineChart" ref="lineChart"></div>
        </div>
        <div class="pie-echarts-box">
            <div class="pie-title">2019消费分布</div>
            <div class="pieChart" ref="pieChart"></div>
        </div>
    </div>
</template>

<script>
import comHeader from '../../components/comHeader'
export default {
    name: 'record',
    components: {
        comHeader
    },
    data() {
        return {
        }
    },
    mounted () {
        this.orderRecord()
        this.payRecord()
    },
    methods: {
        orderRecord () {
            let lineChart = this.$echarts.init(this.$refs.lineChart)
            let option = ({
                xAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
                    type: 'line'
                }]
            })
            lineChart.setOption(option)
        },
        payRecord () {
            let pieChart = this.$echarts.init(this.$refs.pieChart)
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['服饰美容','吃喝玩乐','充值缴费','出行','搜索引擎']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'服饰美容'},
                            {value:310, name:'吃喝玩乐'},
                            {value:234, name:'充值缴费'},
                            {value:135, name:'出行'},
                            {value:1548, name:'搜索引擎'}
                        ]
                    }
                ]
            }
            pieChart.setOption(option)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.record {
    width: 100%;
    display: flex;
    flex-direction: column;
    @include flex-aronud();
}
.comheader {
    height: 40px;
    border-bottom: 1px solid #e5e5e5;
}
.pie-echarts-box,
.line-echarts-box {
    width: 95%;
    height: 200px;
    background-color: #fff;
    border-radius: 5px;
    @include flex-aronud();
    flex-direction: column;
    margin-bottom: 10px;
}
.pie-title,
.line-title {
    width: 95%;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    margin: 0 auto;
}
.pieChart,
.lineChart {
    width: 95%;
    height: 190px;
    margin: 0 auto;
    @include flex-aronud();
}
// .pie-echarts-box {

// }
</style>
