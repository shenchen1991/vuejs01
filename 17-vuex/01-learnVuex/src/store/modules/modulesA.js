export default {
  state: {
    name: 'testModuleA'
  },
  mutations: {
    aUpdateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '11'
    },
    fullName2(state, getters) {
      return getters.fullName + '22'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aAUpdateName(context) {
      setTimeout(() => {
        context.commit('aUpdateName', 'aAUpdateName')
      },1000)
    }
  }
}
