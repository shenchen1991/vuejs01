<template>
  <div id="app">

    <h2>---------子模块模块内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>

    <button @click="asyncUpdateName">异步操作</button>

    <h2>---------App内容：Info内容是否是响应式的----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">信息修改</button>

    <button @click="aUpdateInfo">A信息修改</button>


    <h2>{{message}}</h2>
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <button @click="addCount(10)">+10</button>
    <button @click="addCount(15)">+15</button>
    <button @click="addStudent">添加</button>


    <h2>---------App内容：getters相关信息----------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(18)}}</h2>


    <h2>---------App内容：Info内容是否是响应式的----------</h2>
    <h2>{{$store.state.info}}</h2>

    <h2>---------vuex：getters相关信息----------</h2>
    <hello-vuex></hello-vuex>


  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    methods: {
      add() {
        this.$store.commit('increment')
      },
      sub() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // 1.普通提交风格
        // this.$store.commit('incrementCount',count)

        // 2.特殊提交
        this.$store.commit({
          type: 'incrementCount',
          count: count
        })
      },
      addStudent() {
        const student = {name: 'alan', age: 40}
        this.$store.commit('addStudent', student)
      },
      updateInfo() {
        this.$store.commit('updateInfo')
      },
      aUpdateInfo() {
        // this.$store.dispatch('aUpdateInfo', {
        //   message: '我是Message',
        //   success: () => {
        //     console.log('我是成功信息');
        //   }
        // })

        this.$store.dispatch('aUpdateInfo', '我是Message').then(result => {
          console.log(result);
        })
      },
      asyncUpdateName() {
        this.$store.dispatch('aAUpdateName')
      }


    },
    data() {
      return {
        message: '我是传奇',
        counter: 0
      }
    }
  }
</script>

<style>
</style>
