<template>
    <div class="newsModel">
        <div class="swiper">
            <div class="swiper-container newsSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in newsList" :key="index">
                        <div class="news-item">
                            <img class="new-img" :src="item.coverImage"/>
                            <div class="news-text">
                                <div class="news-type">
                                    <span class="type-text">{{item.newsTypeTxt}}</span>
                                </div>
                                <p class="news-time">{{item.publishDate}}</p>
                                <p class="news-content">{{item.newsContentInfo}}</p>
                            </div>
                            <!-- <button class="more" @click="handleDetails(item)">更多</button> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev btn-swiper"></div>
            <div class="swiper-button-next btn-swiper"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min.js'
export default {
    name: 'news',
    props: {
        newsList: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            newsInfo: []
        }
    },
    watch: {
        newsList (val) {
            this.newsInfo = val
            this.newsInfo.forEach(item => {
                item.newsTypeTxt = item.newsTypeTxt.length > 16 ? item.newsTypeTxt.substring(0, 16) + '...' : item.newsTypeTxt
                item.newsContentInfo = item.newsContentInfo.length > 50 ? item.newsContentInfo.substring(0, 50) + '...' : item.newsContentInfo
            })
        }
    },
    created () {
        new Swiper('.newsSwiper', {
            slidesPerView: 3,
            // loopedSlides: this.newsInfo.length,
            // autoplay: 6000,
            // speed: 6000,
            loop: true,
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next'
        })
        console.log(this.newsInfo)
    }
}
</script>

<style lang="less" scoped>
@import './news.less';
</style>
