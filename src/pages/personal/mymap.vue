<template>
    <div class="hello" id="container">
    </div>
</template>
<script>
// import BMap from 'BMap'
export default {
    name: 'HelloWorld',
    data() {
        return {
            mapArr: {
                lat: 0,
                lng: 0,
            },
        }
    },
    props: ['ipAll'],
    mounted() {
        this.getWd()
    },
    methods: {
        getWd () {
            let map = new BMap.Map('container')
            map.centerAndZoom(new BMap.Point(116.280190, 40.049191), 19);
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.setHeading(64.5);   //设置地图旋转角度
        }
    },
    comments: {
    // BaiduMap
    }
}
</script>

<style scoped>
.hello {
    width: 100%;
    height: 100%;
}
</style>
