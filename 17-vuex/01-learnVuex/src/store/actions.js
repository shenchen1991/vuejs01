export default { //异步操作
  // context:上下文
  aUpdateInfo(context, payLoad) {
    // setTimeout(() => {
    //   context.commit('updateInfo');
    //   console.log(payLoad.message);
    //   payLoad.success();
    // }, 1000)

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payLoad);
        resolve('完成')
      }, 1000)
    })
  }
}
