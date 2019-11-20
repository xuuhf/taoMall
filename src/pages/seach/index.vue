<template>
  <div class="seach">
    <div class="s-header">
        <header class="h-left" v:slot="left">1111</header>
        <header class="h-center" v:slot="center">
            <input class="h-input"/>
            <i class="iconfont iconsousuo" @click="toseach"/>
        </header>
        <header class="h-right" v:slot="right">333</header>
    </div>
  </div>
</template>

<script>
import header from '../../components/header'
export default {
    name: 'seach',
    components: {
        header
    },
    data() {
        return {
          msg: 'seach'
        }
    },
    methods: {
        toseach () {
            console.log('toseach')
        }
    }
}
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>