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
import comHeader from '../../components/comHeader'
import axios from 'axios'
export default {
    name: 'seach',
    components: {
        comHeader
    },
    data() {
        return {
          msg: 'seach'
        }
    },
    methods: {
        toseach () {
            axios.get('/data').then(res => {
                console.log(res.data)
            })
            .catch(error => {
            
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>