<template>
    <div class="c_header">
        <slot name="left"></slot>
        <slot name="center"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style lang="scss" scoped>
@import 'index.scss'
</style>