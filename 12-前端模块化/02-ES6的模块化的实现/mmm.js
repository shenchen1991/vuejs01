import  {flag,sum,numb1} from "./a.js";

if (flag){
  console.log('小米是SB')
}


import {deal,Person} from "./a.js";
deal(11111111);

// 导入default对象
const person = new Person();
person.run()

// 导入default方法
import add from "./a.js"
add();
console.log(add);

// 5.统一全部导入
import * as all from "./a.js";
console.log(all.numb1);