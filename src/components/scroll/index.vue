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
        PULL_DOWN_TEXT_END} from './config'
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
        }
    },
    data () {
        return {
            indicator: true,
            inline: true,
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar'
                },
                on: {
                    touchMove: this.scroll
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

            // this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);

            // if (this.pulling) {
            //     return;
            // }
            if (swiper.translate) {
                if(!this.pullDown) {
                    return
                }
                if (swiper.translate > PULL_DOWN_HEIGHT) {
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START)
                } else {
                    this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT)
                }
            }
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
    .pull-down {
        position: absolute;
        left: 0;
        bottom: 100%;
        width: 100%;
        height: 80px;
    }
</style>
