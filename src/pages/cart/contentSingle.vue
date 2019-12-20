<template>
    <div class="c-content-single">
        <com-header class="storeInfo">
            <div slot="left">
                <div class="myradio"></div>
            </div>
            <div slot="center">
                <i class="iconfont iconmessage"/>
                <span>天猫国际</span>
                <i class="iconfont iconmessage"/>
            </div>
            <div slot="right">333</div>
        </com-header>
        <div class="goodsInfo">
            <div class="left-radio">
                <div class="goodsRadio"></div>
            </div>
            <div class="center-img">
                <img src=""/>
            </div>
            <div class="right-desc">
                <p class="goodsDesc">呜呜呜呜呜呜呜呜无无无无错错错错错错错啛啛喳喳错多多</p>
                <p class="goodSize">均码</p>
                <div class="goodsPrice">
                    <span class="price">￥111</span>
                    <!-- <div>111</div> -->
                </div>
            </div>
        </div>
    </div>
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
@import "../../assets/scss/mixin";
    .c-content-single {
        margin-bottom: 10px;
    }
    .goodsRadio,
    .myradio {
        width: 17px;
        height: 17px;
        border: 1px solid #eee;
        border-radius: 50%;
        outline: none;
    }
    .storeInfo {
        height: 30px;
        margin-bottom: 10px;
    }
    .goodsInfo {
        width: 95%;
        margin: 0 auto;
        display: flex;
    }
    .left-radio {
    }
    .center-img {
        width: 80px;
        height: 80px;
        border: 1px solid pink;
        margin-left: 20px;
    }
    .right-desc {
        margin-left: 20px;
        width: 58%;
    }
    .goodsDesc {
        @include multiline-ellipsis()
    }
    .goodSize {
        margin-top: 10px;
        width: 30px;
        height: 20px;
        font-size: 12px;
        background-color: #eee;
        text-align: center;
        line-height: 20px;
    }
    .goodsPrice {
        margin-top: 20px;
    }
    .price {
        color: red;
        font-size: 12px;
    }
</style>
