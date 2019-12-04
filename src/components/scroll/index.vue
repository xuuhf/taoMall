<template>
    <swiper :options="swiperOption" ref="swiper">
        <swiper-slide>
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,
    PULL_UP_HEIGHT,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END
} from './config'
export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide,
    },
    props: {
        scrollbar: {
            type: Boolean,
            default: true
        },
    },
    data() {
      return { // 下拉参数设置
        pulling: false,
        pullDownText: PULL_DOWN_TEXT_INIT,
        pullUpText: PULL_DOWN_TEXT_INIT,//没有
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd,
            // transitionEnd: this.scrollEnd
          }
        }
      };
    },
    created () {
        // this.init()
    },
    methods: {
        init () {
            this.pulling = false;
            this.pullDownText = PULL_DOWN_TEXT_INIT;
            this.pullUpText = PULL_DOWN_TEXT_INIT;// 没有
            this.swiperOption = {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                setWrapperSize: true,
                scrollbar: {
                    el: this.scrollbar ? '.swiper-scrollbar' : null,
                    hide: true
                },
                on: {
                    sliderMove: this.scroll,
                    touchEnd: this.touchEnd,
                    transitionEnd: this.scrollEnd // 向上滑动时监听scrollEnd
                }
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.swiper-slide {
    height: auto;
}
</style>
