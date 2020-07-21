<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的信息嘿嘿嘿</p>
    <p>{{$route.params.userId}}</p>
    <p>{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
