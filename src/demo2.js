/**
 * 全局声明
 */
var a = 'a';
{
  a = 'a2';
}
console.log(a);

/**
 * 局部声明
 */
var b = 'b';
{
  let b = 'b2';
}
console.log(b);

// {
//   let c = 'c';
// }
// console.log(c); // c is not defined

/**
 * 常量声明
 */
const d = 'd';
console.log(d);

/**
 * 在循环体中 var 和 let 区别
 */
for (var i = 0; i < 10; i++) {
  console.log('var循环体内:', i);
}
console.log('var循环体外:', i);

for (let i2 = 0; i2 < 10; i2++) {
  console.log('let循环体内:', i2);
}
console.log('let循环体外:', i2); // i2 is not defined
