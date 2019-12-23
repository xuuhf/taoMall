<template>
  <transition name="search">
    <div class="search">
        <header class="g-header-container">
            <search-header @query="getQuery"/>
        </header>
        <div class="g-content-container">
            <me-scroll ref="scroll">
                <search-hot @loaded="updateScroll" v-show="!query"/>
                <search-history
                @show-confirm="showConfirm"
                ref="history"
                v-show="!query"
                @remove-item="updateScroll"/>
                <search-result :query="query" v-show="query"/>
            </me-scroll>
        </div>
        <me-confirm
            msg="确定要清空吗"
            ref="confirm"
            @confirm="clearAllSearchHistorys"
        />
  </div>
  </transition>
</template>

<script>
  import MeScroll from '../../components/scroll';
  import MeConfirm from '../../components/confirm';
  import SearchHeader from './header';
  import SearchHot from './hot';
  import SearchHistory from './history';
  import SearchResult from './result';

  export default {
    name: 'search',
    components: {
      MeScroll,
      MeConfirm,
      SearchHeader,
      SearchHot,
      SearchHistory,
      SearchResult
    },
    data () {
        return {
            query: ''
        }
    },
    methods: {
        getQuery(query) {
            this.query = query
        },
        clearAllSearchHistorys () {
            this.$refs.history.clear()
            this.$refs.history.update()
        },
        showConfirm () {
            this.$refs.confirm.show()
        },
        updateScroll () {
            this.$refs.scroll.update()
        }
    }
  };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
@import './index.scss';
    .search {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1200;
        background-color: #f5f5f5;
    }
    .search-enter-active,
    .search-leave-active {
        transition: all 0.3s;
    }

    .search-enter,
    .search-leave-to {
        transform: translate3d(100%, 0, 0);
    }
    .g-header-container {
        height: 45px;
        background-color: #fff;
    }
    .g-content-container {
        height: 100%;
    }
    .swiper-wrapper {
        height: auto;
    }
</style>
