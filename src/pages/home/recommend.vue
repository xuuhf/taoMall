<template>
    <div class="recommend">
        <h3 class="recommend-title">猜你喜欢</h3>
        <div class="recommend-content">
            <div class="recommend-single"></div>
            <div class="recommend-single"></div>
            <div class="recommend-single"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'recommend',
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
.recommend {
    width: 100%;
    height: 100%;
    &-title {
        height: 30px;
        line-height: 30px;
        width: 100%;
        font-size: 16px;
        text-align: center;
    }
    .recommend-content {
        display: flex;
        flex-wrap: wrap;
        background-color: #fff;
        .recommend-single {
            width: 40%;
            height: 150px;
            border: 1px solid rosybrown;
            display: flex;
            justify-content: space-around;
            align-content: center;
            // flex-direction: column;
            // @include flex-aronud

        }
    }
}
</style>
