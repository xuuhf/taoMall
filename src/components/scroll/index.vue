<template>
    <div class="MeScroll">
        <swiper :options="swiperOption" ref="swiper">
            <div class="pullDown">
                <!-- 下拉 -->
            </div>
            <swiper-slide>
                <slot></slot>
            </swiper-slide>
            <div class="pullUp">
                <!-- 上拉 -->
            </div>
            <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
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
        scrollbar: {}
    },
    data () {
        return {
            swiperOption: {

            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
