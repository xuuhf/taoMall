<template>
    <div class="record">
        <com-header class="comheader">
            <div class="user-header" slot="left">我的消费记录</div>
        </com-header>
        <div class="echarts-box">
            <div class="pieChart" ref="pieChart"></div>
        </div>
    </div>
</template>

<script>
import comHeader from '../../components/comHeader'
// let echarts = require('echarts/lib/chart/pie')
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
            let pieChart = this.$echarts.init(this.$refs.pieChart)
            let option = ({
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            })
            pieChart.setOption(option)
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
.pieChart {
    width: 95%;
    height: 190px;
    margin: 0 auto;
    @include flex-aronud();
}
</style>
