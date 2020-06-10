<template>
    <div class="myvideo">
        <video
            id="lark-player"
            v-show="player_play"
            muted
        />
        <!-- <div v-show="!player_play" class="play-btn">
            <p ><i class="play" @click="goPlay"></i></p>
        </div> -->
    </div>
</template>

<script>
import larkplayer from 'larkplayer'
import error from '../../assets/images/error.png'
// import 'larkplayer-ui'
export default {
    data () {
        return {
           player_play: true,
           poster: 'https://github.com/dblate/larkplayer/blob/master/screenshots/poster.jpg?raw=true',
           src: '',
           play: null
        }
    },
    created () {
        this.src = 'https://baikebcs.bdimg.com/baike-other/big-buck-bunny.mp4'
    },
    mounted () {
        this.player = larkplayer('lark-player', {
            width: '100%',
            height: '100%',
            src: this.src,
            controls: true,
            // 隐藏原生控制条中的下载按钮
            controlsList: 'nodownload',
            // 循环播放
            loop: true,
            // 2 倍速播放
            playbackRate: 2,
            // 50% 音量
            volume: 0.5,
            // 静音播放
            muted: true,
            // “内联”播放
            playsinline: true,
            poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591764939887&di=a9efcd59f0ba00cd74fc7bcc54076b19&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3522767679%2C2275722546%26fm%3D214%26gp%3D0.jpg',
            preload: 'metadata',
        })
        // player.on('firstplay', function () {
        //     var duration = player.duration();
        //     // 跳转到视频中间
        //     player.currentTime(duration / 2);
        // });
        // this.player.play()

    },
    methods: {
        goPlay () {
            this.player_play = true
            this.player.play()
        }
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
