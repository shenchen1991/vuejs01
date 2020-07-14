// 1.common.js的模块化规范
const {add,mul} = require('./js/mathUtil')

console.log(add(20,30));
console.log(mul(20, 30));

// 2.es6模块化规范
import {name,age} from "./js/info";
console.log(age);
console.log(name);

// 3.依赖css文件
// import css from './css/style.css'
require('./css/style.css')