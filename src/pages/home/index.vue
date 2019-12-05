<template>
  <div class="home">
    <header class="header-container">
      <home-header/>
    </header>
    <me-scroll
        class="home-container"
        :data="recommends"
        pullDown
    >
        <home-slider class="home-slider"/>
        <home-nav class="home-nav"/>
        <home-recommend class="home-recommend" @loaded="getRecommends"/>
    </me-scroll>
    <div class="backtop-container"></div>
  </div>
</template>

<script>
import homeHeader from './header'
import homeSlider from './slider'
import homeNav from './nav'
import homeRecommend from './recommend'
import MeScroll from '../../components/scroll'
export default {
    name: 'home',
    components: {
      homeHeader,
      homeSlider,
      homeNav,
      homeRecommend,
      MeScroll
    },
    data() {
        return {
            recommends: []
        }
    },
    methods: {
        getRecommends (recommends) {
            this.recommends = recommends
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
  }
  .home-container {
      overflow: hidden;
      height: 100%;
      width: 100%;
  }
}
</style>
