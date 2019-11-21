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
    </div>
</template>

<script>
export default {
    name: 'comHeader'
}
</script>

<style lang="scss" scoped>
@import 'index.scss'
</style>