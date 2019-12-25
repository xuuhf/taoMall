<template>
    <div class="record">
        <com-header class="comheader">
            <div class="user-header" slot="left">我的消费记录</div>
        </com-header>
        <div class="echarts-box">
            <div class="lineChart" ref="lineChart"></div>
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
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.comheader {
    height: 40px;
    border-bottom: 1px solid #e5e5e5;
}
.echarts-box {
    width: 95%;
    height: 200px;
    background-color: #fff;
    border-radius: 5px;
    @include flex-aronud();
    margin: 0 auto;
}
.lineChart {
    width: 95%;
    height: 190px;
    margin: 0 auto;
    @include flex-aronud();
}
.pie-echarts-box {

}
</style>
