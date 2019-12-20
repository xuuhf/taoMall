<template>
    <div class="cart">
        <div class="c-header">
            <cart-header/>
        </div>
        <div class="c-content-container">
            <cart-content></cart-content>
        </div>
    </div>
</template>

<script>
import cartHeader from './header'
import cartContent from './content'
export default {
    name: 'cart',
    components: {
        cartHeader,
        cartContent
    },
    data() {
        return {
           msg: 'cart'
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin";
    .cart {
        width: 100%;
        height: 100%;
    }
    .c-header {
        height: 40px;
    }
    .c-content-container {
        height: 100%;
        width: 100%;
        @include flex-center();
    }
</style>
