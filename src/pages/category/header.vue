<template>
  <com-header class="header">
    <div class="header-center" slot="center">
        <input class="h-input" value="111"/>
        <i class="iconfont iconsousuo" @click="toseach"/>
    </div>
   <i class="iconfont iconmessage" slot="right"/>
  </com-header>
</template>

<script>
import comHeader from '../../components/comHeader'


  export default {
    name: 'CategoryHeader',
    components: {
      comHeader
    },
    methods: {
        toseach () {
        }
    }
  };
</script>

<style lang="scss" scoped>

  .header {
     background-color: rgba(255, 0, 0, 0.6);
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
    .iconfont {
        color: #fff;
        font-size: 20px;
    }
</style>
