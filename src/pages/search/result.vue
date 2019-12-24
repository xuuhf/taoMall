<template>
    <div class="result">
        <div class="loading-container" v-if="loading">
            <me-loading/>
        </div>
        <ul class="g-list" v-show="!loading && resultList.length">
            <li
                class="g-list-item"
                v-for="(item, index) of resultList"
                :key="index"
                @click="$_search_selectItem(item[0])">
                <span class="g-list-text">{{item[0]}}</span>
            </li>
        </ul>
        <div class="no-result" v-if="!loading && !resultList.length">没有结果</div>
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
    mixins: [searchMixin],
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    data () {
        return {
            resultList: [],
            loading: true
        }
    },
    watch: {
        query (query) {
            this.getSearchResult(query)
        }
    },
    methods: {
        getSearchResult (keyword) {
            if (!keyword) {
                return
            }
            this.loading = true
            getSearchResult(keyword).then(res => {
                return new Promise(reslove => {
                    if (res) {
                        this.loading = false
                        this.resultList = res
                        reslove()
                    }
                })
            })
        }
    }
  };
</script>

<style lang="scss" scoped>
</style>
