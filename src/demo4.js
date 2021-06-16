/**
 * 1
 */
function func(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
}

func(1, 2, 3);

/**
 * 2
 */
let arr1 = ['a', 'b', 'c'];
// let arr2 = arr1; // 共用内存空间
let arr2 = [...arr1]; // 开辟新的内存空间
console.log('arr2:', arr2);
arr2.push('d');
console.log('arr1:', arr1);

/**
 * rest ...
 */
function fun2(first, ...arg) {
  console.log(arg.length);
}
fun2(1, 2, 3, 4, 5);
