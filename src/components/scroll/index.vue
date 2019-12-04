<template>
    <swiper :options="swiperOption">
        <swiper-slide class="text">
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'meScroll',
    components: {
        swiper,
        swiperSlide
    },
    data () {
        return {
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar: {
                    el: '.swiper-scrollbar'
                }
                // mousewheel: true
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
</style>
