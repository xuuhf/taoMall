<template>
    <com-header class="cartheader">
        <div class="header-left" slot="left">
            购物车
        </div>
        <div class="header-right" slot="right">
            管理
        </div>
    </com-header>
</template>

<script>
import comHeader from '../../components/comHeader'
export default {
    components: {
        comHeader
    }
}
</script>

<style lang="scss" scoped>
    .cartheader {
        // border-bottom: 1px solid #eee;
    }
    .header-left {
        font-size: 20px;
    }
    .header-right {
        font-size: 15px;
    }
</style>
