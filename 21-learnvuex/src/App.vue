<template>
  <div id="app">
    <h2>----------App内容: info对象的内容是否是响应式----------</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>----------APP内容----------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="subtraction">-</button>
    <button @click="addition">+</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>----------APP内容: getters相关内容----------</h2>

    <h2>{{ this.$store.getters.powerCounter }}</h2>
    <h2>{{ more20stu }}</h2>

    <h2>----------HelloVuex相关内容----------</h2>
    <hello-vuex></hello-vuex>

    <h2>{{ $store.getters.more20stu }}</h2>
    <h2>{{ $store.getters.more20stuLength }}</h2>
    <h2>{{ $store.getters.moreAgeStu(12) }}</h2>

    <h2>----------App内容: info对象的内容是否是响应式----------</h2>
    <h2>{{ $store.state.info }}</h2>

  </div>
</template>

<script>

import HelloVuex from "./components/HelloVuex";
import * as types from "./store/mutation-types";

export default {
  name: 'App',
  data() {
    return {
      message: '我是APP组件',
    }
  },
  methods: {
    addition() {
      this.$store.commit(types.INCREMENT);
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      // payload 负载
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count);

      // 2.特殊的提交封装: 会将整个payload对象传入vuex
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent() {
      const stu = {id: 114, name: 'alan', age: 35};
      this.$store.commit('addStudent', stu);
    },
    updateInfo() {
      // this.$store.commit('updateInfo');

      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里边已经完成了');
      //   }
      // });

      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
          console.log('里边完成了提交');
          console.log(res);
        })
    }
  },
  computed: {
    more20stu() {
      return this.$store.state.students.filter(s => s.age > 20);
    }
  },
  components: {
    HelloVuex
  }
}
</script>

<style>

</style>
