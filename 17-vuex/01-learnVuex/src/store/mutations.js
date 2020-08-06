export default { // 修改状态（state）中的数据
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
}
