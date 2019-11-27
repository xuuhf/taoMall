<template>
  <div class="home">
    <header class="header-container">
      <home-header/>
    </header>
    <div class="home-content">
        <home-slider/>
    </div>
    <div class="backtop-container"></div>
  </div>
</template>

<script>
import homeHeader from './header'
import homeSlider from './slider'
export default {
    name: 'home',
    components: {
      homeHeader,
      homeSlider
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
  .header-container {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .home-content {
    width: 100%;
    height: 150px;
    background-color: aquamarine;
    margin-top: -40px;
  }
}
</style>
