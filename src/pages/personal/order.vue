<template>
    <div class="myorder">
        <div class="wrapper1" ref="order1">
            <ul class="content" @click="clickTest" >
                <li v-for="(item, index) of recommends" :key="index">
                    <div class="single">{{item.name.shortName}}</div>
                </li>
            </ul>
        </div>
        <div class="wrapper2" ref="order2">
            <ul class="content" >
                <li v-for="(item, index) of recommends" :key="index">
                    <div class="single">{{item.name.shortName}}</div>
                </li>
            </ul>
        </div>
        <!-- <div class="wrapper">
            <ul class="content">
                <li>第一屏</li>
                <li>第二屏</li>
                <li>第三屏</li>
            </ul>
        </div> -->
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
        // this.$nextTick(() => {
        //     this.init()
        // })
    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            // 初始化它的时候，必须确保父元素和子元素的内容已经正确渲染了
            this.scroll = new BScroll(this.$refs.order1, {
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
            this.scroll.refresh(); // 如果子元素或者父元素 DOM 结构发生改变的时候，必须重新调用 scroll.refresh() 方法重新计算来确保滚动效果的正常。
            this.scroll2 = new BScroll(this.$refs.order2, {
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
            this.scroll2.refresh();
            // new BScroll('.wrapper', {
            // snap: {  // 滑块切换的一些配置
            //     threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
            //     stepY: window.innerHeight  // 纵向切换距离为窗口高度
            // }
            // });
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
        },
        clickTest () {
            console.log('222222222')
        }
    }

}
</script>

<style lang="scss" scoped>
    .myorder {
        width: 100%;
        height: 100%;
        border: 1px solid red;
        overflow: hidden;
        // overflow-y: scroll;
    }
    .wrapper1 {
        width: 100%;
        height: 80%;
        background: burlywood;
        overflow: hidden;
    }
    .wrapper2 {
        width: 100%;
        height: 100px;
        background: greenyellow;
        overflow: hidden;
    }
    .content {
        width: 100%;
        height: auto;
    }
    .single {
        width: 100%;
        height: 50px;
    }
//     .wrapper{ height: 100vh; overflow: hidden;}
// .content{ margin: 0; padding: 0;}
// .content li{ display: flex; justify-content: center; align-items: center; height: 100vh; list-style: none; font-size: 50px; font-weight: bold; color: #fff;}
// .content li:nth-child(1){ background: #f00;}
// .content li:nth-child(2){ background: #0f0;}
// .content li:nth-child(3){ background: #00f;}
</style>
