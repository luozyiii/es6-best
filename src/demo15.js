/**
 * promise 解决 es5 回调地狱问题
 * 1.洗菜做饭
 * 2.坐下吃饭
 * 3.洗碗
 */

let state = 1;
function step1(resolve, reject) {
  console.log('1.开始洗菜做饭');
  if (state === 1) {
    resolve('洗菜做饭-完成');
  } else {
    reject('洗菜做饭-出错');
  }
}
function step2(resolve, reject) {
  console.log('2.坐下吃饭');
  if (state === 1) {
    resolve('坐下吃饭-完成');
  } else {
    reject('坐下吃饭-出错');
  }
}
function step3(resolve, reject) {
  console.log('3.洗碗');
  if (state === 1) {
    resolve('洗碗-完成');
  } else {
    reject('洗碗-出错');
  }
}
new Promise(step1)
  .then(function (val) {
    console.log('val:', val);
    return new Promise(step2);
  })
  .then(function (val) {
    console.log('val:', val);
    return new Promise(step3);
  })
  .then(function (val) {
    console.log('val:', val);
    console.log('结束');
  });
