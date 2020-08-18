<template>
    <div class="pay g-fs-14 g-relative">
        <div class="container">
            <closeHeader title="订单支付" @close="handleClose"/>
            <div class="cell">
                <span class="g-c-999 g-m-r-5">订单金额：</span>
                <span class="g-weight-bold price">¥ {{price}}</span>
            </div>
            <div class="cell">
                <span class="g-c-999 g-m-r-5">商品名称：</span>
                <span class="g-c-999 g-tr">{{desc | trimStr}}</span>
            </div>
            <div class="cell">
                <span class="g-c-999 g-m-r-5">支付方式：</span>
            </div>
            <van-radio-group v-model="currentPayWay">
                <van-cell-group class="payWay">
                    <van-cell
                        style="line-height: 2.1"
                        v-for="item in payWayArr"
                        :key="item.payWay"
                        clickable
                        @click="setPayaId(item)">
                             <img
                                slot="icon"
                                style="display: inline-block; height: 30px;width: auto"
                                :src='item.payWay === 3 ? brandInfo.brandCoinLogo : item.payWay === 1 ? zfbicon: weixinicon'
                                class="coin"
                            />
                        <van-radio :name="item.payWay" checked-color="#F67B29" />
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
            <p class="coinDesc">{{brandInfo.brandCoinName}}剩余{{catPointInfo.catPoint}}={{catPointInfo.catPointAmount}}元</p>
            <button-active
                classes="g-width buttom"
                :text="`立即支付${price}元`"
                :active-text="`立即支付${price}元`"
                :condition="selected"
                :autosize="true"
                @activeClick="handlePay"
            />
        </div>

        <!-- 实名认证提示弹窗 -->
        <van-dialog
            v-model="realNameShow"
            :title="null"
            :showConfirmButton = 'false'>
            <div class="realNameShowTitle">
                实名认证
                <span v-if="hasSkip" class="acSpan" @click="realNameShow = false">下次再说</span>
            </div>
            <div class="tips">
                <p class="marbot">根据国家未成年保护新规</p>
                <p>请您完善以下实名信息</p>
            </div>
            <div class="antiAddictionContent">
                <cell-input
                    className="account"
                    type="text"
                    :maxlength="20"
                    placeholder="请输入姓名"
                    v-model="userInfo.realName"
                    @change="delnameSpace"
                />
                <cell-input
                    className="IDCard"
                    type="text"
                    :maxlength="18"
                    placeholder="请输入身份证"
                    v-model="userInfo.idCard"
                    @change="delSpace"
                />
                <button-active
                    classes="g-width g-m-t-15"
                    text="确认并提交"
                    active-text="确认并提交"
                    :condition="!!userInfo.realName && !!userInfo.idCard"
                    :autosize="true"
                    @activeClick="handleUnBind"
                />
                <p class="footer_tips">实名认证信息将作为防沉迷凭证，认证成功后不可修改</p>
            </div>
        </van-dialog>
        <!-- 游戏防沉迷提示-->
         <!-- 游戏防沉迷提示-->
        <van-dialog
            v-model="preventGuideSwitchShow"
            :title="null"
            :showConfirmButton = 'false'>
            <div class="realNameShowTitle">
                {{dialogMessage.msgTitle}}
            </div>
            <div class="content_dialog11">
                <div class="content" v-html="dialogMessage.msgContent"></div>
                <span class="actBtn" style="margin-bottom: 9px;" @click="IKnowThis">
                    {{dialogMessage.buttonContent}}
                </span>
                <p class="content g-m-b-15" v-html="dialogMessage.buttonGuidance" />
            </div>
        </van-dialog>
        <!-- 游戏防沉迷提示-->
        <!-- 确认支付 -->
        <confirm-payment v-if="isShowConfirmPayment" :baseInfo="baseInfo"/>
    </div>
</template>

