<template>
  <div class="category">
      category
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'category',
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                direction: 'vertical',
                slidesPerView: 'auto',
                freeMode: true,
                scrollbar:'.swiper-scrollbar',
                mousewheel: true,
                loop: true
            },
            scrollbar: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .category {
        width: 100%;
        height: 150px;
        border: 1px solid palegoldenrod;
    }
    .content {
        overflow: hidden;
        height: 100%;
        width: 100%;
    }
    .text {
        height: auto;
    }
</style>
