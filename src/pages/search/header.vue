<template>
    <com-header class="header">
        <i
            class="iconfont iconfanhui"
            slot="left"
            @click="goBack"
        />
        <me-search-box
            placeholder="开学季有礼，好货5折起"
            slot="center"
            @query="query"
        />
    </com-header>
</template>

<script>
  import comHeader from '../../components/comHeader'
  import MeSearchBox from '../../components/search-box'

  export default {
    name: 'SearchHeader',
    components: {
      comHeader,
      MeSearchBox
    },
    methods: {
      query(query) {
        this.$emit('query', query);
      },
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/mixin";

  .header {
    border-bottom: 1px solid #eee;

    .iconfont{
        color: #888;
        font-size: 20px;
    }

    .mine-search-box-wrapper {
      background-color: #f7f7f7;
    }
  }
</style>
