<template>
    <div class="scrollTest">
        <vue-scroll>
            <div class="content">是测试啊</div>
        </vue-scroll>
    </div>
</template>

<script>
export default {
    name: 'scrollTest',
    data () {
        return {
            bar: {
                background: '#fff',
            },
            mode: 'slide',
            sizeStrategy: 'number',
            detectResize: true,
            rail: {
                background: '#01a99a',
                opacity: 0,
                size: '6px',
                specifyBorderRadius: false,
                gutterOfEnds: null,
                gutterOfSide: '2px',
                keepShow: false
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.scrollTest {
    width: 100%;
    height: 100px;
    .content {
        width: 100%;
        height: 200px;
        background-color: red;
    }
}

</style>
