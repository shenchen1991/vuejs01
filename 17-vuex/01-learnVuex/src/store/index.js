import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name:'test'
  },
  mutations: {},
  getters:{
    fullName(state){
      return state.name +'11'
    }

  }
}


const store = new Vuex.Store({
  state: {
    counter: 1110,
    students: [
      {name: 'kobe', age: 25},
      {name: 'james', age: 30},
      {name: 'james2', age: 10},
      {name: 'james3', age: 30}
    ],
    info: {
      name: 'kobe',
      age: 18,
      height: 1.98
    }
  },
  mutations: { // 修改状态（state）中的数据
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // state.counter += count

      state.counter += payload.count
      console.log(payload);
    },
    addStudent(state, student) {
      state.students.push(student)
    },
    updateInfo(state) {
      state.info.name = 'test';

      // Vue.set(state.info, 'address', 'LA')
      // // 响应式
      // Vue.delete(state.info, 'age')
    }
  },
  actions: { //异步操作
    // context:上下文
    aUpdateInfo(context, payLoad) {
      // setTimeout(() => {
      //   context.commit('updateInfo');
      //   console.log(payLoad.message);
      //   payLoad.success();
      // }, 1000)

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payLoad);
          resolve('完成')
        }, 1000)
      })
    }
  },
  getters: { // state 中数据的增强写法
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 25)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state, getters) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 导出仓库
export default store
