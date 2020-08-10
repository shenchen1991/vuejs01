<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="#db639b">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="#db639b">
      <img slot="item-icon" src="~assets/img/tabbar/type.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/type-active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="#db639b">
      <img slot="item-icon" src="~assets/img/tabbar/shopping.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopping-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="#db639b">
      <img slot="item-icon" src="~assets/img/tabbar/my.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/my-active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/tabbar/TabBar";
  import TabBarItem from "components/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
