var name = 'A';
var age = 18;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(100, 20));
}

// 1.导出方式
export {
  flag,
  sum
}

// 2.导出方式
export var numb1 = 10;

// 3.导出函数、类
export function deal(num) {
  console.log(num);
}

export class Person {
  run() {
    console.log('person.run');
  }
}

// 5.export.default
// const address = '杭州'
// export default address

export default function () {
  console.log('export default function');
}