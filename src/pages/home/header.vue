<template>
  <div class="homeHeader" v-show="visible">
    <com-header :class="{header: isHeaderTransition} " title="">
        <i class="iconfont iconscan" slot="left"/>
        <div class="header-center" slot="center">
            <input class="h-input"  value="111"/>
            <i class="iconfont iconsousuo" @click="toseach"/>
        </div>
        <i class="iconfont iconmessage" slot="right"/>
    </com-header>
  </div>
</template>

<script>
import comHeader from '../../components/comHeader'
import axios from 'axios'
export default {
    name: 'homeHeader',
    components: {
        comHeader
    },
    props: {
        isHeaderTransition: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
          visible: true
        }
    },
    methods: {
        show () {
            this.visible = true
        },
        hide () {
            this.visible =false
        },
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
.homeHeader {
    background-color: transparent;
    transition: background-color 0.5s;
    width: 100%;
    height: 100%;
    .header {
        background-color: rgba(255, 0, 0, 0.6);
    }
    .iconfont {
        color: #fff;
        font-size: 20px;
    }
    .header-center {
        width: 100%;
        position: relative;
        .h-input {
            width: 100%;
            height: 22px;
            border-radius: 40px;
            text-indent: 30px;
        }
        .iconsousuo {
            position: absolute;
            top: 0;
            left: 5px;
            color: #888;
        }
    }
}
</style>
