<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from "./childComponents/HomeSwiper";

  import {getHomeMultiData} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar, HomeSwiper
    },
    data() {
      return {
        banners: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultiData().then(res => {
        // this.banners = res;
        this.banners = [{
          link: "http://www.baidu.com",
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597079184973&di=3ac53432b9511cb43dce2f653942373a&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
        }, {
          link: "http://www.baidu1.com",
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597079742340&di=975b34d7c76fa35a8e307cce0a3c7363&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F56%2F12%2F01300000164151121576126282411.jpg"
        }, {
          link: "http://www.baidu.com",
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597079184973&di=3ac53432b9511cb43dce2f653942373a&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
        }, {
          link: "http://www.baidu.com",
          image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597079184973&di=3ac53432b9511cb43dce2f653942373a&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F36%2F48%2F19300001357258133412489354717.jpg"
        }]
        console.log(this.banners);
      })
    }

  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }

</style>
