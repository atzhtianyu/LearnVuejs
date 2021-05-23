import {DECREMENT, INCREMENT} from "./mutation-types";

export default {
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
}
