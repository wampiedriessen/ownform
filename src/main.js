import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import globallyRegisterOwnformComponents from './register.js'

Vue.config.productionTip = false

globallyRegisterOwnformComponents()

new Vue({
  render: h => h(App),
}).$mount('#app')
