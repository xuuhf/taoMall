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