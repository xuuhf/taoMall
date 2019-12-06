<template>
    <div class="recommend">
        <h3 class="recommend-title">猜你喜欢</h3>
        <div class="recommend-loading" v-if="!recommends.length">
            <me-loading />
        </div>
        <ul class="recommend-content" v-else>
            <li class="recommend-item" v-for="(item, index) of recommends" :key="index">
                <router-link :to="{name: 'product', params: {id: item.baseinfo.itemId}}">
                    <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"/></p>
                    <p class="recommend-name">{{item.name.shortName}}</p>
                    <p class="recommend-origPrice"><del>¥{{item.price.origPrice}}</del></p>
                    <p class="recommend-info">
                        <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
                        <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
                    </p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import {getHomeRecommend} from '../../api/home'
import MeLoading from '../../components/loadings'
export default {
    name: 'recommend',
    components: {
        MeLoading
    },
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
                        this.curPage++
                        this.totalPage = data.totalPage
                        this.recommends = this.recommends.concat(data.itemList)
                        this.$emit('loaded', this.recommends)
                        resolve('success')
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
    .recommend-title {
        height: 30px;
        line-height: 30px;
        width: 100%;
        font-size: 16px;
        text-align: center;
        position: relative;
        &:before,
        &:after {
            content: '';
            position: absolute;
            top: 50%;
            width: 40%;
            height: 1px;
            background-color: #ddd;
        }
        &:before {
            left: 0;
        }
        &:after {
            right: 0;
        }
    }
    .recommend-content {
        @include flex-between;
        flex-wrap: wrap;
        .recommend-item {
            width: 49%;
            box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
            margin-bottom: 8px;
            background-color: #fff;
            .recommend-pic {
                width: 100%;
                position: relative;
                padding-top: 100%;
                margin-bottom: 5px;
                .recommend-img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
            .recommend-name {
                height: 36px;
                padding: 0 5px;
                margin-bottom: 8px;
                line-height: 1.5;
                @include ellipsis;
            }
            .recommend-origPrice {
                padding: 0 5px;
                margin-bottom: 8px;
                color: #ccc;
            }

            .recommend-info {
                @include flex-between();
                padding: 0 5px;
                margin-bottom: 8px;
            }

            .recommend-price {
                color: #e61414;
            }

            .recommend-price-num {
                font-size: 20px;
            }

            .recommend-count {
                color: #999;
            }
        }
    }
}
</style>
