<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <!--<template v-slot:item-icon>-->
        <!--  <img src="./assets/img/tabbar/home.svg" alt="">-->
        <!--</template>-->
        <!--<template v-slot:item-text>-->
        <!--  <div>首页</div>-->
        <!--</template>-->
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from './components/tabbar/TabBar'
import TabBarItem from "./components/tabbar/TabBarItem";

export default {
  name: 'App',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>

  @import "./assets/css/base.css";

</style>
