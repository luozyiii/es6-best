// 以前，为变量赋值，只能直接指定值。
let a = 1;
let b = 2;
let c = 3;
// ES6 允许写成下面这样。
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);

// 解构赋值允许指定默认值。
let [moren = '默认'] = [];
console.log(moren);

// undfined null
let [z, y = '默认值y'] = ['变量z', undefined];
// let [z,y = '默认值y'] = ['变量z', null]

// 对象解构
let { foo, bar } = { foo: 'foo', bar: 'bar' };

// 字符串的解构赋值
const [a, b, c, d, e] = 'hello';
