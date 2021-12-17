import Vue from 'vue'
import App from './App.vue'

import "xuans2/dist/css/index.css"
import MUI from "xuans2"
Vue.use(MUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
