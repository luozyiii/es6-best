/**
 * 字符串模板
 */
const name = 'leslie';
let welcome = `欢迎${name}的到来`;
console.log(welcome);

let a = 1;
let b = 2;
console.log(`result: ${a + b}`);

/**
 * 字符串查找
 */
// includes 代替 indexOf
let name2 = 'leslie';
let text = 'hi leslie';
console.log(text.indexOf(name2) > -1);
// 等价于
console.log(text.includes(name2));
// startsWith endsWith
console.log(text.startsWith('hi'));
console.log(text.endsWith('lie'));
// 复制字符串repeat
console.log('hello'.repeat(3));
