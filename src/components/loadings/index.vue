<template>
    <div class="mine-loading" :class="{'mine-loading-inline': inline}">
        <span class="img-loading" v-if="indicator">
            <slot><img src="./loading.gif"/></slot>
        </span>
        <span class="text-loading" v-if="textLoad">{{textLoad}}</span>
    </div>
</template>

<script>
export default {
    name: 'MeLoading',
    props: {
        indicator: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: '加载中...'
        },
        inline: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            textLoad: this.text
        }
    },
    watch: {
        text(text) {
            this.textLoad = text
        }
    },
    methods: {
        setText(text) {
            this.textLoad = text
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.mine-loading {
    overflow: hidden;
    width: 100%;
    height: 100%;
    @include flex-center(column);

    &.mine-loading-inline {
        flex-direction: row;
        .img-loading ~ .text-loading {
            margin-top: 0;
            margin-left: 6px;
        }
    }
}
.img-loading ~ .text-loading {
    margin-top: 6px;
}
</style>
