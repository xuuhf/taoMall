<template>
  <div class="home">
    <header class="header-container">
      <home-header :isHeaderTransition="isHeaderTransition"  ref="header"/>
    </header>
    <me-scroll
        class="home-container"
        :data="recommends"
        :scrollbar="true"
        pullDown
        pullUp
        @scroll="scroll"
        @pull-down="pullToRefresh"
        @pull-up="pullUpMore"
        @scroll-end="scrollEnd"
        @pull-down-transition-end="pullDownTransitionEnd"
        ref="scroll">
        <home-slider class="home-slider" ref="slider"/>
        <home-nav class="home-nav"/>
        <home-recommend class="home-recommend" @loaded="getRecommends" ref="recommend"/>
    </me-scroll>
    <div class="backtop-container" v-if="isbackTopShow" @click="backToTop">
        <back-top/>
    </div>
  </div>
</template>

<script>
import homeHeader from './header'
import homeSlider from './slider'
import homeNav from './nav'
import homeRecommend from './recommend'
import MeScroll from '../../components/scroll'
import backTop from '../../components/backTop'
export default {
    name: 'home',
    components: {
      homeHeader,
      homeSlider,
      homeNav,
      homeRecommend,
      MeScroll,
      backTop
    },
    data() {
        return {
            recommends: [],
            isHeaderTransition: false,
            isbackTopShow: false,
            headerHeight: 100
        }
    },
    methods: {
        getRecommends (recommends) {
            this.recommends = recommends
        },

        pullToRefresh (end) {
            this.$refs.slider.update().then(end)
        },
        pullUpMore (end) {
            this.$refs.recommend.update().then(end).catch(err => {
                if(err) {
                    console.log(err)
                }
                end()
            })
        },
        pullDownTransitionEnd () {
            this.$refs.header.show()
        },
        scrollEnd (translate, swiper, pulling) {
            if(!pulling) {
                this.changeHeadDisplay(translate)
            }
            this.isbackTopShow = translate < 0 && -translate > swiper.height

        },
        scroll (translate) {
            this.changeHeadDisplay(translate)
        },
        backToTop () {
            this.$refs.scroll && this.$refs.scroll.scrollToTop()
        },
        changeHeadDisplay (translate) {
            if(translate > 0) {
               this.$refs.header.hide()
               return
            }

            this.$refs.header.show()

            this.isHeaderTransition = -translate > this.headerHeight
            console.log(this.isHeaderTransition)
        }
    }
}
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  .header-container {
    position: absolute;
    width: 100%;
    height: 40px;
    line-height: 40px;
    .Header-ransition {
        background-color: red;
    }
  }
  .home-container {
      overflow: hidden;
      height: 100%;
      width: 100%;
  }
  .HeaderTransition {
      display: none;
  }
  .backtop-container {
    width: 50px;
    height: 50px;
    z-index: 20000;
    position: absolute;
    bottom: 0px;
    right: 0;
  }

}
</style>
