<template>
    <com-header>
        <div class="user-header" slot="left"/>
        <span slot="center">{{msg}}</span>
    </com-header>
</template>

<script>
import comHeader from '../../components/comHeader'
export default {
    name: 'personal',
    components: {
       comHeader
    },
    data() {
        return {
          msg: 'xuxu'
        }
    },
    created () {
        this.getText()
    },
    methods: {
        getText () {
            console.log(this.count)
        }
    }
}
</script>

<style lang="scss" scoped>
.user-header {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    outline: none;
    background: url('./header.png') no-repeat;
    background-size: 100%;
    overflow: hidden;
    border: none;
}
</style>
