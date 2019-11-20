<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <router-view></router-view>
    </div>
    <div class="g-footer-container">
      <c-navbar/>
    </div>
  </div>
</template>

<script>
import CNavbar from './components/navbar/index'
export default {
  name: "App",
  components: {
      CNavbar
  }
};
</script>

<style lang="scss" scoped>
.g-container {
  width: 100%;
  height: 100%;
  .g-view-container {
    height: 100%;
    padding-bottom: 50px;
  }
  .g-footer-container {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(154, 141, 141, 0.6);
  }
}
</style>