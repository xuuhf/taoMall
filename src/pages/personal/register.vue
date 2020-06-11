<!--  <template>
  <div class="login">
      <div class="container">
        <cell-input
            className='mobile'
            v-model="params.mobile"
            :maxlength='11'
            placeholder="请输入手机号"
            type="tel"
        />
        <cell-input
            className='password'
             v-model="params.password"
            :showPwd = 'true'
            placeholder="请输入密码"
            type="password"
        />
        <div
            :class="['btn', params.mobile && params.password ? 'activeBtn' : '']"
            @click="registerNow">立即注册</div>
        </div>
        <div ref="captcha"></div>
  </div>
</template>
<script>
export default {
    name: 'Register',
    data () {
        return {
            clickEable: false,
            btnHtml: '获取验证码',
            params: {},
            instance: null
        }
    },
    mounted () {
        this.initCaptcha()
    },
    methods: {
        initCaptcha () {
            let that = this
            let options = {
                element: this.$refs.captcha,
                captchaId: '11e9956ab2c74a869904557b67b1e335',
                mode: 'popup',
                width: '320px',
                enableClose: false,
                onVerify: function (err, data) {
                    if (!err) { // 验证成功
                        that.register(data)
                        that.instance.isFinshed = true
                    }
                }
            }
            try {
                /* eslint-disable */
                initNECaptcha(options, function onLoad (instance) { // 初始化网易滑动验证成功
                    that.instance = instance
                }, function onerror (err) { // 初始化失败后触发该函数，err对象描述当前错误信息
                    console.log(err)
                })
                /* eslint-enable */
            } catch (error) { // 初始化前会打印引入错误，去除引入错误的打印
                if (error.name !== 'ReferenceError') console.log(error)
            }
        },
        registerNow () {
            const rules = {
                account: {
                    name: '账户',
                    type: 'validMobile',
                    value: this.params.mobile,
                    required: true
                },
                password: {
                    name: '密码',
                    type: 'validPwd',
                    value: this.params.password,
                    required: true
                }
            }
            if (!this.$utils.validityRule(rules)) return
            if (this.instance) { // 初始化成功弹出
                if (this.instance.isFinshed) {
                    this.instance.refresh()
                    this.instance.isFinshed = false
                }
                this.instance.popUp()
            } else {
                this.initCaptcha()
            }
        },
        register (data) {
            this.$apis.registerAccount({
                mobile: this.params.mobile,
                password: this.$CalcuMD5(this.params.password),
                validate: data.validate
            }).then(res => {
                if (res.code === '000') {
                    this.$toast('注册成功')
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
// @import './index.less';
</style>
-->
