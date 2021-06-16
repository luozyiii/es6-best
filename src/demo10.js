// 属性更加简洁表示
let max = '大';
let min = '小';
let obj = { max, min }; // 等同于 let obj = {max: max, min: min}
console.log(obj);

// key 值的构建
let key = 'skill';
var obj2 = {
  [key]: 'web',
};
console.log(obj2);

// 自定义对象的方法
let obj3 = {
  add: function (a, b) {
    return a + b;
  },
};
console.log(obj3.add(1, 2));

/**
 * === 同值相等
 * is() 严格相等
 */
let a = { name: 'leslie' };
let b = { name: 'leslie' };
let c = Object.is(a, b); // 等价于 a.name === b.name
console.log(c); // false

console.log(+0 === -0); // true
console.log(NaN === NaN); // false

Object.is(+0, -0); // false
Object.is(NaN, NaN); // true

// 对象合并 Object.assign
let d = { name: 'hi' };
let e = { age: 18 };
let f = { sex: '男' };
let g = Object.assign(d, e, f);
console.log(g);
