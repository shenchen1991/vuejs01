import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

axios({
  url: 'https://httpbin.org/ip',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'https://www.bilibili.com/video/BV17j411f74d',
  params: {
    p: 142
  }
}).then(res => {
  console.log(res);
})


// 2.axios发送并发请求
axios.all([axios({
  url: 'https://httpbin.org/headers'
}), axios({
  url: 'https://httpbin.org/ip'
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))


// 3.使用全局的配置
// axios.defaults.baseURL = 'https://httpbin.org';
// axios.defaults.timeout = 5

// 2.axios发送并发请求
axios.all([axios({
  url: '/headers'
}), axios({
  url: '/ip'
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))

// 4.创建对应的axios的实例
const instance1 = axios.create({
  baseURL: 'https://httpbin.org',
  timeout: 50000
})

instance1({
  url: '/headers'
}).then(res => {
  console.log(res);
})


import {request} from './network/request'

// request({
//   url: '/headers'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })


request({
  url: '/headers'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})
