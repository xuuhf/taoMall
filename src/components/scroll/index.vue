<template>
    <swiper :options="swiperOption" ref="swiper">
        <div class="pull-down" v-if="pullDown">
            <me-loading
                :inline="inline"
                ref="pullDownLoading"
            />
        </div>
        <swiper-slide class="text">
            <slot></slot>
        </swiper-slide>
        <div class="pull-up" v-if="pullUp">
            <me-loading
                :inline="inline"
                ref="pullUpLoading"
            />
        </div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import MeLoading from '../loadings/index'
import {PULL_DOWN_HEIGHT,
        PULL_DOWN_TEXT_INIT,
        PULL_DOWN_TEXT_START,
        PULL_DOWN_TEXT_ING,
        PULL_DOWN_TEXT_END,
        PULL_UP_HEIGHT,
        PULL_UP_TEXT_INIT,
        PULL_UP_TEXT_START,
        PULL_UP_TEXT_ING} from './config'
export default {
    name: 'meScroll',
    components: {
        swiper,
        swiperSlide,
        MeLoading
    },
    props: {
        data: {
            type: [Array, Object]
        },
        pullDown: {
            type: Boolean,
            default: true
        },
        pullUp: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            pulling: false,
            indicator: true,
            inline: true,
            pullDownText: PULL_DOWN_TEXT_INIT,
            pullUpText: PULL_DOWN_TEXT_INIT,
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                setWrapperSize: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true
                },
                on: {
                    sliderMove: this.scroll,
                    touchEnd: this.touchEnd
                }
                // mousewheel: true
            }
        }
    },
    watch: {
        data() {
            this.update()
        }
    },
    methods: {
        update() {
            this.$refs.swiper && this.$refs.swiper.swiper.update()
        },

        scroll () {
            const swiper = this.$refs.swiper.swiper
            if (this.fulling) {
                return
            }
            if (swiper.translate > 0) {
                if(!this.pullDown) {
                    return
                }
                if (swiper.translate > PULL_DOWN_HEIGHT) {
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
                } else {
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
                }
            } else if (swiper.isEnd){
                // 上拉
                if (!this.pullUp) {
                    return
                }
                const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
                if (isPullUp) {
                    this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT)
                } else {
                    this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START)
                }
            }
        },
        touchEnd () {
            if (this.fulling) {
                return
            }
            const swiper = this.$refs.swiper.swiper
            if (swiper.translate > PULL_DOWN_HEIGHT) { // 下拉
                if(!this.pullDown) {
                    return
                }
                this.pulling = true
                swiper.allowTouchMove = false
                swiper.setTransition(swiper.params.speed)
                swiper.setTranslate(PULL_DOWN_HEIGHT)
                swiper.params.virtualTranslate = true
                this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING)
                this.$emit('pull-down', this.pullDownEnd)
            } else if(swiper.isEnd) { // 底部
                const totalHeight = parseInt(swiper.$wrapperEl.css('height'))
                const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'))
                if (isPullUp) {
                    // 上拉
                    if (!this.pullUp) {
                        return
                    }
                    this.pulling = true
                    swiper.allowTouchMove = false // 禁止触摸
                    swiper.setTransition(swiper.params.speed)
                    swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height))
                    swiper.params.virtualTranslate = true // 不回弹
                    this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING)
                    this.$emit('pull-up', this.pullUpEnd)
                }
            }
        },
        pullDownEnd () {
            const swiper = this.$refs.swiper.swiper
            this.pulling = true
            swiper.allowTouchMove = true
            swiper.setTransition(swiper.params.speed)
            swiper.setTranslate(PULL_DOWN_HEIGHT)
            swiper.params.virtualTranslate = false
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END)
            swiper.setTranslate(0)
            setTimeout(() => {
                this.$emit('pull-down-transition-end')
            },swiper.params.speed)
        },
        pullUpEnd () {
            const swiper = this.$refs.swiper.swiper
            this.pulling = true
            swiper.allowTouchMove = true // 禁止触摸
            swiper.params.virtualTranslate = false // 不回弹
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END)
            this.$emit('pull-up', this.pullUpEnd)
        }


    }
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
    .swiper-slide {
        height: auto;
    }
    .pull-down,
    .pull-up {
        position: absolute;
        left: 0;
        width: 100%;
    }
    .pull-down {
        bottom: 100%;
        height: 80px;
    }
    .pull-up {
        top: 100%;
        height: 30px;
    }
</style>
