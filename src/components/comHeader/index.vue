<template>
    <div class="comHeader">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
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