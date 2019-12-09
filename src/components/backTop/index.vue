<template>
    <transition name="backTop">
        <a
            href="javascript::"
            class="mine-backTop">
            <i class="iconfont iconicon-test"></i>
        </a>
    </transition>
</template>

<script>
export default {
    name: 'backTop'
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.mine-backTop {
    overflow: hidden;
    @include flex-center();
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, 0.6);
    border: none;
    border-radius: 50%;
    .iconfont {
        color: #fff;
        font-size: 38px;
    }
}

.mine-backTop {
    &-enter-active,
    &-leave-active {
        transition: opacity 0.4s;
    }
    &-enter,
    &-leave-to {
        opacity: 0;
    }
}
</style>
