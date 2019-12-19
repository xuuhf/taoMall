<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
        <div class="loading-container" v-if="!hotList.length">
            <me-loading/>
        </div>
        <ul class="hot-list" v-else>
            <li
                class="hot-item"
                v-for="(item, index) of hotList"
                :key="index"
                @click="gotoHotDEtail(item.hotWord)">
                {{item.hotWord}}
            </li>
        </ul>
  </div>
</template>

<script>
  import MeLoading from '../../components/loadings'
  import {getSearchHotKeyword} from '../../api/search';
  import {searchMixin} from '../../assets/js/mixins';

  export default {
    name: 'SearchHot',
    components: {
        MeLoading
    },
    data () {
        return {
            hotList: []
        }
    },
    created (){
        this.gethotList().then(() => {
            this.$emit('loaded');
        })
    },
    methods: {
        gethotList () {
            return getSearchHotKeyword().then(res => {
                return new Promise(reslove => {
                    if (res) {
                        this.hotList = res
                    }
                })
            })
        }
    }
  };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";

  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #f0f2f5;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
