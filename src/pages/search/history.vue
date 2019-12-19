<template>
  <div class="history">
    <h4 class="history-title">历史搜索</h4>
    <ul class="g-list">
        <li class="g-list-item">
            <span class="g-list-text"></span>
            <i class="iconfont icon-delete"></i>
        </li>
    </ul>
    <a href="javascript:;" class="history-btn"><i class="iconfont icon-clear"></i>清空历史搜索</a>
  </div>
</template>

<script>
  import storage from '../../assets/js/storage';
  import {SEARCH_HISTORY_KEYWORD_KEY} from './config';
  import {searchMixin} from '../../assets/js/mixins';
  export default {
    name: 'SearchHistory'
  };
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";

  .history {
    padding-bottom: 30px;
    background-color: #fff;

    &-title {
      height: 34px;
      line-height: 34px;
      padding: 0 10px;
      font-size: 12px;
      font-weight: bold;
    }

    &-btn {
      @include flex-center();
      width: 80%;
      height: 40px;
      background: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 0 auto;
      color: #686868;

      .iconfont {
        margin-right: 5px;
      }
    }
  }

  .g-list {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }

</style>
