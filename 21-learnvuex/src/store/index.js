import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";

// 1.安装插件
Vue.use(Vuex);

// 2.创建对象

const state = {
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
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }

});


// 3.导出store对象
export default store;


// 对象的解构
const obj = {
  name: 'coderwhy',
  age: 18,
  height: 1.88
}

const {name, age, height} = obj;

