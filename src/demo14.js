// Proxy 代理 ES6 增强对象和函数 生命周期 钩子函数（预处理）
let pro = new Proxy(
  {
    add: function (val) {
      return val + 100;
    },
    name: 'I am Leslie',
  },
  {
    // 前两个参数必选，第三个参数 可选
    get: function (target, key, property) {
      console.log('come in get');
      return target[key];
    },
    // 4 个参数 value: 改变后的值 receiver：原始值
    set: function (target, key, value, receiver) {
      console.log(`setting ${key} = ${value}`);
      return (target[key] = value);
    },
  },
);
console.log(pro.name);
pro.name = 'hello';
console.log(pro.name);

// apply
let target = function () {
  return 'I am Leslie';
};
let handler = {
  apply(target, ctx, args) {
    console.log('do apply');
    return Reflect.apply(...arguments);
  },
};
let pro2 = new Proxy(target, handler);
console.log(pro2());
