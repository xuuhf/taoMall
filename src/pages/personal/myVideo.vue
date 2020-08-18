<template>
    <div class="myvideo">
        <!-- <video
            id="lark-player"
            v-show="player_play"
            muted
        /> -->
        <div>
            <p>防抖测试</p>
            <button @click="clickDebounce" style="width: 50px; height: 30px">点这啊</button>
            <p>节流测试</p>
            <button @click="clickThrottle" style="width: 50px; height: 30px">点这啊</button>
        </div>
        <!-- <div  v-viewer>
            <img :src="showImg" style="width: 100px; height: 100px">
        </div>
        <viewer :images="images">
            <img v-for="src in images" :src="src.picUrl" :key="src" style="width: 100px; height: 100px">
        </viewer> -->
        <img :src="showImg" preview="0" preview-text="描述文字" style="width: 100px; height: 100px">
        <draggable class="wrapper" v-model="list">
            <!-- 过度效果 -->
            <transition-group>
            <div v-for="item in list" :key="item" class="item">
                <p>{{item}}</p>
            </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
import {getHomeSlider} from '../../api/home'
import draggable from 'vuedraggable'
// import { debounce } from '../../assets/js/util'
// import lodash from "lodash"
let debounce = require('lodash/debounce')
let throttle = require('lodash/throttle')
// import { throttle, debounce } from 'throttle-debounce'
// import larkplayer from 'larkplayer'
// import error from '../../assets/images/error.png'
// import 'larkplayer-ui'
export default {
    components: {
        draggable
    },
    data () {
        return {
            dataList: [{
                name: 'qqq',
                name: 'eccccv',
                name: 'ttttttt'
            }],
            list: {},
            list: [
                1,
                2,
                3
            ],
            player_play: true,
            poster: 'https://github.com/dblate/larkplayer/blob/master/screenshots/poster.jpg?raw=true',
            src: '',
            play: null,
            showImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595429176599&di=19215126a554b24cbce7455925b4d6e2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
            images: [
                // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595429176599&di=19215126a554b24cbce7455925b4d6e2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg',
                // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595429176599&di=19215126a554b24cbce7455925b4d6e2&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg'
            ]
        }
    },
    created () {
        this.src = 'https://baikebcs.bdimg.com/baike-other/big-buck-bunny.mp4'
    },
    mounted () {
        this.getSliders()
        // this.player = larkplayer('lark-player', {
        //     width: '100%',
        //     height: '100%',
        //     src: this.src,
        //     controls: true,
        //     // 隐藏原生控制条中的下载按钮
        //     controlsList: 'nodownload',
        //     // 循环播放
        //     loop: true,
        //     // 2 倍速播放
        //     playbackRate: 2,
        //     // 50% 音量
        //     volume: 0.5,
        //     // 静音播放
        //     muted: true,
        //     // “内联”播放
        //     playsinline: true,
        //     poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591764939887&di=a9efcd59f0ba00cd74fc7bcc54076b19&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3522767679%2C2275722546%26fm%3D214%26gp%3D0.jpg',
        //     preload: 'metadata',
        // })
        // player.on('firstplay', function () {
        //     var duration = player.duration();
        //     // 跳转到视频中间
        //     player.currentTime(duration / 2);
        // });
        // this.player.play()

    },
    methods: {
        getSliders() {
            return getHomeSlider().then(data => {
                this.images = data;
            });
        },
        goPlay () {
            this.player_play = true
            this.player.play()
        },
        clickDebounce: debounce(function () {
            console.log('防抖测试')
        }, 2000),
        clickThrottle: throttle(() => {
            console.log('节流测试啊')
        }, 2000)
        // clickDebounce () {
        //     this.$debounce(this.click)
        // },
        // click () {
        //     console.log('抖动')
        // }
        // clickDebounce: debounce (function () {
        //     console.log('222,')
        // })
        // clickDebounce () {
        //     const debounceFunc = debounce(1000, (num) => {
        //         console.log('num:', num)
        //     })
        //     debounceFunc(10)
        // }
    }
}
</script>

<style lang="scss" scoped>
.myvideo {
    width: 100%;
    height: 200px;
    border: 1px solid pink;
    position: relative;
    #lark-player {
        width: 100%;
        height: 100%;
    }
    .poster_img {
        width: 100%;
        height: 100%;
    }
    .play-btn {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        i.play{
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background: url('../../assets/images/play.png') no-repeat center;
            background-size: 100%;
            margin-bottom: 5%;
        }
    }
}
</style>
