<template>
  <div class="home">
    <header class="header-container">
      <home-header/>
    </header>
    <me-scroll class="home-container">
        <home-slider class="home-slider"/>
        <home-nav class="home-nav"/>
        <home-recommend class="home-recommend"></home-recommend>
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
          msg: '111111'
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
//   .home-content {
//       width: 100%;
//       height: 100%;
//         .home-slider {
//             width: 100%;
//             margin-top: -40px;
//             height: 180px;
//         }
//         .home-nav {
//             width: 100%;
//             background-color: #fff;
//         }
//   }
}
</style>
