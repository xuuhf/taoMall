<template>
    <div class="c-content">
        <div class="allGoods">共10件</div>
        <!-- <div class="c-loading">
            <loading />
        </div> -->
        <me-scroll ref="scroll" :scrollbar="true">
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
            <content-single class="content-single"></content-single>
        </me-scroll>
    </div>
</template>

<script>
import MeScroll from '../../components/scroll'
import loading from '../../components/loadings'
import contentSingle from './contentSingle'
export default {
    components: {
        MeScroll,
        loading,
        contentSingle
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
    .c-content {
        width: 95%;
        height: 100%;
    }
    .allGoods {
        height: 30px;
        line-height: 30px;
    }
    .content-single {
        width:100%;
        background-color: #F8F8F8;
        border-radius: 5px;
    }
</style>
