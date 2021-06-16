// 对象的函数解构
let json = {
  a: '张三',
  b: '李四',
};
function func({ a, b = 'hi' }) {
  console.log(a, b);
}
func(json);

// 数组解构
let arr = ['a', 'b'];
function func2(a, b) {
  console.log(a, b);
}
func2(...arr);

// in 的用法
let obj = {
  a: '张三',
  b: '李四',
};
console.log('c' in obj); // false

let arr2 = ['a', , ,];
console.log(0 in arr2); // true
console.log(1 in arr2); // false

/**
 * 数组遍历
 */
let arr3 = ['a', 'b', 'c'];
arr3.forEach((val, index) => {
  console.log(index, val);
});

arr3.filter((x) => console.log(x));

arr3.some((x) => console.log(x));

let newArr = arr3.map((x) => (x = 'web'));
console.log(newArr);

/**
 * 数组转字符串
 */
console.log(arr3.toString());
console.log(arr3.join('|'));
