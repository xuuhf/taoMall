<template>
    <div class="recommend">
        <h3 class="recommend-title">猜你喜欢</h3>
        <div class="recommend-content">
            <!-- <ul>
                <li>
                    <router-link></router-link></li>
            </ul> -->
        </div>
    </div>
</template>

<script>
import {getHomeRecommend} from '../../api/home'
export default {
    name: 'recommend',
    data () {
        return {
            recommends: [],
            curPage: 1,
            totalPage: 1
        }
    },
    created () {
        this.getRecommend()
    },
    methods: {
        update() {
            return this.getRecommend();
        },
        getRecommend () {
            if (this.curPage > this.totalPage) {
                return Promise.reject(new Error('没有更多了'));
            }
            return getHomeRecommend(this.curPage).then(data => {
                return new Promise(reslove => {
                    if(data) {
                        console.log(data)
                        this.curPage++
                        this.totalPage = data.totalPage
                        this.recommends = this.recommends.concat(data.recommends)
                        console.log(this.recommends)
                        // this.$emit('loaded', this.recommends);
                        // resolve();
                    }
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.recommend {
    width: 100%;
    height: 100%;
    &-title {
        height: 30px;
        line-height: 30px;
        width: 100%;
        font-size: 16px;
        text-align: center;
    }
    .recommend-content {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        .recommend-single {
            width: 40%;
            height: 150px;
            border: 1px solid rosybrown;
            display: flex;
            justify-content: space-around;
            align-content: center;
            // flex-direction: column;
            // @include flex-aronud

        }
    }
}
</style>
