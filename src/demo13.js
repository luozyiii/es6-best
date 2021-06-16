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
