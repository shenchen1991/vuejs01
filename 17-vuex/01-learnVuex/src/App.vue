<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h1>{{counter}}</h1>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <hello-vuex :counter = "counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: 'App',
  components:{
    HelloVuex
  },
  data(){
    return {
      message:'我是传奇',
      counter:0
    }
  }
}
</script>

<style>
</style>
