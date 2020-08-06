import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import modulesA from "./modules/modulesA"

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
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
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: modulesA
  }
})

// 导出仓库
export default store

// 对象结构

const obj = {
  name: "test",
  age: 18
}

const {name, age} = obj
console.log(name);
