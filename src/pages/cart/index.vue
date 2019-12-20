<template>
    <div class="cart">
        <div class="c-header">
            <cart-header/>
        </div>
        <div class="c-content-container">
            <div class="allGoods">共10件</div>
            <!-- <div class="c-loading">
                <loading />
            </div> -->
            <me-scroll :scrollbar="true">
                <content-single class="content-single" :allChecked="allChecked"></content-single>
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
        <div class="c-foot">
            <div class="footRadio">
                <div class="all-radio"
                :style="!allChecked ? {'background-color': '#fff'} : {'background-color': 'pink'}"
                @click="singleChecked"/>
                <span>全选</span>
            </div>
            <div class="allMoney">
                <span>总计</span>
                <span class="theMoney">￥11111</span>
            </div>
            <button class="pay">
                结算
            </button>
        </div>
    </div>
</template>

<script>
import cartHeader from './header'
// import cartContent from './content'
import MeScroll from '../../components/scroll'
import loading from '../../components/loadings'
import contentSingle from './contentSingle'
export default {
    name: 'cart',
    components: {
        cartHeader,
        MeScroll,
        loading,
        contentSingle
    },
    data() {
        return {
           msg: 'cart',
           allChecked: false
        }
    },
    methods: {
        singleChecked () {
            if (this.allChecked) {
                this.allChecked = false
            } else {
                this.allChecked = true
            }
            console.log(this.allChecked, '99999')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
    .cart {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .c-header {
        height: 40px;
    }
    .c-content-container {
        height: 93%;
        width: 95%;
        margin: 0 auto;
    }
    .allGoods {
        height: 30px;
        line-height: 30px;
    }
    .swiper-container {
        height: 95%;
    }
    .content-single {
        width:100%;
        background-color: #F8F8F8;
        border-radius: 5px;
    }
    .c-foot {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 40px;
        background-color: #F8F8F8;
        display: flex;
        align-items: center;
        z-index: 1900;
    }
    .footRadio {
        display: flex;
        margin-left: 10px;
    }
    .all-radio {
        -webkit-appearance: none;
        width: 17px;
        height: 17px;
        padding: 0;
        background-color: #fff;
        border: 1px solid #c9c9c9;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
    }
    .allMoney {
        margin-left: 40%;
        @include flex-center();
    }
    .theMoney {
        margin-left: 5px;
        color: orangered;
        font-size: 10px;
    }
    .pay {
        width: 59px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 20px;
        background-color: orangered;
        margin-left: 10px;
        color: #fff;
    }
</style>
