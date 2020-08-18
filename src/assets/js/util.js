// 函数节流
export const debounce = (func, delay = 1000) => {
  let timer = null;

  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/*
 * 自定义防抖
 * @param {Function} fn
 * @param {Number} wait 延迟时间，默认500ms
 * @param {boolean} immediate 是否立即执行一次 默认true
 * @author hh
 */
// let debounce
// const Debounce = (fn, wait = 1000, immediate = true) => {
//     if (typeof fn === 'boolean') {
//         debounce && clearTimeout(debounce)
//     } else {
//         Debounce(true)
//         if (immediate) {
//             let callNow = !debounce
//             debounce = setTimeout(function () {
//                 debounce = null
//             }, wait)
//             if (callNow) fn()
//         } else {
//             debounce = setTimeout(() => {
//                 fn()
//                 debounce = null
//             }, wait)
//         }
//     }
// }

// module.exports = Debounce
