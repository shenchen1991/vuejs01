<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button>按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'
  export default {
    name: "App",
    components:{
      Cpn
    },
    data() {
      return {
        message: 'myMessage'
      }
    },
    methods: {
      butClick() {
      }
    }
  }
</script>

<style scoped>
  .title {
    color: red;
  }

</style>