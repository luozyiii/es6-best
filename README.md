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

### 对象的拓展(demo10.js)

```javascript
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
```

### Symbol - 新的数据类型(demo11.js)

```javascript
/**
 * 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol。
 * 引用数据类型：对象(Object)、数组(Array)、函数(Function)。
 */

// 新增数据类型
let f = Symbol();
console.log(typeof f);

let my = Symbol('my');
console.log(my);
console.log(my.toString());

// 在对象中的应用
let b = Symbol();
let c = {
  [b]: 'leslie',
};
console.log(c[b]);
c[b] = 'hi';
console.log(c[b]);

// 受保护;在node 应用更多
let obj = { name: 'leslie', age: 18 };
let sex = Symbol();
obj[sex] = '男';
console.log('---------');
for (const key in obj) {
  console.log(obj[key]); // 没有输出 sex
}
```

### Set 和 WeakSet 数据结构(demo12.js)

```javascript
/**
 * Set
 */
// 声明
let a = new Set(['张三', '李四']);
a.add('小明');
console.log(a); // Set { '张三', '李四', '小明' }

// 去重
let b = new Set(['a', 'b', 'c', 'a']);
console.log(b);

// 查找has
b.has('a'); // true
b.has('d'); // false

// delete - 删除指定值； clear- 删除全部
b.delete('c');
console.log('delete:', b);

// for of
for (const item of b) {
  console.log(item);
}

// forEach
b.forEach((val) => console.log(val));

// size 属性
console.log(b.size);

/**
 * WeakSet
 */
let weakObj = new WeakSet();
let obj = { a: 'a', b: 'b' };
let obj2 = { a: 'a', b: 'b' };
weakObj.add(obj);
weakObj.add(obj2);
console.log('weakObj', weakObj);
```

### Map 数据结构(demo13.js)

> 高效、灵活

```javascript
// json
let json = {
  name: 'leslie',
  age: 18,
};
console.log(json.name); // 需要遍历对象查找的

// map =>
let map = new Map();
map.set(json, 'ima');
map.set('ima2', json);
map.set('ima3', json);
console.log(map);

// map增、删、查
// get
console.log(map.get(json)); // ima
// delete - 删除指定值； clear- 删除全部
map.delete('ima2');
console.log('delete后:', map);
// size 属性
console.log(map.size);
// 查找
map.has('ima3'); // true
```

### Proxy 代理(demo14.js)

> Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写

```javascript
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
```

### Promise 对象(demo15.js)

> Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。解决 es5 回调地狱问题。

```javascript
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
```

### Class 类(demo16.js)

```javascript
// class 声明
class Coder {
  // 类的参数
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  name(val) {
    console.log(val);
    return val;
  }
  skill(val) {
    console.log(`${this.name('李四')}的skill是${val}`);
  }
  add() {
    return this.a + this.b;
  }
}

// 使用
let a = new Coder();
a.name('张三');
a.skill('打游戏');

let b = new Coder(1, 2);
console.log(b.add());

// 类的继承 extends
class Htmler extends Coder {}

let c = new Htmler(2, 3);
console.log(c.add());
```

### module 模块化(demo17.js module/)

```javascript
// export 导出
// import 导入
import { name, add } from './module/a';
console.log(name);
console.log(add(1, 2));
```

### [Github](https://github.com/luozyiii/es6-best)
