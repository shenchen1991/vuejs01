<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+ userId">用户</router-link>
    <!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      homeClick() {
        // this.$router.push('/home')

        this.$router.replace('/home')

      },
      aboutClick() {
        this.$router.push('/about')
      }
    },
    data() {
      return {
        userId: 'chen'
      }
    }
  }
</script>

<style>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    /*text-align: center;*/
    /*color: #2c3e50;*/
    /*margin-top: 60px;*/
  }
</style>
