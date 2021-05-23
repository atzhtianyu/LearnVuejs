export default {
  // context: 上下文

  // aUpdateInfo(context, payload) {
  //   console.log(payload);
  //   setTimeout(() => {
  //     context.commit('updateInfo');
  //     console.log(payload.message);
  //     payload.success();
  //   }, 1000)
  // }

  aUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfo');
        console.log(payload);
        resolve('111');
      }, 1000)
    })
  }
}
