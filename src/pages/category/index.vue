<template>
  <div class="category">
    <header class="g-header-container">
      <category-header/>
    </header>
    <div class="g-content-container">
      <div class="sidebar">
          <categoryTab @switch-tab="tabSwitch"/>
      </div>
      <div class="main">
          <category-content :tabId="tabId"/>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryHeader from './header';
  import CategoryTab from './tab';
  import CategoryContent from './content';

  export default {
    name: 'Category',
    components: {
      CategoryHeader,
      CategoryTab,
      CategoryContent
    },
    data () {
        return {
            tabId: ''
        }
    },
    methods: {
        tabSwitch (id) {
            this.tabId = id
        }
    }
  };
</script>

<style lang="scss" scoped>
  .category {
    overflow:hidden;
    width:100%;
    height:100%;
    background-color: #eee;
    .g-content-container {
        height: 100%;
      display: flex;
  }
  .sidebar {
    width: 80px;
    height: 100%;
  }
  .main {
    flex: 1;
    height: 100%;
  }
  }

  .g-header-container {
      height: 40px;
  }

</style>
