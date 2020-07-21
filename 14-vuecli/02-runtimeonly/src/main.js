import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h(App)
  render: function (h) {
    return h(App)
  }
})


// runtime-compiler(v1)
// template -> ast -> render ->vdom -> UI

// runtime-only(v2) 性能更高 代码更少
// render -> vdom -> UI
