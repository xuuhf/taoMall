<template>
    <div class="record">
        <com-header class="comheader">
            <div class="user-header" slot="left">我的</div>
        </com-header>
        <div class="line-echarts-box">
            <div class="lineChart" ref="lineChart"></div>
        </div>
        <div class="pie-echarts-box">
            <div class="pieChart" ref="pieChart"></div>
        </div>
    </div>
</template>

<script>
// // 引入 ECharts 主模块
// var echarts = require('echarts/lib/echarts');
// // 引入柱状图
// require('echarts/lib/chart/line');
// require('echarts/lib/chart/pie');
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
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
            // let lineChart = echarts.init(this.$refs.lineChart)
            let lineChart = this.$echarts.init(this.$refs.lineChart)
            let option = ({
                title: { // 标题
                    show: true,
                    text: '折线图示例',
                },
                legend: { // 图例组件
                    data: ['示例1', '示例2'] // 等于系列series的name值，
                },
                grid: { // 直角坐标系的绘图网格
                    show: true
                },
                xAxis: { // 直角坐标系 grid 中的 x 轴
                    type: 'category', // 坐标轴类型。
                    // data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月', '九月', '十月', '十一月', '十二月']
                },
                yAxis: { // 直角坐标系 grid 中的 y 轴
                    type: 'value'
                },
                tooltip: { // 提示框组件
                    trigger: 'axis',
                    triggerOn: 'mousemove|click'
                },
                toolbox: { // 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataset: { // 数据集ECharts 4 开始支持了 数据集（dataset）组件用于单独的数据集声明，
                    dimensions: ['month', '示例1', '示例2'],
                    source: [
                        {month: '一月','示例1': 820, '示例2': 920},
                        {month: '二月','示例1': 920, '示例2': 820},
                        {month: '三月','示例1': 620, '示例2': 620},
                        {month: '四月','示例1': 1020, '示例2': 920},
                        {month: '五月','示例1': 520, '示例2': 520},
                        {month: '六月','示例1': 720, '示例2': 1120}
                    ]
                },
                series: [{ // 系列列表。每个系列通过 type 决定自己的图表类型
                    name: '示例1',
                    // data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 1901, 1934, 1290],
                    type: 'line'
                },
                { // 系列列表。每个系列通过 type 决定自己的图表类型
                    name: '示例2',
                    // data: [520, 732, 901, 834, 1290, 933, 832, 820, 932, 901, 834, 690],
                    type: 'line'
                }]
            })
            lineChart.setOption(option)
        },
        payRecord () {
            let pieChart = this.$echarts.init(this.$refs.pieChart)
            let option = {
                title: {
                    show: true,
                    text: '饼图示例',
                    textStyle: {
                        color: '#333'
                    },
                    subtext: '副标题'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                    triggerOn: 'mousemove|click'
                },
                legend: {
                    orient: 'vertical',
                    top: '15%',
                    x: 'left',
                    data:['服饰美容','吃喝玩乐','充值缴费','出行','工作学习']
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        // radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
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
                                show: true
                            }
                        },
                        data:[
                            {value:335, name:'服饰美容'},
                            {value:310, name:'吃喝玩乐'},
                            {value:234, name:'充值缴费'},
                            {value:135, name:'出行'},
                            {value:1548, name:'工作学习'}
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
    height: 400px;
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
    height: 390px;
    margin: 0 auto;
    @include flex-aronud();
}
// .pie-echarts-box {

// }
</style>
