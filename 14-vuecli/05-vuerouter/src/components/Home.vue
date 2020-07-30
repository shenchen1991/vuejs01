<template>
  <div>
    <h2>我是主页</h2>
    <p>我是主页内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    created() {
      console.log('created');
      document.title = '首页'
    },
    destroyed() {
      console.log('destroyed');
    },

    // 只有使用的keep-alive组件才会回调
    activated() {
      console.log(this.path);
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    }
  }
</script>

<style scoped>

</style>
