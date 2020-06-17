<template>
    <div class="myorder" ref="myOrder">
        <div ref="mescroll" class="mescroll">
            <div>
                <div class="consumerList" v-for="(item, index) of consumerList" :key="index">
                    <p>{{item.bizTagText}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MeScroll from 'mescroll.js'
import 'mescroll.js/mescroll.min.css'
import {getHomeRecommend} from '../../api/home'
export default {
    name: 'mescrollOrder',
    data () {
        return {
            mescroll: null,
            consumerList: []
        }
    },
    mounted () {
        this.initMescroll()
    },
    methods: {
        initMescroll () {
            this.mescroll = new MeScroll(this.$refs.mescroll, { // 在mounted初始化mescroll,确保此处配置的ref有值
                down: {
                    htmlLoading: '<p class="upwarp-progress mescroll-rotate" style="margin-left: -1rem"></p><p class="upwarp-tip" >加载中..</p>',
                    auto: false, // 是否在初始化完毕之后自动执行下拉回调callback; 默认true
                    callback: this.downCallback // 下拉刷新的回调
                },
                up: {
                    callback: this.upCallback,
                    page: {
                        num: 0, // 当前页 默认0,回调之前会加1; 即callback(page)会从1开始
                        size: 20 // 每页数据条数,默认10
                    },
                    isBounce: false,// 更新到1.3.0 版本
                    offset: 100,
                    htmlNodata: '<p class="upwarp-nodata" style="margin-left: -1rem">下面没有了~</p>',
                    htmlLoading: '<p class="upwarp-progress mescroll-rotate" style="margin-left: -1rem"></p><p class="upwarp-tip" >加载中..</p>',
                    noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据
                    empty: {
                        // 列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
                        warpId: this.$refs.myOrder, // 父布局的id (1.3.5版本支持传入dom元素)
                        icon: '', // 图标,默认null,支持网络图
                        tip: '暂无消费记录~' // 提示
                    }
                }
            })
        },
        // 下拉刷新
        downCallback () {
            this.consumerList = []
            let params = {
                curPage: 1
            }
            // 联网请求
            getHomeRecommend(params).then((data) => {
                // 请求的列表数据
                let arr = data.itemList
                // 添加数据
                this.consumerList = arr
                // 数据渲染成功后,隐藏下拉刷新的状态
                this.$nextTick(() => {
                    this.mescroll.endSuccess() //无参. 注意结束下拉刷新是无参的
                })
            }).catch((e) => {
                // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                this.mescroll.endErr()
            })
        },
        // 上拉回调
        upCallback(page) {
            let params = {
                curPage: page.num
                // pageSize: page.size
            }
            // 联网请求
            getHomeRecommend(params).then((data) => {
                // 请求的列表数据
                let arr = data.itemList
                console.log(arr, 'up')
                // 如果是第一页需手动置空列表
                if (page.num === 1) this.consumerList = []
                // 把请求到的数据添加到列表
                this.consumerList = this.consumerList.concat(arr)
                // 数据渲染成功后,隐藏下拉刷新的状态
                this.$nextTick(() => {
                    this.mescroll.endSuccess(arr.length)
                })
            }).catch((e) => {
                // 联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                this.mescroll.endErr()
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.mescroll {
    position: fixed;
    top: 40px;
    bottom: 50px;
    height: auto;
}
.consumerList {
    display: flex;
    padding: 10px 10px;
    border: 1px solid red
 }
</style>
