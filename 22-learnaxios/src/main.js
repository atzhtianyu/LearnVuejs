import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

// 最新接口地址：baseURL = "http://152.136.185.210:7878/api/m5"
// 看清楚哦，不要漏掉了/api/m5，也是接口的一部分
// 看一下我下面两个接口的使用方法，建议先在浏览器测试，学会接口的使用，再去修改自己的代码。
// 还请大家遵守规则，不要破坏规则，否则不再提供接口，并且这样才会给老师更多的动力创造更多优质的课程给大家。

new Vue({
  render: h => h(App),
}).$mount('#app')

// 使用全局的axios
// axios.defaults.baseURL = 'http://152.136.185.210:7878/api/m5';
// axios.defaults.timeout = 5000;
//
// axios({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: '/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   },
// }).then(res => {
//   console.log(res);
// })
//
// // 2.axios发送并发请求
// axios.all([
//   axios({
//     url: 'http://152.136.185.210:7878/api/m5/home/multidata'
//   }),
//   axios({
//     url: 'http://152.136.185.210:7878/api/m5/home/data',
//     params: {
//       type: 'pop',
//       page: 5
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//
//
// const names = ['coderwhy', 'kobe', 'james']
//
// const [name1, name2, name3] = names;


// 4.创建对应的axios实例

// const instance1 = axios.create({
//   baseURL: 'http://152.136.185.210:7878/api/m5',
//   timeout: 5000
// });
//
// instance1({
//   url: '/home/multidata'
// }).then((res) => {
//   console.log(res);
// });
//
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res);
// });
//
// const instance2 = axios.create({
//   baseURL: '',
//   timeout: 10000,
//   headers: []
// })

// 5.封装request模块

import {request} from "@/network/request";

// request({
//       url: 'home/multidata',
//     }, res => {
//       console.log(res);
//     },
//     err => {
//       console.log(err);
//     }
// )

// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   failure: function (err) {
//     console.log(err);
//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})

