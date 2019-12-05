<template>
    <swiper :options="swiperOption" ref="swiper">
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
    props: {
        data: {
            type: [Array, Object]
        }
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
    },
    watch: {
        data() {
            this.update()
        }
    },
    methods: {
        update() {
            this.$refs.swiper && this.$refs.swiper.swiper.update()
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
