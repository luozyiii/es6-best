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
