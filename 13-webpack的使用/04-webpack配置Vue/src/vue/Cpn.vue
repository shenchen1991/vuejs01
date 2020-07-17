<template>
  <div>
    <h2>我是CPN组件标题</h2>
    <p>我是内容</p>
    <p>{{name}}</p>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data(){
      return{
        name:'CPM名称'
      }
    }
  }
</script>

<style scoped>

</style>