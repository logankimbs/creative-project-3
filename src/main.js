import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data'

let data = {
    friends: mock,
    contacts: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
