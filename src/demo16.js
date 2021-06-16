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
