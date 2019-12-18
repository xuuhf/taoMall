<template>
    <me-scroll :scrollbar="false">
        <ul class="tab" >
            <li
            :class="{'tab-item-active': item.id === curId}"
            v-for="(item, index) of items" :key="index"
            class="tab-item" @click="switchTab(item.id)">
                {{item.name}}
            </li>
        </ul>
    </me-scroll>

</template>

<script>
import MeScroll from '../../components/scroll'
import {categoryNames} from './config'
export default {
    name: 'CategoryTab',
    components: {
        MeScroll
    },
    data () {
        return {
           curId: ''
        }
    },
    created () {
        this.init()
        this.switchTab(this.items[0].id)
    },
    methods: {
        init () {
            this.items = categoryNames
        },
        switchTab (id) {
            if (id === this.curId) {
                return
            }
            this.curId = id
            this.$emit('switch-tab', id)
        }
    }

};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
    .tab {
        width: 100%;
        &-item {
            height: 40px;
            background-color: #fff;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            color: #080808;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            line-height: 40px;
            @include ellipsis();

            &:last-child {
                border-bottom: none;
            }
        }
    }
    .tab-item-active {
        background: none;
        border-right: none;
        color: #f23030;
    }
</style>
