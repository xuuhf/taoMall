<template>
  <div class="homeHeader">
      <me-slider
        :pagination="swiperOption.pagination"
        :loop="swiperOption.loop"
        :autoplay="swiperOption.autoplay"
        :speed="swiperOption.speed"
        :data="sliderList"
        >
          <swiper-slide v-for="item in sliderList" :key="item.key">
            <a :href="item.linkUrl" alt="" class='slider-link'>
                <img :src="item.picUrl" alt="" class='slider-img'>
            </a>
          </swiper-slide>
      </me-slider>
  </div>
</template>

<script>
import meSlider from '../../components/meSlider'
import {swiperSlide} from 'vue-awesome-swiper'
export default {
    name: 'homeSlider',
    components: {
        meSlider,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                direction: 'horizontal', // horizontal:水平 vertical:垂直
                pagination: true, // 是否需要分页器
                //循环
                loop:true,
                interval: 0, // 自动播放时间间隔，为0则不自动播放
            },
            sliderList: [
                {
                'linkUrl':'https://www.imooc.com',
                'picUrl':require('./1.jpg')
                },
                {
                'linkUrl':'https://www.imooc.com',
                'picUrl':require('./2.jpg')
                },
                {
                'linkUrl':'https://www.imooc.com',
                'picUrl':require('./3.jpg')
                },{
                'linkUrl':'https://www.imooc.com',
                'picUrl':require('./4.jpg')
                }
            ]
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
.slider-wapper {
    width: 100%;
    height: 183px;
  }
  .slider-link {
    display: block;
  }

  .slider-link,
  .slider-img {
    overflow: hidden;
    width: 100%;
  }
</style>
