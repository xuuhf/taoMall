<template>
   <swiper :options="swiperOption">
       <slot/>
       <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
   </swiper>
</template>

<script>
import {swiper} from 'vue-awesome-swiper';
export default {
    name: 'meSlider',
    data() {
        return {
          msg: '111111'
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.homeHeader {

}
</style>
