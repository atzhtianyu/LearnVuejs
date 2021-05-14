<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面内容，嘿嘿嘿</p>
    <h2>{{$route.params.userId}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      // this.$route 代表的是当前页面活跃的路由
      return this.$route.params.userId;
    }
  },
  created() {
    console.log('User created');
  },
  destroyed() {
    console.log('User destroyed');
  },
  methods: {
    btnClick() {
      // 所有的组件都继承自vue类的原型
      console.log(this.$router);
      console.log(this.$route);
      this.test();
      console.log(this.name);
    }
  }
}
</script>

<style scoped>

</style>
