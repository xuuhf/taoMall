<template>
    <div class="me-loading"></div>
</template>

<script>
export default {
    name: 'Me-loading',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixin";
.me-loading {
    width: 10px;
    @include ellipsis
}
</style>
