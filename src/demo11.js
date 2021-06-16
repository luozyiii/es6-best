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