<script>
import { Radio, RadioGroup, Cell, CellGroup, Dialog } from 'vant'
export default {
    name: 'payContent',
    components: {
        [Dialog.Component.name]: Dialog.Component,
        vanRadio: Radio,
        vanRadioGroup: RadioGroup,
        vanCell: Cell,
        vanCellGroup: CellGroup
    },
    props: {
        price: {
            type: [String, Number],
            default: ''
        },
        desc: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            zfbicon: require('../../../assets/images/imgs/zfb.png'),
            weixinicon: require('../../../assets/images/imgs/weixin.png'),
            currentPayWay: 1,
            payWayArr: [],
            showPay: true,
            hasSkip: false,
            userInfo: {},
            realNameShow: false,
            preventGuideSwitchShow: false,
            dialogMessage: {},
            brandInfo: {},
            catPointInfo: {},
            canPay: false,
            orderType: 2,
            selected: true,
            isShowConfirmPayment: false, // 是否弹出确认支付
            baseInfo: {} // 传入确认支付框的参数
        }
    },
    created () {
        if (window.RuntimeEnvironment === 'pc') {
            this.showPay = false
        } else {
            this.showPay = true
        }
        this.brandInfo = JSON.parse(localStorage[`brandInfo${localStorage.fullPath}`])
        this.getPayType()
    },
    methods: {
        // 防沉迷确认按钮
        IKnowThis () {
            this.preventGuideSwitchShow = false
        },
        // 禁止输入空格
        delSpace () {
            this.userInfo.idCard = this.userInfo.idCard.replace(/\s+/g, '')
        },
        delnameSpace () {
            this.userInfo.realName = this.userInfo.realName.replace(/\s+/g, '')
        },
        // 实名认证弹窗
        handleUnBind () {
            // 校验名字  身份证
            let reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
            let regCard = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/
            let taiwanreg = /^[A-Z][0-9]{9}$/
            let xianggangreg = /^[A-Z][0-9]{6}[0−9A]$/
            let aomenreg = /^[157][0-9]{6}[0−9]$/
            if (!reg.test(this.userInfo.realName.trim())) {
                this.$toast('姓名不正确')
                return false
            }
            if (!(regCard.test(this.userInfo.idCard.trim()) || taiwanreg.test(this.userInfo.idCard.trim()) || xianggangreg.test(this.userInfo.idCard.trim()) || aomenreg.test(this.userInfo.idCard.trim()))) {
                this.$toast('身份证号码格式不正确')
                return false
            }
            this.$apis.idCardRealNameAuth(this.userInfo).then(res => {
                if (res.code === '000') {
                    if (res.data.showCustomerService) {
                        this.$router.push({
                            name: 'ConfirmCertification',
                            query: { form: 'pay' }
                        })
                        return
                    }
                    if (res.data.isCert) { // 是否认证成功，是否已实名
                        this.$toast(res.data.message || res.message)
                        this.realNameShow = false
                    } else {
                        let message
                        if (res.data.times) {
                            message = `实名认证失败<br/>剩余 <span style="color:#0997F7">${res.data.times}</span> 次认证机会`
                        } else if (res.data.times === 0 || res.data.times === '0') {
                            message = '实名认证失败<br/>今日实名认证次数已用完'
                        } else {
                            message = res.data.message || res.message
                        }
                        this.$playToast({ message })
                    }
                }
            })
        },
        // 支付方式
        setPayaId (payInfo) {
            this.currentPayWay = payInfo.payWay
            localStorage.payWay = payInfo.payWay
            localStorage.payApiId = payInfo.payApiId
        },
        // 关闭订单支付框
        handleClose () {
            sessionStorage.removeItem('coinInfo')
            let sendWin = document.getElementById('gameFrame').contentWindow
            let messageObj = {}
            messageObj.data = {
                state: 2,
                message: '取消订单'
            }
            messageObj.action = 'pay:callback'
            sendWin.postMessage(messageObj, '*')
            this.$router.replace('/home')
        },
        // 检查用户消费限额
        async checkUserConsumeLimit () {
            let orderInfo = sessionStorage.coinInfo ? JSON.parse(sessionStorage.coinInfo) : JSON.parse(sessionStorage.orderInfo)
            let res = this.$apis.checkUserConsumeLimit({
                goodsType: this.orderType,
                payPrice: orderInfo.amount
            })
            return res
        },
        // 立即支付
        async handlePay () {
            this.selected = false
            setTimeout(() => {
                this.selected = true
            }, 1500)
            if (this.currentPayWay === 3) { // 喵点支付
                let orderInfo = sessionStorage.orderInfo ? JSON.parse(sessionStorage.orderInfo) : {}
                let whiteGame = true
                let shangMiao = ''
                if (whiteGame) { // 白名单游戏
                    if (shangMiao * 1 > orderInfo.amount * 1 || // 商家喵点是否充足 or 商不足，个人+商家是否充足
                    (this.catPointInfo.catPointAmount * 1 + shangMiao * 1) > orderInfo.amount * 1) {
                        this.coinPay(orderInfo)
                        return
                    }
                    this.$toast('账户余额不足')
                    return
                } else { // 不是白名单，判断个人
                    if (this.catPointInfo.catPointAmount * 1 > orderInfo.amount * 1) {
                        this.coinPay(orderInfo)
                        return
                    }
                    this.$toast('账户余额不足')
                    return
                }
                // if (orderInfo.amount * 1 > this.catPointInfo.catPointAmount * 1) {
                //     this.$toast('账户余额不足')
                //     return
                // }
                // this.coinPay(orderInfo)
                // return
            }
            let { code, data = {} } = await this.checkUserConsumeLimit()
            if (code !== '000') {
                if (data.hasIdentity) {
                    this.preventGuideSwitchShow = true
                    this.dialogMessage = {
                        msgTitle: data.msgTitle || '标题',
                        msgContent: data.msgContent || '主体',
                        buttonContent: data.buttonContent || '我知道了'
                    }
                } else {
                    this.realNameShow = true // 进行实名认证
                    this.hasSkip = data.hasSkip
                }
                return
            }
            sessionStorage.ispay = 1
            if (this.currentPayWay === 2) { // 微信支付
                if (window.RuntimeEnvironment === 'weixin') {
                    this.isShowConfirmPayment = true // 确认支付
                    window.location.href = (`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${window.wxpayappid}&redirect_uri=${window.redirecturi}&response_type=code&scope=snsapi_base&state=123#wechat_redirect&self_redirect=true`)
                } else {
                    this.$router.replace('/jump')
                }
            } else { // 支付宝支付
                this.$router.replace('/jump')
            }
        },
        coinPay (orderInfo) {
            let sign = `cpOrderId=${orderInfo.cpOrderId}&amount=${orderInfo.amount}&payApiId=${localStorage.payApiId}&gameId=${localStorage[`GameId${localStorage.fullPath}`]}&roleId=${orderInfo.roleId}&secretKey=${localStorage[`secretKey${localStorage.fullPath}`]}`
            sign = this.$CalcuMD5(sign)
            this.$apis.createOrder({
                payApiId: localStorage.payApiId,
                cpId: localStorage[`cpId${localStorage.fullPath}`],
                cpOrderId: orderInfo.cpOrderId,
                amount: orderInfo.amount,
                goodsDesc: orderInfo.goodsDesc,
                notifyUrl: orderInfo.notifyUrl,
                roleId: orderInfo.roleId,
                roleName: orderInfo.roleName,
                roleServerName: orderInfo.roleServerName,
                roleServerId: orderInfo.roleServerId,
                extras: orderInfo.extras,
                roleGrade: orderInfo.roleGrade,
                sign: sign
            }).then(res => {
                if (res.code === '000') {
                    if (res.data && res.data.orderId) {
                        sessionStorage.orderId = res.data.orderId
                        this.baseInfo.orderId = res.data.orderId
                    }
                    // 热云统计创建订单数据
                    if (window.TrackingIO !== null) {
                        window.TrackingIO.order(res.data.orderId)
                    }
                    this.isShowConfirmPayment = true // 确认支付
                    this.$apis.catPointPay({ // 喵点支付
                        orderId: res.data.orderId,
                        payApiId: localStorage.payApiId
                    })
                }
            })
        },
        // 获取支付方式
        getPayType () {
            if (sessionStorage.coinInfo === undefined) {
                this.orderType = 2
            } else {
                this.orderType = 1
            }

            let scene = ''
            if (window.RuntimeEnvironment === 'weixin') {
                scene = 3
            } else if (window.RuntimeEnvironment === 'pc') {
                scene = 1
            } else {
                scene = 2
            }
            this.$apis.getPayInfo({
                platform: localStorage[`platform${localStorage.fullPath}`],
                orderPrice: this.price,
                scene: scene,
                orderType: this.orderType
            }).then(res => {
                if (res.code === '000' && res.data) {
                    this.payWayArr = res.data.payApiInfos
                    this.catPointInfo = res.data.catPointInfo
                    this.currentPayWay = 1
                    localStorage.payWay = 1
                    let arr = this.payWayArr.filter((item) => {
                        return item.payWay === 1
                    })
                    localStorage.payApiId = arr[0].payApiId
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.pay {
    position: absolute;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(0,0,0, 0.6);
    .container {
        position: relative;
        width: 319px;
        max-height: 385px;
        background: rgba(255,255,255,0.94);
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 15px;
    }
    .cell {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
    .price {
        font-size: 23px;
    }
    .buttom {
       margin-bottom: 4px;
    }
}
.antiAddictionContent{
    padding:0 25px;
}
.realNameShowTitle{
    width: 100%;
    height: 44px;
    font-size: 16px;
    color: #333333;
    line-height: 44px;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #E6E6E6;
    position: relative;
}
.acSpan{
    font-size: 12px;
    color: #F67B29;
    letter-spacing: 0;
    text-align: right;
    line-height: 12px;
    font-weight: 400;
    position: absolute;
    right: 25px;
    top: 16px;
}
.tips{
    font-size: 14px;
    color: #333;
    letter-spacing: 0;
    line-height: 14px;
    margin-bottom: 10px;
    text-align: center;
}
.marbot {
    margin-bottom: 5px;
}
.footer_tips{
    font-size: 12px;
    color: #333;
    letter-spacing: 0;
    line-height: 12px;
    text-align: center;
    margin-top: 3px;
    margin-bottom: 25px;
}
.content_dialog11{
    padding: 0 25px;
    text-align: center;
    .content{
        text-align: left;
        color: #333;
        P{
            margin-bottom: 5px;
            &:nth-of-type(1){
                strong{
                    font-size: 14px;
                    color: #333333;
                    line-height: 14px;
                }
            }
            &:nth-of-type(2){
                font-size: 14px;
                color: #333333;
                line-height: 20px;
            }
             &:nth-of-type(3){
                font-size: 14px;
                color: #333333;
                line-height: 14px;
            }
        }
    }
    .endTime{
        font-size: 24px;
        color: #17181D;
        line-height: 30px;
    }
    .tips{
        font-size: 14px;
        color: #666666;
        line-height: 20px;
        margin: 10px 0;
        text-align: left;
    }
    .actBtn{
        display: inline-block;
        width: 80%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        background-color: #F67B29;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 18px;
    }
}
.coinDesc{
    text-align: center;
    font-size: 14px;
    color: #999;
    line-height: 28px;
}
</style>
