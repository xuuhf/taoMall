import axios from 'axios';
import {SUCC_CODE, TIMEOUT, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config';

// 打乱数组顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }

  return arr;
};

// 获取幻灯片数据--ajax
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: TIMEOUT
  }).then(res => {
    if (res.data.code === SUCC_CODE) {
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5));
      if (sliders.length === 0) {
        sliders = slider;
      }
      return sliders;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }

    // return [
    //   {
    //     linkUrl: 'https://www.imooc.com',
    //     picUrl: require('assets/img/404.png')
    //   }
    // ];
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  });
};

