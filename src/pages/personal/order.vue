<template>
    <div class="myorder">
        <div class="wrapper" ref="order">
            <ul class="content" >
                <li v-for="(item, index) of recommends" :key="index">
                    <div class="single">{{item.name.shortName}}</div>
                </li>
            </ul>
        <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {getHomeRecommend} from '../../api/home'
export default {
    name: 'order',
    data () {
        return {
            scroll: {},
            recommends: [],
            curPage: 1,
            totalPage: 1
        }
    },
    created () {
        this.getRecommend()
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.scroll = new BScroll(this.$refs.order, {
                scrollY: true,
                click: true,
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                },
                pullUpLoad: {
                    threshold: 50
                }
            })
            this.scroll.refresh();
        },
        getRecommend () {
            if (this.curPage > this.totalPage) {
                return Promise.reject(new Error('没有更多了'));
            }
            return getHomeRecommend(this.curPage).then(data => {
                return new Promise(resolve => {
                    if(data) {
                        this.curPage++
                        this.totalPage = data.totalPage
                        this.recommends = this.recommends.concat(data.itemList)
                        this.$emit('loaded', this.recommends)
                        resolve()
                    }
                })
            })
        }
    }

}
</script>

<style lang="scss" scoped>
    .myorder {
        width: 100%;
        height: 200px;
        border: 1px solid red;
        overflow: hidden;
        // overflow-y: scroll;
    }
    .wrapper {
        width: 100%;
        height: 100%;
    }
    .content {
        width: 100%;
        height: auto;
    }
    .single {
        width: 100%;
        height: 50px;
    }
</style>
