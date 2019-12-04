<template>
  <div class="homeHeader slider-wapper">
      <me-loading v-if="!sliders.length" :indicator="indicator" :textLoad="textLoad" :inline="inline"/>
      <me-slider
        :pagination="swiperOption.pagination"
        :loop="swiperOption.loop"
        :autoplay="swiperOption.autoplay"
        :speed="swiperOption.speed"
        :interval="swiperOption.interval"
        :data="sliders"
        v-else
        >
          <swiper-slide v-for="item in sliders" :key="item.key">
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
import {getHomeSlider} from '../../api/home'
import MeLoading from '../../components/loadings'
export default {
    name: 'homeSlider',
    components: {
        meSlider,
        swiperSlide,
        MeLoading
    },
    data() {
        return {
            indicator: true,
            textLoad: '加载中..........',
            inline: false,
            swiperOption: {
                direction: 'horizontal', // horizontal:水平 vertical:垂直
                pagination: true, // 是否需要分页器
                loop: true, // 循环
                interval: 0, // 自动播放时间间隔，为0则不自动播放
            },
            sliders: [
                // {
                // 'linkUrl':'https://www.imooc.com',
                // 'picUrl':require('./1.jpg')
                // },
                // {
                // 'linkUrl':'https://www.imooc.com',
                // 'picUrl':require('./2.jpg')
                // },
                // {
                // 'linkUrl':'https://www.imooc.com',
                // 'picUrl':require('./3.jpg')
                // },{
                // 'linkUrl':'https://www.imooc.com',
                // 'picUrl':require('./4.jpg')
                // }
            ]
        }
    },
    mounted () {
        this.getSliders()
    },
    methods: {
        update() {
        return this.getSliders();
      },
      getSliders() {
        return getHomeSlider().then(data => {
          this.sliders = data;
          console.log(this.sliders)
        });
      }
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
