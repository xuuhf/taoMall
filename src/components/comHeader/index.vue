<template>
    <div class="comHeader">
        <div class="com-left common" v-if="$slots.left">
            <slot name="left"></slot>
        </div>
        <div class="com-center common" v-if="$slots.center">
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
.comHeader {
    display: flex;
    width: 100%;
    height: 100%;
    .common {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .com-left {
        margin-left: 10px;
    }
    .com-right{
        margin-right: 10px;
    }
    .com-center{
        flex: 1;
        margin: 0 10px;
    }
}
</style>