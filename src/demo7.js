/**
 * Array.from
 */
// json 数组格式
let json = {
  0: '张三',
  1: '李四',
  length: 2,
};

let arr = Array.from(json);
console.log(arr);

/**
 * Array.of
 */
console.log(Array.of(3, 4, 5, 6));
console.log(Array.of('a', 'b'));

/**
 * 数组实例的 find() 和 findIndex()
 */

let arr3 = [1, 2, 3];
console.log(arr3.find((n) => n < 2));
console.log(arr3.findIndex((n) => n < 2));

/**
 * 数组实例的 fill()
 */

['a', 'b', 'c'].fill(7); // [7, 7, 7]
new Array(3).fill(7); // [7, 7, 7]

/**
 * 数组实例的 entries()，keys() 和 values()
 */
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

/**
 * 数组实例的 includes()
 */
[1, 2, 3].includes(2); // true
[(1, 2, 3)].includes(4); // false
[(1, 2, NaN)].includes(NaN); // true

/**
 * 数组实例的 flat()，flatMap()
 */
[(1, 2, [3, 4])].flat(); // [1, 2, 3, 4]

[1, 2, [3, [4, 5]]].flat(); // [1, 2, 3, [4, 5]]

[1, 2, [3, [4, 5]]].flat(2); // [1, 2, 3, 4, 5]

/**
 * 如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数。
 * 将任意维度的数组转成一维数组
 */
[1, [2, [3]]].flat(Infinity); // [1, 2, 3]

// flatMap()只能展开一层数组
