import axios from 'axios'

export function request(config) {

  // 1.创建axios的创建
  const instance = axios.create({
    baseURL: 'https://httpbin.org/',
    timeout: 5000
  })
  // 2.axios的拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    // 部分信息不符合服务器的要求

    // 2.发网络请求时页面展示请求图标

    // 3.某些网络请求必须携带一些特殊信息（token）
    return config;
  }, error => {
    console.log(error);
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res.data);
    return res.data
  }, error => {
    console.log(error);
  })

  // 发送真正的网络请求
  return instance(config)


  // return new Promise((resolve, reject) => {
  //   // 1.创建axios的创建
  //   const instance = axios.create({
  //     baseURL: 'https://httpbin.org/',
  //     timeout: 5000
  //   })
  //   // 发送真正的网络请求
  //   instance(config).then(res => {
  //     resolve(res)
  //   }).catch(err => {
  //     reject(err)
  //   })
  // })
}

// export function request(config, success, failure) {
//   // 1.创建axios的实例
//   const instance = axios.create({
//     baseURL: 'https://httpbin.org/',
//     timeout: 5000
//   })
//   // 发送真正的网络请求
//   instance(config).then(res => {
//     success(res)
//   }).catch(err => {
//     failure(err)
//   })
// }
