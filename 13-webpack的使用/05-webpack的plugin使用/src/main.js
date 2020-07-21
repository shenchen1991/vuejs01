// 1.common.js的模块化规范
const {add, mul} = require('./js/mathUtil')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.es6模块化规范
import {name, age} from "./js/info";

console.log(age);
console.log(name);

// 3.依赖css文件
import css from './css/style.css'
// require('./css/style.css')

// 4.依赖less文件
require('./css/special.less')

document.writeln('<h2>good boy</h2>')

// 5.使用Vue进行开发
import Vue from 'vue'
// import App from './vue/app'
import App from './vue/App.vue'

const app = new Vue({
  el: "#app",
  template: `
    <App/>
  `,
  components: {
    App
  }
})