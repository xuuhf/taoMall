<template>
  <div class="home">
    <seach />
  </div>
</template>

<script>
import seach from '../seach/index'
export default {
    name: 'home',
    components: {
      seach
    },
    data() {
        return {
          msg: '111111'
        }
    }
}
</script>