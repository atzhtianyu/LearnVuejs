import Vue from 'vue';
import Vuex from 'vuex';
import {DECREMENT, INCREMENT} from "./mutation-types";

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'Kobe', age: 24},
      {id: 112, name: 'James', age: 30},
      {id: 113, name: 'Curry', age: 10},
    ],
    info: {
      name: 'Kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    incrementCount(state, payload) {
      // console.log(payload);
      // 单独取出count使用
      state.counter += payload.count;
    },
    addStudent(state, student) {
      state.students.push(student);
    },
    updateInfo(state) {
      // 这里前边有一个响应式的语句，后边的非响应式也变成响应式了（原因不明）
      state.info.name = 'coderwhy';

      // 在mutation里，如果是异步操作，那么devtools不能很好地追踪这个操作什么时候被完成
      // setTimeout(() => {
      //   state.info.name = 'coderwhy'
      // }, 1000)

      // 可以变成响应式
      // Vue.set(state.info, 'address', '洛杉矶');

      // delete做不到响应式
      // delete state.info.age;

      // 做成响应式
      // Vue.delete(state.info, 'age');
    }
  },
  actions: {
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
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20);
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length;
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age);
      // }
      return age => {
        return state.students.filter(s => s.age > age);
      }
    }
  }

});


// 3.导出store对象
export default store;
