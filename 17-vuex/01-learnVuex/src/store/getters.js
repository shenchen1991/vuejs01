export default { // state 中数据的增强写法
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
}
