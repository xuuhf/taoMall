<template>
   <swiper :options="swiperOption" :key="keyId">
       <slot></slot>
       <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
   </swiper>
</template>

<script>
import {swiper} from 'vue-awesome-swiper';
export default {
    name: 'meSlider',
    components: {
      swiper
    },
    props: {
        direction: {
            type: String,
            default: 'horizontal',
            validator(value) {
                return [
                    'horizontal',
                    'vertical'
                ].indexOf(value) > -1;
            }
        },
        interval: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0;
            }
        },
        slidesPerView: {
            type: Number,
            default: 3
        },
        loop: {
            type: Boolean,
            default: true
        },
        pagination: {
            type: Boolean,
            default: true
        },
        data: {
            type: Array,
            default() {
            return [];
            }
        }
    },
    data() {
        return {
          keyId: Math.random(),
          swiperOption: {}
        }
    },
    watch: {
        data(newData) {
            if (newData.length === 0) {
                return
            }
            this.swiperOption.loop = newData.length === 1 ? false : this.loop
            this.keyId = Math.random()
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            this.swiperOption = {
                // effect : 'cube',
                watchOverflow: true,
                direction: this.direction,
                autoplay: this.interval ? {
                    delay: this.interval,
                    disableOnInteraction: false
                } : false,
                // slidesPerView: 3,
                loop: true,
                pagination: {
                    el: this.pagination ? '.swiper-pagination' : null,
                    clickable: true
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
