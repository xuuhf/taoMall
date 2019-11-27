<template>
    <div class="comHeader">
        <div class="com-left common" >
            <slot name="left"></slot>
        </div>
        <div class="com-center common" >
            <slot name="center"></slot>
        </div>
        <div class="com-right common" v-if="$slots.right">
            <slot name="right"></slot>
        </div>
        <h1 class="com-title" v-if="title" >
            <span class="title-content" v-text="title"></span>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'comHeader',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'index.scss'
</style>
