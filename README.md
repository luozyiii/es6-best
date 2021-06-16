# es6-best

ES6 核心知识学习

### Babel (demo1.js)

> Babel 是一个 JavaScript 编译器; 将 ES6 转换成 ES5 语法

- 全局安装使用 Babel

```javascript
// 安装
npm install -g babel-cli
// 使用
babel src/demo1.js -o dist/demo1.js
```

- 在项目里使用 Babel(推荐)

```javascript
// 安装
yarn add @babel/cli -D
yarn add @babel/core -D
yarn add @babel/node -D
yarn add @babel/preset-env -D
yarn add core-js@3 -D

// .babelrc 配置文件
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": 3,
        "debug": false
      }
    ]
  ]
}

// package.json配置 转换命令 yarn babel:demo1
"babel:demo1": "babel src/demo1.js -o dist/demo1.js"

// 通过node 执行编译后的代码
node dist/demo1.js
```

### ES6 的声明方式 (demo2.js)

- var let const

```
var 全局声明
let 局部声明
const 常量声明, 不允许修改
```

### 变量的解构赋值 (demo3.js)

> ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构

- 基本用法

```javascript
// 以前，为变量赋值，只能直接指定值。
let a = 1;
let b = 2;
let c = 3;
// ES6 允许写成下面这样。
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
```

- 默认值：解构赋值允许指定默认值；解构不成功，变量的值就等于 undefined。

- 对象的解构赋值

```javascript
let { foo, bar } = { foo: 'foo', bar: 'bar' };
```

- 字符串的解构赋值

```javascript
const [a, b, c, d, e] = 'hello';
```

- 数值和布尔值的解构赋值

```javascript
// 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
let { toString: s } = 123;
s === Number.prototype.toString; // true
let { toString: s } = true;
s === Boolean.prototype.toString; // true
// 上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

// 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
let { prop: x } = undefined; // TypeError
let { prop: y } = null; // TypeError
```

### 拓展运算符和 rest 运算符(demo4.js)

- 对象拓展运算符(...)

```javascript
function func(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}

func(1, 2, 3);
```

- rest(...) 运算符

```javascript
function fun2(first, ...arg) {
  console.log(arg.length);
}
fun2([1, 2, 3, 4, 5]);
```

### 字符串的拓展 (demo5.js)

- 字符串模板

```javascript
const name = 'leslie';
let welcome = `欢迎${name}的到来`;
console.log(welcome);

let a = 1;
let b = 2;
console.log(`result: ${a + b}`);
```

- 字符串查找

###### includes 代替 indexOf

```javascript
let name2 = 'leslie';
let text = 'hi leslie';
console.log(text.indexOf(name2) > -1);
// 等价于
console.log(text.includes(name2));
```

###### startsWith endsWith

```javascript
// startsWith endsWith 开头和结尾查找
console.log(text.startsWith('hi'));
console.log(text.endsWith('lie'));
```

- 复制字符串 repeat

```javascript
console.log('hello'.repeat(3));
```

### 数值的扩展(demo6.js)

```javascript
// 二进制声明 Binary
let binary = 0b010101;
console.log(binary); // 21

// 八进制声明 Octal
let octal = 0o666;
console.log(octal); // 438

// isFinite 是否是数字
let a = 11 / 4;
console.log(Number.isFinite(a));
console.log(Number.isFinite('hi'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

// NaN
console.log(Number.isNaN(NaN));

// Number.isInteger()用来判断一个数值是否为整数。
console.log(Number.isInteger(10));
Number.parseInt('12.34'); // 12
Number.parseFloat('123.45#'); // 123.45

// 取值范围  Number.isSafeInteger() 是否是安全整数
// 最小安全整数
Number.EPSILON === Math.pow(2, -52); // true
Number.EPSILON; // 2.220446049250313e-16
Number.EPSILON.toFixed(20); // "0.00000000000000022204"

// 最大安全整数
Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1; // true
Number.MAX_SAFE_INTEGER === 9007199254740991; // true

Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER; // true
Number.MIN_SAFE_INTEGER === -9007199254740991; // true
```

### ES6 新增的数组(demo7.js)

- Array.from

```javascript
// json 数组格式
let json = {
  0: '张三',
  1: '李四',
  length: 2,
};

let arr = Array.from(json);
console.log(arr);
```

- Array.of

```javascript
console.log(Array.of(3, 4, 5, 6));
console.log(Array.of('a', 'b'));
```

- 数组实例的 find() 和 findIndex()

```javascript
let arr3 = [1, 2, 3];
console.log(arr3.find((n) => n < 2));
console.log(arr3.findIndex((n) => n < 2));
```

- 数组实例的 fill()

```javascript
['a', 'b', 'c'].fill(7); // [7, 7, 7]
new Array(3).fill(7); // [7, 7, 7]
```

- 数组实例的 entries()，keys() 和 values()

```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```

- 数组实例的 includes()

```javascript
[1, 2, 3].includes(2); // true
[(1, 2, 3)].includes(4); // false
[(1, 2, NaN)].includes(NaN); // true
```

- 数组实例的 flat()，flatMap()
  数组的成员有时还是数组，Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```javascript
// 默认拉平一层
[1, 2, [3, 4]].flat(); // [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat(); // [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]

// 将任意维度的数组转成一维数组
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]
```

### 箭头函数和拓展(demo8.js)

- 严格模式
  ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
- 箭头函数

```javascript
const add = (a, b) => {
  return a + b;
};
```

### ES6 中的函数和数组的补缺(demo9.js)

- 对象的函数解构

```javascript
let json = {
  a: '张三',
  b: '李四',
};
function func({ a, b = 'hi' }) {
  console.log(a, b);
}
func(json);
```

- 数组解构

```javascript
let arr = ['a', 'b'];
function func2(a, b) {
  console.log(a, b);
}
func2(...arr);
```

- in 的用法

```javascript
let obj = {
  a: '张三',
  b: '李四',
};
console.log('c' in obj); // false

let arr2 = ['a', , ,];
console.log(0 in arr2); // true
console.log(1 in arr2); // false
```

- 数组遍历

```javascript
let arr3 = ['a', 'b', 'c'];
arr3.forEach((val, index) => {
  console.log(index, val);
});

arr3.filter((x) => console.log(x));

arr3.some((x) => console.log(x));

let newArr = arr3.map((x) => (x = 'web'));
console.log(newArr);
```

- 数组转字符串

```javascript
console.log(arr3.toString());
console.log(arr3.join('|'));
```
