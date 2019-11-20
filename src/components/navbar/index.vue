<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item"  to="/home">
      <i class="iconfont iconshouye"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont iconfenlei"></i>
      <span>分类页</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icongouwuche"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont iconuser"></i>
      <span>个人中心</span>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'CTabbar',
    data () {
      return {
        isactive: false
      }
    },
    methods: {
      toHome () {
        this.isactive = true
      }
    }
}
</script>

<style lang="scss" scoped>
@import "index.scss";
.router-link-active {
  color: red;
}
</style>
