<template>
    <div>
       <div class="p-header-container">
           <person-header/>
       </div>
       <div class="p-content-container">
           <div class="content-nav">
               <ul class="nav-single">
                   <li class="content-nav-li">
                        <span>11</span><span>收藏夹</span>
                   </li>
                   <li class="content-nav-li">
                        <span>11</span><span>收藏夹</span>
                   </li>
                   <li class="content-nav-li">
                        <span>11</span><span>收藏夹</span>
                   </li>
                   <li class="content-nav-li">
                        <span>11</span><span>收藏夹</span>
                   </li>
               </ul>
           </div>
           <div class="content-order">
               <div class="my-order">
                   <span class="goods-li">我的订单</span>
                   <span class="goods-li">全部订单</span>
               </div>
                <ul class="order-box">
                    <li class="waitPay">
                        <i class="ifontcon">111图</i><span>待付款</span>
                    </li>
                    <li class="waitPay">
                        <i class="ifontcon">111图</i><span>待付款</span>
                    </li>
                    <li class="waitPay">
                        <i class="ifontcon">111图</i><span>待付款</span>
                    </li>
                    <li class="waitPay">
                        <i class="ifontcon">111图</i><span>待付款</span>
                    </li>
                </ul>
           </div>
           <div class="order-history-box">
               <div class="order-history">
                   <span>我的消费记录</span>
                   <i class="iconfont iconyoujiantou"/>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
import personHeader from './header'
export default {
    name: 'personal',
    components: {
        personHeader
    },
    data() {
        return {
          msg: 'personal'
        }
    },
    methods: {
        weekHistory () {
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.p-header-container {
    height: 60px;
}
.p-content-container {
    width: 100%;
}
.content-nav {
    height: 50px;
    width: 100%;
}
.nav-single {
    width: 100%;
    height: 100%;
    @include flex-aronud();
    display: flex;
}
.content-nav-li {
    display: flex;
    @include flex-between();
    flex-direction: column;
}
.content-order {
    width: 95%;
    height: 100px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
}
.my-order {
    width: 95%;
    height: 30px;
    @include flex-between();
    margin: 0 auto;
    font-size: 13px;
    border-bottom: 1px solid #e5e5e5;
}
.order-box {
    width: 100%;
    height: 70px;
    @include flex-aronud();
}
.order-box li {
    display: flex;
    flex-direction: column;
}
.order-history-box {
    width: 95%;
    height: 40px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
}
.order-history {
    width: 95%;
    height: 100%;
    @include flex-between();
    margin: 0 auto;
    font-size: 13px;
}
</style>
