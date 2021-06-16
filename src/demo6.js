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
