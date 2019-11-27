<template>
  <div class="homeNav">
      <ul class="ul-list">
          <li class="nav-item" v-for="item of navList" :key="item.key">
              <a class="nav-link" :href="item.linkUrl">
                  <img class="nav-pic" :src="item.picUrl"/>
                  <span class="nav-text">{{item.text}}</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'homeNav',
    data() {
        return {
          navList: [
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-1.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-2.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-3.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-4.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-5.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-6.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-7.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-8.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-9.png'),
                    text: '拍卖'
                },
                {
                    linkUrl: 'https://www.imooc.com',
                    picUrl: require('./img/nav-item-10.png'),
                    text: '拍卖'
                }
            ]
        }
    },
    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .homeNav {
        width: 100%;
        padding-top: 15px;
        background-color: #fff;
        .ul-list {
            display: flex;
            flex-wrap: wrap;
            .nav-item {
                width: 20%;
                margin-bottom: 15px;
                .nav-link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    .nav-pic {
                        width: 60%;
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
</style>
