<template>
  <div class="homeHeader">
      <me-slider>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 1</swiper-slide>
      </me-slider>
  </div>
</template>

<script>
import meSlider from '../../components/meSlider'
import {swiperSlide} from 'vue-awesome-swiper'
// import {sliderOptions} from './config'
export default {
    name: 'homeSlider',
    components: {
        meSlider
    },
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
