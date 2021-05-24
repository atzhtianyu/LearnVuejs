<template>
  <div id="app">

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import axios from "axios";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: ''
    }
  },
  created() {
    axios({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata',
    }).then(res => {
      this.result = res;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
