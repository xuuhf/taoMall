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
                    <span class="goods-li" @click="gotoScroll">我的订单mescroll</span>
                    <div>
                        <span class="goods-li" @click="myorder">全部订单</span>
                        <i class="iconfont iconyoujiantou"/>
                    </div>
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
           <div class="order-history-box" @click="gotoRecord">
               <div class="order-history">
                   <span>我的消费记录</span>
                   <i class="iconfont iconyoujiantou"/>
                </div>
           </div>
           <div class="order-history-box" @click="gotoMap">
               <div class="order-history">
                   <span>我的地图</span>
                   <i class="iconfont iconyoujiantou"/>
                </div>
           </div>
           <div class="order-history-box" @click="gotoVideo">
               <div class="order-history">
                   <span>视频播放</span>
                   <i class="iconfont iconyoujiantou"/>
                </div>
           </div>
           <div class="order-history-box" @click="gotoVideo2">
               <div class="order-history">
                   <span>视频播放2</span>
                   <i class="iconfont iconyoujiantou"/>
                </div>
           </div>
            <div class="order-history-box_">
               <div class="order-history">
                   <span>复制</span>
                   <div class="text" >
                       <div class="copy">
                            <input id="num" type="text" v-model="mynum">
                            <button
                                type="button"
                                class="btn"
                                @click="onCopy">
                                复制
                            </button>
                        </div>
                        <div class="cutcopy">
                            <input id="cutnum" type="text" v-model="message">
                            <button
                                type="button"
                                class="btn"
                                data-clipboard-action="cut"
                                data-clipboard-target="#cutnum"
                                @click="cutcopy">
                                剪切复制
                            </button>
                        </div>
                        <div class="copyformattribute">
                            <button
                                type="button"
                                class="btn"
                                data-clipboard-text="从属性复制文本"
                                @click="cutcopy">
                                从属性复制文本
                            </button>
                        </div>
                   </div>
                </div>
           </div>
       </div>
    </div>
</template>

<script>
// import Clipboard from 'clipboard'
import personHeader from './header'
export default {
    name: 'personal',
    components: {
        personHeader
    },
    data() {
        return {
          msg: 'personal',
          orderId: '123456789',
          mynum: '',
          message: '333333333'
        }
    },
    methods: {
        gotoScroll () {
            this.$router.push('./mescrollOrder')
        },
        myorder () {
            this.$router.push('./order')
        },
        weekHistory () {
        },
        gotoRecord () {
            this.$router.push('./record')
        },
        gotoMap () {
            this.$router.push('./mymap')
        },
        onCopy (){
            this.$copyText(this.mynum).then((e) => {
                    console.log(e)
                })
        },
        handleCopy () {
            if (this.mynum) {
                 console.log('复制成功')
                // this.$copyText(this.mynum).then((e) => {
                //     console.log(e)
                // })
                // console.log(this.mynum)
                // let clipboard = new Clipboard('.btn')
                // clipboard.on('success', (e) => {
                //     console.log('复制成功')
                // })
                // clipboard.on('error', (e) => {
                //     console.log('该浏览器不支持自动复制')
                // })
            }
        },
        onError: function (e) {
            alert('Failed to copy texts')
        },
        cutcopy () {
            let clipboard = new ClipboardJS('.btn')
            clipboard.on('success', (e) => {
                console.log('复制成功')
            })
            clipboard.on('error', (e) => {
                console.log('该浏览器不支持自动复制')
            })
        },
        gotoVideo () {
            this.$router.push('./myVideo')
        },
        gotoVideo2 () {
            this.$router.push('./myVideo2')
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
.order-history-box_ {
    width: 95%;
    height: 200px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
}
.text {
    width: 90%;
    height: 200px;
    @include flex-between();
    flex-wrap: wrap;
}
#num {
    border: 1px solid red;
    height: 30px;
}
#cutnum {
    border: 1px solid red;
    height: 30px;
}
.btn {
    width: 80px;
    height: 30px;
}
</style>
