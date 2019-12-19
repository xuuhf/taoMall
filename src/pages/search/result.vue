<template>
    <div class="result">
        <div class="loading-container" v-if="loading">
            <me-loading/>
        </div>
        <ul class="g-list">
            <li class="g-list-item" v-for="(item, index) of resultList" :key="index">
                <span class="g-list-text">{{item[0]}}</span>
            </li>
        </ul>
        <div class="no-result">没有结果</div>
    </div>
</template>

<script>
  import MeLoading from '../../components/loadings';
  import {getSearchResult} from '../../api/search';
  import {searchMixin} from '../../assets/js/mixins';
  export default {
    name: 'SearchResult',
    components: {
        MeLoading
    },
    data () {
        return {
            resultList: [],
            loading: true
        }
    },
    methods: {
        getSearchResult () {
            return getSearchResult().then(res => {
                return new Promise(reslove => {
                    if (res) {
                        this.resultList = res
                    }
                })
            })
        }
    }
  };
</script>

<style lang="scss" scoped>
</style>
